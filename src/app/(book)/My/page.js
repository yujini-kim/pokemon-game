import MyCollection from "@components/MyCollection";

export const metadata = {
  title: "나의 포켓몬 도감",
};

export default async function MyBook() {
  return (
    <>
      <MyCollection />
    </>
  );
}
