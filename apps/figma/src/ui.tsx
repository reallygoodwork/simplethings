import {
  Banner,
  Button,
  Columns,
  Container,
  Divider,
  IconNotice32,
  render,
  Text,
  TextboxMultiline,
  VerticalSpace,
} from "@create-figma-plugin/ui";
import { emit } from "@create-figma-plugin/utilities";
import { Fragment, h } from "preact";
import { useCallback, useState } from "preact/hooks";
import { CloseHandler, CreateSpecHandler } from "./types";

function Plugin() {
  const [specString, setSpecString] = useState<string>("");
  const [message, setMessage] = useState<{
    type: "success" | "warning" | undefined;
    message: string;
  } | null>(null);

  const handleCreateRectanglesButtonClick = useCallback(() => {
    emit<CreateSpecHandler>("CREATE_SPEC");
  }, []);

  const handleCloseButtonClick = useCallback(() => {
    emit<CloseHandler>("CLOSE");
  }, []);

  const handleInput = useCallback(
    (event: h.JSX.TargetedEvent<HTMLTextAreaElement>) => {
      const newValue = event.currentTarget.value;
      setSpecString(newValue);
    },
    []
  );

  onmessage = (event: MessageEvent) => {
    const { message, type, data } = JSON.parse(event.data.pluginMessage);
    setMessage({ message, type });
    if (type === "success") {
      setSpecString(JSON.stringify(data, null, 2));
    } else {
      setSpecString("");
    }
  };

  return (
    <Container space="medium">

      {message ? (
        <Banner icon={<IconNotice32 />} variant={message.type}>
          {message.message}
        </Banner>
      ) : null}
      <VerticalSpace space="small" />

      <Columns space="small">
        <Button fullWidth onClick={handleCreateRectanglesButtonClick}>
          Create Spec
        </Button>
        <Button fullWidth onClick={handleCloseButtonClick} secondary>
          Close
        </Button>
      </Columns>
      <VerticalSpace space="small" />
      <Divider />
      <VerticalSpace space="small" />
      <TextboxMultiline
        rows={32}
        grow
        onInput={handleInput}
        value={specString}
        variant="border"
      />
      <VerticalSpace space="small" />
    </Container>
  );
}

export default render(Plugin);
