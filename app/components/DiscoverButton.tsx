"use client";

import { useCallback } from "react";
import useWizardModal from "../hooks/useWizardModal";
import Button from "./Button";

export const DiscoverButton = () => {
  const wizardModal = useWizardModal();

  const onDiscover = useCallback(() => {
    wizardModal.onOpen();
  }, [wizardModal]);

  return <Button onClick={onDiscover}>Discover my adventure</Button>;
};
