# Air Forms UI Schema (v0)

A versioned, schema-first contract for rendering deterministic UI inside conversational interfaces.

This package defines the structured message types that allow an LLM-powered chat system to:

* Emit structured UI (`ui_frame`)
* Receive structured input (`ui_submit`)
* Validate payloads deterministically
* Prevent arbitrary / hallucinated UI formats
* Enable renderer and orchestrator interoperability

This is the foundational layer for building:

* Chat → Form → Tool → Result workflows
* Deterministic conversational applications
* Rich UI embedded in chat without HTML generation
* Tool-backed conversational runtimes

---

# Why This Exists

LLMs are excellent at generating text, but text is not sufficient when:

* Structured input must be collected
* Validation must be enforced
* Tool execution requires typed parameters
* Regulated workflows demand determinism

The Chat UI Protocol solves this by defining:

* A strict JSON schema
* Typed UI components
* Typed actions
* Runtime validation

It becomes the contract between:

* The **Orchestrator** (decision engine)
* The **Renderer** (UI engine)
* The **Host Chat Application**

---

# Core Concepts

## 1. assistant_message

Plain conversational output.

```json
{
  "type": "assistant_message",
  "text": "Please enter your policy details."
}
```

---

## 2. ui_frame

A declarative UI description rendered inline in chat.

```json
{
  "type": "ui_frame",
  "version": "1.0",
  "frameId": "insurance:lookup",
  "title": "Find your policy",
  "state": {
    "values": {}
  },
  "components": [
    {
      "id": "policyNumber",
      "type": "text",
      "label": "Policy number",
      "required": true
    },
    {
      "id": "dob",
      "type": "date",
      "label": "Date of birth",
      "required": true
    }
  ],
  "primaryAction": {
    "label": "Look up",
    "action": { "type": "ui_submit" }
  }
}
```

The renderer renders this deterministically.

---

## 3. ui_submit

Emitted when a user completes a frame.

```json
{
  "type": "ui_submit",
  "frameId": "insurance:lookup",
  "values": {
    "policyNumber": "ABC123",
    "dob": "1988-07-01"
  }
}
```

The orchestrator consumes this and resumes execution.

---

# Component Primitives (v0)

The protocol intentionally starts small.

Supported components:

* `text`
* `textarea`
* `number`
* `date`
* `select`
* `slider`
* `map_pin`
* `review`

Each component supports:

* `id`
* `label`
* `required`
* optional validation (`min`, `max`, `pattern`, etc.)

Future components must be added via versioned schema changes.

---

# Design Principles

## Determinism

No HTML generation. No embedded scripts. No arbitrary layout.

## Versioned

Every `ui_frame` includes a `version`.

Breaking schema changes require version bump.

## Minimal Surface Area

The protocol describes *what* to render, not *how* to style it.

## Host-Agnostic

Can be rendered in:

* Web chat
* Mobile apps
* Slack-like clients
* Custom embedded widgets

## Security First

The protocol:

* Does not allow executable code
* Does not allow arbitrary HTML
* Is fully schema-validated

---

# Package Contents

```
src/
  schemas/
    ui_frame.schema.json
    ui_submit.schema.json
    assistant_message.schema.json
  defs/
    components.schema.json
    actions.schema.json
  index.ts
  types.ts
  validate.ts

fixtures/
  example frames

test/
  schema validation tests
```

---

# Installation

```bash
npm install @yourorg/protocol
```

---

# Usage

## Validate a frame

```ts
import { validateUiFrame } from "@yourorg/protocol"

const result = validateUiFrame(frame)

if (!result.ok) {
  console.error(result.errors)
}
```

## Import types

```ts
import type { UiFrame, UiSubmit } from "@yourorg/protocol"
```

---

# Versioning Strategy

Semantic versioning:

* MAJOR → breaking schema changes
* MINOR → additive fields/components
* PATCH → internal fixes, docs

Example:

```
0.1.0 → Initial protocol definition
0.2.0 → Add new component type
1.0.0 → Stable public contract
```

---

# Relationship to Other Layers

This package is layer 1 of a 3-layer system:

1. **Protocol** (this repo)
2. Renderer
3. Orchestrator

The protocol does not:

* Call LLMs
* Execute tools
* Persist conversations
* Render UI

It defines the contract those systems agree on.

---

# Example Workflow

1. User sends message.
2. Orchestrator returns:

   * assistant_message
   * ui_frame
3. Renderer renders UI.
4. User submits.
5. Renderer emits ui_submit.
6. Orchestrator resumes.

This package ensures each step is typed and validated.

---

# Roadmap (v1+)

Planned extensions:

* Conditional visibility rules
* Component-level error messages
* Layout hints (stack, grid, wizard)
* Tool binding hints
* Result card primitives
* Event streams

All changes must remain backward-compatible or versioned.

---

# Contributing

* All schema changes require:

  * JSON schema update
  * Type regeneration
  * Fixture updates
  * Passing validation tests
* Breaking changes require version bump.

---

# License

MIT (I've got no idea)


