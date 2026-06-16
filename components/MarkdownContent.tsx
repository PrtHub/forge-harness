"use client";

import InlineCTA from "./InlineCTA";

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  // Parse inline elements (bold **text**)
  const renderInline = (text: string) => {
    const parts = text.split(/\*\*([^*]+)\*\*/g);
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return (
          <strong key={index} className="font-bold text-text-primary">
            {part}
          </strong>
        );
      }
      return part;
    });
  };

  const lines = content.split("\n");
  const blocks: { type: "p" | "ul" | "ol" | "h2" | "h3" | "cta"; items: string[] }[] = [];
  let currentBlock: { type: "p" | "ul" | "ol" | "h2" | "h3" | "cta"; items: string[] } | null = null;

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    if (trimmed === "") {
      if (currentBlock) {
        blocks.push(currentBlock);
        currentBlock = null;
      }
      continue;
    }

    if (trimmed === "[CTA_BOX]") {
      if (currentBlock) {
        blocks.push(currentBlock);
      }
      blocks.push({ type: "cta", items: [] });
      currentBlock = null;
      continue;
    }

    if (trimmed.startsWith("###")) {
      if (currentBlock) {
        blocks.push(currentBlock);
      }
      blocks.push({ type: "h3", items: [trimmed.replace("###", "").trim()] });
      currentBlock = null;
      continue;
    }

    if (trimmed.startsWith("##")) {
      if (currentBlock) {
        blocks.push(currentBlock);
      }
      blocks.push({ type: "h2", items: [trimmed.replace("##", "").trim()] });
      currentBlock = null;
      continue;
    }

    // Check for unordered list item
    const isUnordered = trimmed.startsWith("- ") || trimmed.startsWith("* ") || trimmed.startsWith("+ ") || trimmed === "-" || trimmed === "*" || trimmed === "+";
    if (isUnordered) {
      if (currentBlock && currentBlock.type !== "ul") {
        blocks.push(currentBlock);
        currentBlock = null;
      }
      const itemContent = (trimmed === "-" || trimmed === "*" || trimmed === "+") ? "" : trimmed.substring(2).trim();
      if (!currentBlock) {
        currentBlock = { type: "ul", items: [itemContent] };
      } else {
        currentBlock.items.push(itemContent);
      }
      continue;
    }

    // Check for ordered list item
    const olMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
    if (olMatch) {
      if (currentBlock && currentBlock.type !== "ol") {
        blocks.push(currentBlock);
        currentBlock = null;
      }
      const itemContent = olMatch[2].trim();
      if (!currentBlock) {
        currentBlock = { type: "ol", items: [itemContent] };
      } else {
        currentBlock.items.push(itemContent);
      }
      continue;
    }

    // Plain text or wrapped line
    if (currentBlock) {
      if (currentBlock.type === "p") {
        currentBlock.items[0] = (currentBlock.items[0] + " " + trimmed).trim();
      } else if (currentBlock.type === "ul" || currentBlock.type === "ol") {
        const lastIdx = currentBlock.items.length - 1;
        currentBlock.items[lastIdx] = (currentBlock.items[lastIdx] + " " + trimmed).trim();
      } else {
        blocks.push(currentBlock);
        currentBlock = { type: "p", items: [trimmed] };
      }
    } else {
      currentBlock = { type: "p", items: [trimmed] };
    }
  }

  if (currentBlock) {
    blocks.push(currentBlock);
  }

  return (
    <>
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "cta":
            return <InlineCTA key={idx} />;
          case "h2":
            return (
              <h2
                key={idx}
                className="font-cinzel text-2xl font-bold text-text-primary mt-10 mb-4 tracking-wide"
              >
                {renderInline(block.items[0])}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={idx}
                className="font-cinzel text-xl font-bold text-text-primary mt-8 mb-4 tracking-wide"
              >
                {renderInline(block.items[0])}
              </h3>
            );
          case "p":
            return (
              <p
                key={idx}
                className="text-text-muted leading-relaxed font-light mb-6"
              >
                {renderInline(block.items[0])}
              </p>
            );
          case "ul":
            return (
              <ul
                key={idx}
                className="list-disc pl-6 space-y-2.5 text-text-muted font-light mb-6"
              >
                {block.items.map((li, i) => (
                  <li key={i}>{renderInline(li)}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol
                key={idx}
                className="list-decimal pl-6 space-y-2.5 text-text-muted font-light mb-6"
              >
                {block.items.map((li, i) => (
                  <li key={i}>{renderInline(li)}</li>
                ))}
              </ol>
            );
          default:
            return null;
        }
      })}
    </>
  );
}
