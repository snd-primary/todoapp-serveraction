import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CardWithForm } from "./components/CardWithForm";

export default function Home() {
  return (
    <main>
      <Button>ぼたんです</Button>
      <CardWithForm />
    </main>
  );
}
