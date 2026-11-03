# Project memory

## Product intent & audience

- Product-focused storefront/application with a product listing page and a floating mascot interaction.
- Users need to browse products, understand stock availability, respect piece limits, and navigate back easily.
- Authentication and favorites are no longer part of the visible product experience.

## Brand personality & voice

- Friendly and approachable, supported by the mascot.
- Practical and clear in product and stock-related messaging.
- Avoid surfacing deprecated account or favorites functionality in user-facing copy.

## Visual design & UX direction

- Preserve the existing product-page structure, including the fixed bar, stock-status indicator, quantity/piece limit, and back-navigation control.
- The mascot is a floating, movable UI element:
  - It can be repositioned anywhere within the viewport by clicking/touch-dragging it.
  - It remains independently dismissible via its hide/remove control.
  - Dragging should not accidentally trigger unrelated actions.
  - Positioning should remain usable across screen sizes and avoid trapping the control off-screen.
- Favor clear interactive affordances for draggable and dismissible behavior.
- Use the project’s existing styling and component conventions rather than introducing a separate visual system.

## Decisions, constraints & rationale

- Login and favorites options were removed from the Products experience.
- Login-only files were removed to avoid orphaned code.
- The favorites database table remains for now, but is unused by the current UI; removing it would delete saved favorite data and requires an explicit decision.
- The mascot behavior was changed from a constrained/fixed interaction to viewport-wide dragging while retaining the hide option.
- Last reported build and type-check completed without errors.
- Keep future imports aligned with the existing `@/` source alias and reuse the established React/Tailwind/Lucide setup.

## Open questions & assumptions

- Confirm whether the unused favorites database table should eventually be migrated or deleted.
- Confirm whether mascot position should persist after reload, or reset on each page/session.
- Confirm desired touch behavior and whether the mascot needs a visible drag cue or accessibility alternative for keyboard and assistive-technology users.