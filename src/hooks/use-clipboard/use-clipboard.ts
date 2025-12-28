"use client";

import { useCallback, useEffect, useState } from "react";

type UseClipboardProps = {
  timeout?: number;
};

export const useClipboard = ({ timeout = 2000 }: UseClipboardProps) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isCopied) {
      timer = setTimeout(() => {
        setIsCopied(false);
      }, timeout);
    }

    return () => timer && clearTimeout(timer);
  }, [isCopied, timeout]);

  const handleCopy = useCallback(async (text: string) => {
    if (!navigator.clipboard) {
      console.error("Clipboard is not supported");
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch (error) {
      console.error("Failed to copy to clipboard: ", error);
      setIsCopied(false);
      return false;
    }
  }, []);

  return { isCopied, handleCopy };
};
