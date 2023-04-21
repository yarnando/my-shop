import Link from "next/link";
import { ImageContainer, SuccessContainer } from "../../styles/pages/success";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Success!</h1>

      <ImageContainer>

      </ImageContainer>

      <p>
      Woohoo <strong>Fernando Silva</strong>, your <strong>Beyond the Limits T-shirt</strong> is already on its way home.
      </p>

      <Link href="/">
        Back to catalog
      </Link>
    </SuccessContainer>
  )
}