import "twin.macro";
import Image from "next/image";
import Container from "~/components/Atoms/Container";

export default function Case({ value = [] }) {
  return (
    <section>
      <Container tw="flex flex-row justify-center flex-wrap items-center py-5">
        {value.map((filename) => (
          <Image
            key={filename.split(".")[0]}
            width={190}
            height={40}
            src={`/cases/${filename}`}
            alt={`${filename}`}
            tw="m-3"
          ></Image>
        ))}
      </Container>
    </section>
  );
}
