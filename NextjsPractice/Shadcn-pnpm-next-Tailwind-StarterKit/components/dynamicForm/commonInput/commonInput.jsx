'use client'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

function CommonInput({ placeholder, type, name, value, label, showForgotPassword }) {
  return (
    <div className="grid w-full items-center gap-1.5">
      <div className="flex items-center justify-between">
        {label && <Label htmlFor={name}>{label}</Label>}
        {showForgotPassword && (
          <Link
            href="/forgot-password"
            className="text-xs text-zinc-500 hover:text-zinc-950 hover:underline underline-offset-4 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            Forgot your password?
          </Link>
        )}
      </div>
      <Input
        id={name}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        className="w-full"
      />
    </div>
  );
}

export default CommonInput;