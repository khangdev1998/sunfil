import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            deserunt modi molestias incidunt beatae nisi dolorem odit, pariatur
            vel dignissimos perferendis eos. Blanditiis atque ullam quos
            pariatur expedita magnam doloribus.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eius
          quod sequi quibusdam ex velit consectetur dignissimos laudantium ipsa,
          laborum ipsum neque vero? Quam voluptatibus eius enim eos aperiam
          officiis? Eaque eligendi, saepe obcaecati nulla maxime accusamus vitae
          dolore corporis. Aliquid iste nulla debitis magni maiores nobis beatae
          praesentium. Labore, facilis ipsam. Fugiat facilis, deleniti fuga vero
          voluptates ratione perspiciatis. Sint consectetur debitis fugiat ipsa
          dolorem. Illo tenetur officiis, dolore quidem culpa nobis odit
          perferendis aliquam laudantium veniam porro sint eaque harum incidunt
          a? Placeat obcaecati a repellat excepturi cumque. Magni atque ducimus
          totam error velit quod, repellendus repellat exercitationem eveniet
          dolorum animi saepe neque nulla voluptatem culpa provident harum
          voluptate molestiae voluptatum accusantium ab enim sapiente!
          Assumenda, delectus enim.
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
