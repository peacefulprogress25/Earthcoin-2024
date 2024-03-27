export default function Card({ option }) {
  return (
    <div className="max-w-[18rem] p-4 rounded-lg border justify-center items-center border-[#EAECF0] w-full shadow-lg">
      <p> {option?.title}</p>
    </div>
  );
}
