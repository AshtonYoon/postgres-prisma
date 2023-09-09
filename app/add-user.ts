"use server";

import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

export async function addUser(formData: FormData) {
  // console.log(formData);
  await prisma.users.upsert({
    where: { email: "irwin@futurewiz.co.kr" },
    update: {},
    create: {
      name: "Irwin Yoon",
      email: "irwin@futurewiz.co.kr",
      image:
        "https://i.pinimg.com/originals/cc/93/62/cc936205185ead1946513e52402a570f.jpg",
    },
  });
  redirect("/");
}
