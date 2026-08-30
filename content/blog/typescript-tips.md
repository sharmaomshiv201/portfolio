---
title: "Three small TypeScript habits that pay off"
date: "2026-07-02"
excerpt: "Nothing clever — just a few defaults that keep a codebase honest as it grows."
tags: ["TypeScript", "Practices"]
---

I'm not a types maximalist. But a handful of low-effort habits have saved me real
debugging time. Here are three.

## 1. Model state as a union, not a bag of booleans

Instead of `isLoading`, `isError`, `data` all floating independently:

```ts
type State =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "success"; data: User[] };
```

Now the impossible states are actually impossible, and the compiler walks you
through every case.

## 2. Prefer `satisfies` over annotations for config objects

```ts
const routes = {
  home: "/",
  blog: "/blog",
} satisfies Record<string, string>;
```

You get the validation *and* keep the narrow literal types, so `routes.home` is
`"/"`, not `string`.

## 3. Name your function arguments with an object once you hit three

Positional booleans are a trap. `createUser("Sam", true, false)` tells you
nothing at the call site. An options object does.

---

That's it. Small stuff, but it compounds.
