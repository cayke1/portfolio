import { LinkTree } from "@/components/links/LinkTree";

export default function Links() {
  return (
    <section className="p-2 md:p-20">
      <div className="w-full mx-auto bg-card rounded-lg shadow-lg p-6 md:p-8 gradient-border">
        <LinkTree />
      </div>
    </section>
  );
}
