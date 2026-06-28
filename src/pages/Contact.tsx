// Requires VITE_WEB3FORMS_KEY env variable — get a free key at web3forms.com
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [state, setState] = useState<FormState>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name,
          email,
          message,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) throw new Error();
      setState("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setState("error");
    }
  };

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto w-full px-6 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-medium">Get in touch</h1>
          <p className="text-gray-500">
            Have a question or feedback? Send a message and I'll get back to
            you.
          </p>
        </div>

        {state === "success" ? (
          <p className="text-gray-500">
            Message sent — thanks! I'll be in touch soon.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-md flex flex-col gap-5"
          >
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={state === "loading"}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={state === "loading"}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                disabled={state === "loading"}
                className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] min-h-32 resize-none disabled:opacity-50"
              />
            </div>

            {state === "error" && (
              <p className="text-sm text-destructive">
                Something went wrong — please try again.
              </p>
            )}

            <Button
              type="submit"
              size="lg"
              className="w-fit"
              disabled={state === "loading"}
            >
              {state === "loading" ? "Sending…" : "Send message"}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
