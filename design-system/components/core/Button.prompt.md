Use `Button` for all clickable actions in the Aparat UI — navigation actions, form submits, follow/subscribe CTAs, and inline text actions.

```jsx
// Primary CTA
<Button variant="primary" size="medium">دنبال کردن</Button>

// Ghost / outline
<Button variant="ghost" size="small">نمایش همه</Button>

// Secondary (blue)
<Button variant="secondary" size="medium">تنظیمات کامل</Button>

// Tertiary (green)
<Button variant="tertiary" size="medium">دنبال کردن</Button>

// Tiny with icon
<Button variant="primary" size="tiny" icon="right" iconNode={<PlusIcon />}>
  افزودن
</Button>

// Disabled
<Button variant="primary" disabled>غیرفعال</Button>
```

Notable props:
- `variant`: primary (red/brand) | secondary (blue) | tertiary (green) | ghost (outlined)
- `size`: tiny (28px) | small (32px) | medium (36px) | large (44px)
- `icon`: 'left' | 'right' — pass `iconNode` with the icon element
- `disabled`: grays out and blocks interaction
