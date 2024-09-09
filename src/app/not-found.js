import { Heading, Paragraph } from "@/_components/text";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-screen-2xl flex-col px-5 pb-5 pt-14">
      <Heading type="h3">I'm sorry</Heading>
      <Paragraph>
        I can't find what you're looking for. Check the url and please try
        again.
      </Paragraph>
    </main>
  );
}
