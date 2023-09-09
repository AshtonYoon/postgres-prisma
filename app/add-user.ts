"use server";

import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import { generateName } from "@/lib/name";

export async function addUser(formData: FormData) {
  // DELETE FROM users WHERE id > 3;
  const name = generateName();
  const email = `${name.toLowerCase().replaceAll(" ", "_")}@futurewiz.co.kr`;
  await prisma.users.upsert({
    where: { email },
    update: {},
    create: {
      name,
      email,
      image:
        "https://i.pinimg.com/originals/cc/93/62/cc936205185ead1946513e52402a570f.jpg",
    },
  });
  redirect("/");
}
