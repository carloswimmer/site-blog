"use client";

import type { Post } from "contentlayer/generated";
import { Check, LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useClipboard } from "@/hooks/use-clipboard";
import { useShare } from "@/hooks/use-share";

type PostShareProps = {
  url: string;
  post: Post;
};

export const PostShare = ({ url, post }: PostShareProps) => {
  const { shareButtons } = useShare({
    url,
    title: post?.title,
    text: post?.description,
  });
  const { isCopied, handleCopy } = useClipboard({ timeout: 2000 });

  return (
    <aside className="space-y-6">
      <div className="rounded-lg bg-gray-700 ">
        <h2 className="mb-4 text-heading-xs text-gray-100">Share</h2>

        <div className="flex flex-wrap lg:flex-col justify-between sm:justify-start gap-3">
          {shareButtons.map((item) => (
            <Button
              key={item.provider}
              variant="outline"
              className="w-fit lg:w-full justify-start gap-2 rounded-md"
              onClick={item.action}
            >
              {item.icon}
              <span className="hidden lg:block">{item.name}</span>
            </Button>
          ))}

          <Button
            variant="outline"
            className="w-fit lg:w-full justify-start gap-2 rounded-md"
            onClick={() => handleCopy(url)}
          >
            {isCopied ? (
              <Check className="h-4 w-4" />
            ) : (
              <LinkIcon className="h-4 w-4" />
            )}
            <span className="hidden lg:block">Copy Link</span>
          </Button>
        </div>
      </div>
    </aside>
  );
};
