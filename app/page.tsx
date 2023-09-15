import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Table from "@/components/table";
import TablePlaceholder from "@/components/table-placeholder";
import ExpandingArrow from "@/components/expanding-arrow";
import AddUser from "@/components/add-user";
import StockFirmGroup from "@/components/stock-firm-group";
import BestInvest from "@/components/bestinvest/bestinvest";

// Prisma does not support Edge without the Data Proxy currently
// export const runtime = 'edge'
export const preferredRegion = "home";
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <BestInvest />
      <div className="my-12" />
      <StockFirmGroup />
      {/* <AddUser />
      <Suspense fallback={<TablePlaceholder />}>
        <Table />
      </Suspense> */}
    </main>
  );
}
