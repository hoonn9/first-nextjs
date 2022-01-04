import { createStandaloneToast } from "@chakra-ui/react";
import axios, { AxiosError } from "axios";

type HandleErrorType = "Toast";

const toast = createStandaloneToast();

export const handleError = (error: Error | unknown, type: HandleErrorType = "Toast") => {
  if (error instanceof Error) {
    if (axios.isAxiosError(error)) {
      return handleAxiosError(type, error);
    } else {
      return handleDefaultError(type, error);
    }
  }
};

const handleAxiosError = (type: HandleErrorType, error: AxiosError) => {
  switch (type) {
    case "Toast":
      return toast({
        id: Date.now(),
        title: "An error occurred.",
        description: error.response?.statusText,
        status: "error",
        duration: 8000,
        isClosable: true,
      });
  }
};

const handleDefaultError = (type: HandleErrorType, error: Error) => {
  switch (type) {
    case "Toast":
      return toast({
        title: "An error occurred.",
        description: error.message,
        status: "error",
        duration: 8000,
        isClosable: true,
      });
  }
};
