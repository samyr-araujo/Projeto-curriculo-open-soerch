'use client';

import { Button } from "@/components/ui/button";
import { useAxiosPost } from "@/public/api/conect/conect_api";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import z from "zod";
import { Modal } from "./dialog";

export const schema = z.object({
  name_user: z.string().min(2, "Nome deve ter ao menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  content: z.string().min(10, "Mensagem deve ter ao menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof schema>;

export const ContactForm = () => {
  const [open, onOpen] = useState<boolean>(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  });

  const registerWithFocus = (name: keyof ContactFormData) => {
    const { onBlur, ...rest } = register(name);
    return {
      ...rest,
      onFocus: () => setFocusedField(name),
      onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFocusedField(null);
        onBlur(e);
      },
    };
  };

  const { post } = useAxiosPost();

  const onSubmit = async (data: ContactFormData) => {
    const success = await post("/createmessage", data);
    if (success) {
      onOpen(true);
    }
  };

  return (
    <>
      <motion.form
        className="w-full md:flex-1 max-w-md"
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-7 space-y-5 hover:border-white/10 transition-all duration-500 relative overflow-hidden">
          {/* Card glow on focus */}
          <div className={`absolute inset-0 transition-opacity duration-700 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 ${focusedField ? 'opacity-100' : 'opacity-0'}`} />

          <div className="relative space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold text-lg">Envie uma mensagem</h3>
              <div className="flex items-center gap-1.5 text-xs text-zinc-600">
                <CheckCircle2 size={12} />
                <span>Seguro</span>
              </div>
            </div>

            {/* Name */}
            <motion.div
              className="space-y-2"
              animate={focusedField === 'name_user' ? { scale: 1.01 } : { scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <label className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Nome</label>
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full h-12 px-4 text-sm text-white placeholder:text-zinc-600 bg-white/[0.03] border border-white/10 rounded-xl outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10 focus:bg-white/[0.05] transition-all hover:border-white/15"
                {...registerWithFocus("name_user")}
              />
              <AnimatePresence>
                {errors.name_user && (
                  <motion.p
                    initial={{ opacity: 0, y: -8, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, y: -8, height: 0 }}
                    className="text-xs text-red-400 flex items-center gap-1"
                  >
                    <span className="h-1 w-1 rounded-full bg-red-400" />
                    {errors.name_user.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Email */}
            <motion.div
              className="space-y-2"
              animate={focusedField === 'email' ? { scale: 1.01 } : { scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <label className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Email</label>
              <input
                type="email"
                placeholder="seu@email.com"
                className="w-full h-12 px-4 text-sm text-white placeholder:text-zinc-600 bg-white/[0.03] border border-white/10 rounded-xl outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10 focus:bg-white/[0.05] transition-all hover:border-white/15"
                {...registerWithFocus("email")}
              />
              <AnimatePresence>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -8, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, y: -8, height: 0 }}
                    className="text-xs text-red-400 flex items-center gap-1"
                  >
                    <span className="h-1 w-1 rounded-full bg-red-400" />
                    {errors.email.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Message */}
            <motion.div
              className="space-y-2"
              animate={focusedField === 'content' ? { scale: 1.01 } : { scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <label className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Mensagem</label>
              <textarea
                placeholder="Sua mensagem..."
                rows={4}
                className="w-full px-4 py-3 text-sm text-white placeholder:text-zinc-600 bg-white/[0.03] border border-white/10 rounded-xl outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10 focus:bg-white/[0.05] transition-all resize-none hover:border-white/15"
                {...registerWithFocus("content")}
              />
              <AnimatePresence>
                {errors.content && (
                  <motion.p
                    initial={{ opacity: 0, y: -8, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, y: -8, height: 0 }}
                    className="text-xs text-red-400 flex items-center gap-1"
                  >
                    <span className="h-1 w-1 rounded-full bg-red-400" />
                    {errors.content.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium rounded-xl transition-all hover:shadow-xl hover:shadow-blue-500/20 disabled:opacity-50 cursor-pointer border-0"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send size={16} />
                    Enviar mensagem
                  </span>
                )}
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.form>

      <Modal open={open} onClose={() => onOpen(false)} />
    </>
  );
};
