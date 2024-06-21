import { useState } from "react";
import { Stack } from "@mui/material";
import PageTitle from "./components/PageTitle.styled";
import HomePageContainer from "./components/HomePageContainer.styled";
import SubscribeButton from "./components/SubscribeButton.styled";
import UserNotice from "./components/UserNotice.styled";
import Subscribe from "./components/subscribe/Subscribe";
import SubscribeNotification from "./components/SubscribeNotification";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleModal = () => setShowModal((prev) => !prev);
  const toggleFormSubmit = () => setFormSubmitted((prev) => !prev);

  return (
    <HomePageContainer direction="column" spacing="10rem" useFlexGap>
      <PageTitle variant="h1">Welcome to Blopper</PageTitle>

      <Stack direction="column" spacing="1rem">
        <SubscribeButton onClick={toggleModal}>Subscribe</SubscribeButton>
        <UserNotice>
          If you don&apos;t subscribe, Tesla&apos;s stocks will drop by 1000% and the next installment in the Call Of
          Duty franchise will be a flop.
        </UserNotice>
      </Stack>

      <Subscribe open={showModal} handleClose={toggleModal} handleFormSubmitted={toggleFormSubmit} />
      <SubscribeNotification open={formSubmitted} onClose={toggleFormSubmit} />
    </HomePageContainer>
  );
}

export default App;
