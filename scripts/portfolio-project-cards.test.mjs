import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import test from "node:test";

const pagePath = fileURLToPath(
  new URL(
    "../artifacts/mockup-sandbox/public/current-sinan/index.html",
    import.meta.url,
  ),
);

const expectedCards = [
  {
    title: "Bee Hive Monitoring System",
    description:
      "Final-year IoT project using Raspberry Pi & camera modules with a custom-trained YOLOv8 model for real-time object detection and proactive alerts.",
    href: "https://github.com/sinannisar",
  },
  {
    title: "Zippy e-Library App",
    description:
      "Cross-platform Flutter app with authentication, book management, and RESTful API integration for real-time data updates with enhanced UI/UX.",
    href: "https://github.com/sinannisar",
  },
  {
    title: "Grocery Shopping List App",
    description:
      "Flutter app with Firebase real-time database — add, update, delete groceries with smooth state management for a seamless cross-device experience.",
    href: "https://github.com/sinannisar/Grocery_shopping_list",
  },
  {
    title: "Expense Tracker App",
    description:
      "Personal finance tracker with expense categorisation, data visualisation charts, and state management for seamless cross-device performance.",
    href: "https://github.com/sinannisar/expense_tracker",
  },
  {
    title: "Money Converter App",
    description:
      "Real-time currency conversion app using Flutter and REST APIs with robust error handling and a clean, responsive UI.",
    href: "https://github.com/sinannisar/MoneyConverter",
  },
  {
    title: "Door Lock Sensor App",
    description:
      "Anti-theft mobile app integrated with IoT sensors for real-time alert notifications — smart home security at your fingertips.",
    href: "https://github.com/sinannisar",
  },
];

function decodeEntities(text) {
  return text.replace(
    /&(#x[\da-f]+|#\d+|amp|lt|gt|quot|apos|middot|mdash|ndash);/gi,
    (entity, name) => {
      const namedEntities = {
        amp: "&",
        lt: "<",
        gt: ">",
        quot: '"',
        apos: "'",
        middot: "·",
        mdash: "—",
        ndash: "–",
      };
      if (name.startsWith("#x")) {
        return String.fromCodePoint(Number.parseInt(name.slice(2), 16));
      }
      if (name.startsWith("#")) {
        return String.fromCodePoint(Number.parseInt(name.slice(1), 10));
      }
      return namedEntities[name.toLowerCase()];
    },
  );
}

function textContent(markup) {
  return decodeEntities(markup.replace(/<[^>]*>/g, ""))
    .replace(/\s+/g, " ")
    .trim();
}

function classElementContent(card, tagName, className) {
  const classPattern = new RegExp(
    `<${tagName}\\b(?=[^>]*\\bclass=["'][^"']*\\b${className}\\b)[^>]*>([\\s\\S]*?)<\\/${tagName}>`,
    "i",
  );
  const match = card.match(classPattern);
  assert.ok(match, `Project card is missing its .${className} ${tagName}`);
  return textContent(match[1]);
}

function attributeValue(tag, attributeName) {
  const attributePattern = new RegExp(
    `\\b${attributeName}\\s*=\\s*(["'])(.*?)\\1`,
    "i",
  );
  return tag.match(attributePattern)?.[2] ?? null;
}

function projectCardsFrom(html) {
  const section = html.match(
    /<section\b[^>]*\bid=["']projects["'][^>]*>([\s\S]*?)<\/section>/i,
  );
  assert.ok(section, "Portfolio page is missing the #projects section");

  const cardStarts = [
    ...section[1].matchAll(
      /<div\b[^>]*class=["'][^"']*\bpjc\b[^"']*["'][^>]*>/gi,
    ),
  ];
  return cardStarts.map((match, index) => {
    const start = match.index;
    const end = cardStarts[index + 1]?.index ?? section[1].length;
    const card = section[1].slice(start, end);
    const link = card.match(
      /<a\b(?=[^>]*\bclass=["'][^"']*\bpgh\b[^"']*["'])[^>]*>/i,
    );
    assert.ok(link, `Project card ${index + 1} is missing its destination link`);

    return {
      title: classElementContent(card, "div", "pt"),
      description: classElementContent(card, "p", "pd"),
      href: attributeValue(link[0], "href"),
    };
  });
}

test("portfolio project cards keep their intended titles, descriptions, and destinations", async () => {
  const html = await readFile(pagePath, "utf8");
  assert.deepEqual(projectCardsFrom(html), expectedCards);
});
