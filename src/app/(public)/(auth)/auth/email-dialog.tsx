"use client";

import { Button } from "@/components/ui/button";
import { Dialog as CnDialog, DialogContent as CnDialogContent, DialogTrigger as CnDialogTrigger } from "@/components/ui/dialog";
import { Drawer as CnDrawer, DrawerContent as CnDrawerContent, DrawerTrigger as CnDrawerTrigger } from "@/components/ui/drawer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useMediaQuery from "@/hooks/media-query";
import { cn } from "@/lib/utils/cn";
import { useEffect, useMemo, useState } from "react";
import { SignInForm } from "./sign-in-form";
import { useFormStatus } from "react-dom";
import { SignUpForm } from "./sign-up-form";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ArrowBigRightDash, ArrowUpRight, CornerRightUp, Mails } from "lucide-react";

export interface JohnDoeApiRespone {
    first: string;
    last: string;
    tags: string;
    bio: string;
}

export function EmailDialog() {
    const [open, setOpen] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)");

    const DialogType = useMemo(() => (isDesktop ? CnDialog : CnDrawer), [isDesktop]);
    const DialogTrigger = useMemo(() => (isDesktop ? CnDialogTrigger : CnDrawerTrigger), [isDesktop]);
    const DialogContent = useMemo(() => (isDesktop ? CnDialogContent : CnDrawerContent), [isDesktop]);

    const [johnDoe, setJohnDoe] = useState<JohnDoeApiRespone>({
        first: "John",
        last: "Doe",
        tags: "Software Engineer",
        bio: "I'm batman.",
    });

    useEffect(() => {
        fetch("https://api.saintkappa.dev/johndoe").then(async (res) => res.ok && setJohnDoe((await res.json()) as JohnDoeApiRespone));
    }, []);

    return (
        <DialogType open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" onClick={() => setOpen(true)}>
                                Continue with Email <ArrowBigRightDash className="ml-2" strokeWidth={1.5} />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Sign in using an email and password</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </DialogTrigger>
            <DialogContent className="p-0">
                <EmailForm isDesktop={isDesktop} johnDoe={johnDoe} />
            </DialogContent>
        </DialogType>
    );
}

function EmailForm({ isDesktop, johnDoe }: { isDesktop: boolean; johnDoe: JohnDoeApiRespone }) {
    const status = useFormStatus();

    return (
        <Tabs defaultValue="signIn">
            <TabsList className={cn("grid grid-cols-2 max-w-80 mx-auto", isDesktop ? "mt-8" : "mt-4")}>
                <TabsTrigger value="signIn" disabled={status.pending}>
                    Sign In
                </TabsTrigger>
                <TabsTrigger value="signUp" disabled={status.pending}>
                    Create account
                </TabsTrigger>
            </TabsList>
            <TabsContent value="signIn" className="mt-0">
                <SignInForm johnDoe={johnDoe} />
            </TabsContent>
            <TabsContent value="signUp" className="mt-0">
                <SignUpForm johnDoe={johnDoe} />
            </TabsContent>
        </Tabs>
    );
}
