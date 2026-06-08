'use client';

import { Button } from "@/components/ui/button";
import { useAxiosPost } from "@/public/api/conect/conect_api";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
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

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  });

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
        className="w-full md:flex-1 max-w-md space-y-4"
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 space-y-4 hover:border-white/10 transition-colors">
          <h3 className="text-white font-semibold text-lg mb-2">Envie uma mensagem</h3>

          {/* Name */}
          <div className="space-y-1.5">
            <label className="text-xs text-zinc-500 font-medium">Nome</label>
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full h-11 px-4 text-sm text-white placeholder:text-zinc-600 bg-white/5 border border-white/10 rounded-lg outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all hover:border-white/20"
              {...register("name_user")}
            />
            {errors.name_user && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-red-400"
              >
                {errors.name_user.message}
              </motion.p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-xs text-zinc-500 font-medium">Email</label>
            <input
              type="email"
              placeholder="seu@email.com"
              className="w-full h-11 px-4 text-sm text-white placeholder:text-zinc-600 bg-white/5 border border-white/10 rounded-lg outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all hover:border-white/20"
              {...register("email")}
            />
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-red-400"
              >
                {errors.email.message}
              </motion.p>
            )}
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label className="text-xs text-zinc-500 font-medium">Mensagem</label>
            <textarea
              placeholder="Sua mensagem..."
              rows={4}
              className="w-full px-4 py-3 text-sm text-white placeholder:text-zinc-600 bg-white/5 border border-white/10 rounded-lg outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none hover:border-white/20"
              {...register("content")}
            />
            {errors.content && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-red-400"
              >
                {errors.content.message}
              </motion.p>
            )}
          </div>

          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-11 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 cursor-pointer"
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
      </motion.form>

      <Modal open={open} onClose={() => onOpen(false)} />
    </>
  );
};
