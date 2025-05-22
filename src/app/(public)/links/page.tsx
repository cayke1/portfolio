import { LinkTree } from "@/components/links/LinkTree";

export default function Links() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-lg p-6 md:p-8 gradient-border">
          <LinkTree />
        </div>
      </div>
    </section>
  );
}
