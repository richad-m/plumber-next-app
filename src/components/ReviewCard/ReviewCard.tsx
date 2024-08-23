import { ReviewCardContainer } from "./ReviewCard.style";

export function ReviewCard({
  author,
  message,
}: {
  author: string;
  message: string;
}): JSX.Element {
  return (
    <ReviewCardContainer>
      <p className="font-bold">{author}</p>
      <p>{`"${message}"`}</p>
      <p className="mt-auto">{"⭐️".repeat(5)}</p>
    </ReviewCardContainer>
  );
}
