import { useState, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { QuoteForm } from "./QuoteForm";

export function QuoteDialog({ trigger }: { trigger: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-lg" dir="rtl">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-black text-start">
            اطلب عرض سعر
          </DialogTitle>
          <DialogDescription className="text-start">
            املأ البيانات التالية وسيتواصل معك مهندس مختص لمناقشة تفاصيل مشروعك.
          </DialogDescription>
        </DialogHeader>
        <QuoteForm compact onDone={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
