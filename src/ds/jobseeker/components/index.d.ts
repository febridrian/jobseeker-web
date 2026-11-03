import * as React from "react";

export type ButtonHierarchy = "primary" | "secondary" | "tertiary" | "link-color" | "link-gray";
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  /** Visual weight. Default "primary". */
  hierarchy?: ButtonHierarchy;
  /** Red variant for irreversible actions (delete, remove, revoke). Works with every hierarchy; link-color and link-gray look the same. */
  destructive?: boolean;
  /** xs 32px · sm 36px · md 40px · lg 44px · xl 48px tall. Default "md". */
  size?: ButtonSize;
  /** The label. Omit with `iconOnly`. */
  children?: React.ReactNode;
  /** Icon before the label: an SVG that paints with `currentColor`. */
  iconLeading?: React.ReactNode;
  /** Icon after the label: an SVG that paints with `currentColor`. */
  iconTrailing?: React.ReactNode;
  /** Square button showing only `iconLeading` (or `iconTrailing`). Give it an `aria-label`. */
  iconOnly?: boolean;
  /** Shows a spinner, swaps the label for `loadingText` and blocks clicks. */
  loading?: boolean;
  /** Label while loading, e.g. "Submitting...". Defaults to `children`. */
  loadingText?: React.ReactNode;
  disabled?: boolean;
  /** Renders an <a> instead of a <button>. */
  href?: string;
  /** Forces a visual state for documentation only. */
  state?: "hover" | "focus" | "active";
}

export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

export type IconButtonHierarchy = "primary" | "secondary" | "tertiary";
export type IconButtonSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual weight. Default "primary". */
  hierarchy?: IconButtonHierarchy;
  /** xs 32 · sm 36 · md 40 · lg 44 · xl 48 · 2xl 60px circle. Default "md". */
  size?: IconButtonSize;
  /** An SVG that paints with `currentColor` (20px; 16px at xs). */
  icon: React.ReactNode;
  /** Required: what the button does, e.g. "Add to favourites". */
  "aria-label": string;
  /** Shows a spinner in place of the icon and blocks clicks. */
  loading?: boolean;
  disabled?: boolean;
  /** Forces a visual state for documentation only. */
  state?: "hover" | "focus" | "active";
}

export declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;

export interface CloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** sm 36px · md 40px · lg 44px square (lg has a 24px icon). Default "md". */
  size?: "sm" | "md" | "lg";
  /** White icon for overlays, images and dark brand sections. */
  onDark?: boolean;
  /** Defaults to "Close"; name what closes when it helps ("Close dialog"). */
  "aria-label"?: string;
  /** Forces a visual state for documentation only. */
  state?: "hover" | "focus";
}

export declare const CloseButton: React.ForwardRefExoticComponent<CloseButtonProps & React.RefAttributes<HTMLButtonElement>>;

export type SocialPlatform = "google" | "facebook" | "apple" | "x" | "figma" | "dribbble";

export type SocialIconPlatform = "apple" | "x" | "twitter" | "facebook" | "instagram" | "linkedin" | "google" | "youtube" | "whatsapp" | "github" | "pinterest" | "figma" | "framer" | "discord" | "dribbble" | "reddit" | "signal" | "slack" | "spotify" | "telegram" | "tiktok" | "twitch" | "paypal" | "wise" | "webflow" | "notion";
/** An SVG element, or SVG markup as a string. */
export type SocialLogo = React.ReactNode | string;
/** Register official marks once (e.g. at app start). `mono` should paint with currentColor; it is used for the gray and white variants. */
export declare function registerSocialLogos(map: Partial<Record<SocialIconPlatform | (string & {}), SocialLogo | { brand?: SocialLogo; mono?: SocialLogo }>>): void;
export interface SocialIconProps extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
  platform: SocialIconPlatform | (string & {});
  /** brand: official colours · gray: fg-quaternary (fg-quaternary_hover on hover) · white: on filled buttons. Default "brand". */
  variant?: "brand" | "gray" | "white";
  /** Default 24. */
  size?: 16 | 20 | 24;
  /** Overrides the registered logo. */
  logo?: SocialLogo;
  /** Accessible name; without it (and without href) the icon is decorative. */
  label?: string;
  /** Renders a link (e.g. a footer social link); label defaults to the platform name. */
  href?: string;
  /** Forces the hover look for documentation. */
  state?: "hover";
}
/** SocialIcon — platform mark in brand / gray / white; falls back to a neutral placeholder until the official SVG is registered. */
export declare const SocialIcon: React.ForwardRefExoticComponent<SocialIconProps & React.RefAttributes<HTMLElement>> & { platforms: SocialIconPlatform[] };
export interface SocialButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  platform: SocialPlatform;
  /** brand: filled with the platform colour (Google stays white) · color: white with the colour logo · gray: white with a gray logo. Default "color". */
  theme?: "brand" | "color" | "gray";
  /** sm 40px (14px label, 16px logo) · md 44px (16px label, 20px logo). Default "md". */
  size?: "sm" | "md";
  /** Optional override; by default the mark comes from SocialIcon / registerSocialLogos(). */
  logo?: React.ReactNode;
  /** Defaults to "Sign in with <Platform>". */
  children?: React.ReactNode;
  /** Square button with only the logo; the label becomes its aria-label. */
  iconOnly?: boolean;
  /** Stretch to the container width (stacked sign-in forms). Ignored with iconOnly. */
  fullWidth?: boolean;
  /** Forces a visual state for documentation only. */
  state?: "hover" | "focus";
}

export declare const SocialButton: React.ForwardRefExoticComponent<SocialButtonProps & React.RefAttributes<HTMLButtonElement>>;
export interface SocialButtonGroupItem extends Omit<SocialButtonProps, "theme" | "size" | "iconOnly" | "fullWidth" | "children"> {
  /** Overrides the default "Sign in with <Platform>" label (stack layout). */
  label?: React.ReactNode;
  key?: React.Key;
}
export interface SocialButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** stack: full-width labelled buttons (gap 10 sm / 12 md) · row: icon-only buttons sharing the width equally (gap 12). Default "stack". */
  layout?: "stack" | "row";
  theme?: "brand" | "color" | "gray";
  size?: "sm" | "md";
  /** Buttons to render; or pass <SocialButton> children (theme/size/layout are applied unless the child sets them). */
  items?: SocialButtonGroupItem[];
}
/** SocialButtonGroup — role="group" of SocialButtons with one theme and size, stacked or in an icon-only row. */
export declare const SocialButtonGroup: React.ForwardRefExoticComponent<SocialButtonGroupProps & React.RefAttributes<HTMLDivElement>>;

export type BadgeColor = "gray" | "brand" | "error" | "warning" | "success" | "info" | "gray-blue" | "blue-light" | "blue" | "indigo" | "purple" | "pink" | "orange" | "yellow";

export interface BadgeProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color"> {
  /** pill: fully rounded · badge: 6px corners (8px at lg) · modern: white with a gray border and shadow, colour only in the dot/icon. Default "pill". */
  type?: "pill" | "badge" | "modern";
  /** Utility colour. Default "gray". */
  color?: BadgeColor;
  /** sm 22px (12px text) · md 24px (14px) · lg 28px (14px) tall. Default "sm". */
  size?: "sm" | "md" | "lg";
  /** The label, short: one or two words. */
  children?: React.ReactNode;
  /** Leading 8px status dot in the badge colour. */
  dot?: boolean;
  /** Leading 12px icon (SVG painting with currentColor). */
  iconLeading?: React.ReactNode;
  /** Trailing 12px icon (SVG painting with currentColor). Ignored when `onRemove` is set. */
  iconTrailing?: React.ReactNode;
  /** Leading 16px country flag (SVG or img). */
  flag?: React.ReactNode;
  /** Leading 16px round avatar image URL. */
  avatar?: string;
  avatarAlt?: string;
  /** Adds a trailing X button that calls this handler. */
  onRemove?: React.MouseEventHandler<HTMLButtonElement>;
  /** Accessible name for the X button. Defaults to "Remove <label>". */
  removeLabel?: string;
  /** Square badge with only `iconLeading`; give it an aria-label. */
  iconOnly?: boolean;
}

export declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLSpanElement>>;

export interface BadgeGroupProps extends Omit<React.HTMLAttributes<HTMLElement>, "color"> {
  /** pill: tinted in the colour · modern: white card with a gray border, colour only in the dot. Default "pill". */
  type?: "pill" | "modern";
  /** Utility colour. Default "gray". */
  color?: BadgeColor;
  /** sm: 12px text · md: 14px text. Default "sm". */
  size?: "sm" | "md";
  /** light: utility-50 fill (modern: bg-primary) · medium: utility-100 fill (modern: bg-secondary). Default "light". */
  tone?: "light" | "medium";
  /** Where the badge sits: before the message (leading) or after it (trailing). Default "leading". */
  align?: "leading" | "trailing";
  /** The short badge label, e.g. "New feature". */
  badge: React.ReactNode;
  /** The message. */
  children: React.ReactNode;
  /** Arrow after the message (leading) or inside the badge (trailing). Defaults to an arrow; pass null to hide. */
  icon?: React.ReactNode | null;
  /** Renders an <a>. With only onClick it renders a <button>. */
  href?: string;
}

export declare const BadgeGroup: React.ForwardRefExoticComponent<BadgeGroupProps & React.RefAttributes<HTMLElement>>;

export interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  /** sm: 16px control, 14px text, 8px gap · md: 20px control, 16px text, 12px gap. Default "sm". */
  size?: "sm" | "md";
  /** Label next to the control (text-secondary, medium). Clicking it toggles the control. */
  label?: React.ReactNode;
  /** Supporting text under the label (text-tertiary, regular). */
  hint?: React.ReactNode;
  /** Forces the focus ring for documentation only. */
  state?: "focus";
}

export interface CheckboxProps extends ToggleProps {
  /** Shows a dash instead of the check, e.g. a "select all" with some rows selected. */
  indeterminate?: boolean;
}

export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
export declare const Radio: React.ForwardRefExoticComponent<ToggleProps & React.RefAttributes<HTMLInputElement>>;

export type FieldSize = "sm" | "md" | "lg";

interface FieldShellProps {
  /** sm 36px (14px text, 12px hint) · md 40px (16px) · lg 44px (16px, 10/14 padding). Default "md". */
  size?: FieldSize;
  /** Label above the field (14px medium). */
  label?: React.ReactNode;
  /** Adds a red * after the label and the native `required`. */
  required?: boolean;
  /** Supporting text under the field. */
  hint?: React.ReactNode;
  /** true: error styling and the hint turns red · a message: replaces the hint. */
  error?: boolean | React.ReactNode;
  disabled?: boolean;
  /** Forces the focus border for documentation only. */
  state?: "focus";
}

export interface InlineSelect {
  options: Array<string | { value: string; label: React.ReactNode }>;
  value?: string;
  defaultValue?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  "aria-label"?: string;
  disabled?: boolean;
}

export interface InputProps extends FieldShellProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "prefix"> {
  /** Check icon before the hint, e.g. password requirements. */
  hintStatus?: "neutral" | "success" | "error";
  /** Shows a 16px help icon with this text as its title and accessible name. */
  tooltip?: string;
  /** Icon before the value (SVG painting with currentColor). */
  iconLeading?: React.ReactNode;
  /** Media before the value, e.g. a 34×24 card logo. */
  leading?: React.ReactNode;
  /** Inline text before the value, e.g. "Rp". */
  prefix?: React.ReactNode;
  /** Fixed text box before the editable area, e.g. "https://". */
  addonLeading?: React.ReactNode;
  /** Fixed text box after the editable area, e.g. ".company". */
  addonTrailing?: React.ReactNode;
  /** Inline dropdown before the value, e.g. a country code. */
  selectLeading?: InlineSelect;
  /** Inline dropdown after the value, e.g. a currency. */
  selectTrailing?: InlineSelect;
  /** Attached secondary button, e.g. Copy or Browse. */
  button?: { label: React.ReactNode; icon?: React.ReactNode; onClick?: React.MouseEventHandler; href?: string; disabled?: boolean };
  /** For type="password": show/hide toggle. Default true. */
  revealable?: boolean;
  /** Keyboard hint shown at the right, e.g. "⌘K" (display only — bind the key yourself). */
  shortcut?: string;
}

export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

export interface NumberInputProps extends FieldShellProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "value" | "defaultValue" | "type"> {
  /** stepper: −/+ either side, centered value · chevrons: up/down on the right. Default "stepper". */
  variant?: "stepper" | "chevrons";
  value?: number | "";
  defaultValue?: number | "";
  onValueChange?: (value: number | "") => void;
  min?: number;
  max?: number;
  step?: number;
  decreaseLabel?: string;
  increaseLabel?: string;
}

export declare const NumberInput: React.ForwardRefExoticComponent<NumberInputProps & React.RefAttributes<HTMLInputElement>>;

export interface VerificationCodeProps extends FieldShellProps {
  /** compact: input-height boxes (36/40/44px) · large: "Secure code" squares (64/80/96px, 48–60px digits). Default "compact". */
  variant?: "compact" | "large";
  /** Dash after this many boxes (true = half). Default: half for large with 6+ digits, none otherwise. */
  separator?: number | boolean;
  /** Number of boxes. Default 4. */
  length?: number;
  value?: string;
  defaultValue?: string;
  onChange?: (code: string) => void;
  /** Fires when every box is filled. */
  onComplete?: (code: string) => void;
  /** Accepted characters. Default /\d/g. */
  pattern?: RegExp;
  /** Default "0" at 50% opacity. */
  placeholder?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  "aria-label"?: string;
}

export declare const VerificationCode: React.ForwardRefExoticComponent<VerificationCodeProps & React.RefAttributes<HTMLDivElement>>;

export interface TextareaProps extends Omit<FieldShellProps, "size">, Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
  /** sm: 14px text, 12px hint · md: 16px text, 14px hint ("lg" maps to md). Default "md". */
  size?: "sm" | "md" | "lg";
  /** 16px help icon next to the label, with this text as its title and accessible name. */
  tooltip?: string;
  /** Default 4. Minimum height 110px (sm) / 128px (md); resizes vertically. */
  rows?: number;
}

export declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;

export interface TagInputProps extends Omit<FieldShellProps, "size">, Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "onChange" | "value" | "defaultValue"> {
  /** sm: 12px tags · md: 14px tags. Default "md". */
  size?: "sm" | "md" | "lg";
  tooltip?: string;
  tags?: string[];
  defaultTags?: string[];
  onChange?: (tags: string[]) => void;
  /** inside: tags wrap inside the box before the input · below: tags listed under the box (replaces the hint). Default "inside". */
  placement?: "inside" | "below";
  /** Adds the typed text as a tag on blur. Default true. */
  addOnBlur?: boolean;
  /** Default "Add tag". */
  placeholder?: string;
}

export declare const TagInput: React.ForwardRefExoticComponent<TagInputProps & React.RefAttributes<HTMLInputElement>>;

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 0 to `max`. */
  value: number;
  /** Default 100. */
  max?: number;
  /** none · right · bottom / top (right-aligned) · top-floating / bottom-floating (tooltip at the fill's end). Default "none". */
  label?: "none" | "right" | "bottom" | "top" | "top-floating" | "bottom-floating";
  /** Label text. Default: rounded percentage, e.g. "40%". */
  format?: (value: number, max: number) => string;
}

export declare const ProgressBar: React.ForwardRefExoticComponent<ProgressBarProps & React.RefAttributes<HTMLDivElement>>;

export interface ProgressCircleProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  /** Default 100. */
  max?: number;
  /** xxs 64 · xs 160 · sm 200 · md 240 · lg 280px. Default "sm". */
  size?: "xxs" | "xs" | "sm" | "md" | "lg";
  /** circle (default) or half (gauge). */
  shape?: "circle" | "half";
  /** Caption, e.g. "Active users". Inside the ring; under it at xxs. */
  label?: React.ReactNode;
  format?: (value: number, max: number) => string;
}

export declare const ProgressCircle: React.ForwardRefExoticComponent<ProgressCircleProps & React.RefAttributes<HTMLDivElement>>;

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** xs 24 · sm 32 · md 40 · lg 48 · xl 56 · 2xl 64px. Default "md". */
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  /** Photo URL. Falls back to initials or the placeholder icon if it fails. */
  src?: string;
  alt?: string;
  /** Full name: used for initials and the accessible name. */
  name?: string;
  /** Overrides the initials derived from `name`. */
  initials?: string;
  /** Status dot at the bottom right. */
  status?: "online" | "offline";
  /** White ring with a hairline and shadow-xs, for busy backgrounds. */
  framed?: boolean;
}

export declare const Avatar: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLSpanElement>>;

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** xs 24 · sm 32 · md 40px. Default "sm". */
  size?: "xs" | "sm" | "md";
  /** Avatars to show before the "+N" counter. Default: all. */
  max?: number;
  /** Avatar props per person; or pass Avatar children instead. */
  avatars?: AvatarProps[];
  children?: React.ReactNode;
  /** Accessible text for the counter. Default `${n} more`. */
  moreLabel?: (n: number) => string;
  /** Shows a round "+" button after the group. */
  onAdd?: React.MouseEventHandler<HTMLButtonElement>;
  /** Accessible name for the add button. Default "Add person". */
  addLabel?: string;
}

export declare const AvatarGroup: React.ForwardRefExoticComponent<AvatarGroupProps & React.RefAttributes<HTMLDivElement>>;

export interface AvatarLabelGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  /** xs · sm · md · lg · xl (avatar 24–56px). Default "md". */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Person's name: used as the title and for initials. */
  name?: string;
  /** Overrides the title (defaults to `name`). */
  title?: React.ReactNode;
  /** Supporting line, e.g. an email or role. */
  subtitle?: React.ReactNode;
  src?: string;
  alt?: string;
  initials?: string;
  status?: "online" | "offline";
  framed?: boolean;
}

export declare const AvatarLabelGroup: React.ForwardRefExoticComponent<AvatarLabelGroupProps & React.RefAttributes<HTMLDivElement>>;

export interface AvatarProfilePhotoProps extends React.HTMLAttributes<HTMLDivElement> {
  /** sm 72 · md 96 · lg 160px. Default "md". */
  size?: "sm" | "md" | "lg";
  src?: string;
  alt?: string;
  /** Used for initials and the accessible name. */
  name?: string;
  initials?: string;
  /** Blue verified badge at the bottom right. */
  verified?: boolean;
  /** Accessible name for the badge. Default "Verified". */
  verifiedLabel?: string;
}

export declare const AvatarProfilePhoto: React.ForwardRefExoticComponent<AvatarProfilePhotoProps & React.RefAttributes<HTMLDivElement>>;

export interface ButtonGroupItem {
  label?: React.ReactNode;
  /** 20px SVG painting with currentColor. Icon without label = icon-only item. */
  icon?: React.ReactNode;
  value?: string | number;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  "aria-label"?: string;
  title?: string;
}

export interface ButtonGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue"> {
  items: ButtonGroupItem[];
  /** sm 36px · md 40px. Default "md". */
  size?: "sm" | "md";
  orientation?: "horizontal" | "vertical";
  /** radio: each item shows a radio indicator. */
  type?: "default" | "radio";
  /** Current item (single-select). */
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (value: string | number) => void;
}

export declare const ButtonGroup: React.ForwardRefExoticComponent<ButtonGroupProps & React.RefAttributes<HTMLDivElement>>;

export type DropdownItem =
  | { type: "divider"; key?: string }
  | { type: "heading"; label: React.ReactNode; key?: string }
  | {
      type?: "item";
      key?: string;
      label: React.ReactNode;
      /** Supporting line; switches the item to the large two-line layout (use with `media`). */
      description?: React.ReactNode;
      /** Leading media for the two-line layout, e.g. <Avatar size="sm" framed />. */
      media?: React.ReactNode;
      /** Leading 16px icon (SVG painting with currentColor). */
      icon?: React.ReactNode;
      /** Leading 20px avatar image URL. */
      avatar?: string;
      /** Leading status dot: true = success green, or any CSS colour. */
      dot?: boolean | string;
      /** Single-select: true shows a brand check; false keeps the space so labels align. */
      checked?: boolean;
      /** Leading checkbox (menuitemcheckbox). */
      checkbox?: boolean | "indeterminate";
      /** Trailing checkbox. */
      trailingCheckbox?: boolean;
      /** Radio (menuitemradio); trailing unless radioLeading. */
      radio?: boolean;
      /** Put the radio before the label. */
      radioLeading?: boolean;
      /** Trailing slim toggle (menuitemcheckbox). */
      toggle?: boolean;
      /** Keyboard shortcut chip, e.g. "⌘C". */
      shortcut?: string;
      /** Submenu items: opens to the right on hover, click or ArrowRight. */
      items?: DropdownItem[];
      submenuWidth?: number;
      destructive?: boolean;
      disabled?: boolean;
      onSelect?: (e: React.SyntheticEvent) => void;
      /** Plain items close the menu after onSelect (default true); radio/checkbox/toggle items only when set to true. */
      closeOnSelect?: boolean;
    };

export interface DropdownMenuProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onKeyDown"> {
  items: DropdownItem[];
  /** Top section: <DropdownHeader/>, <AvatarLabelGroup/> or a search <Input size="sm"/>. */
  header?: React.ReactNode;
  /** Bottom section: a full-width <Button size="xs" hierarchy="secondary"/>, or <span className="jsk-dd__ftext"> pairs. */
  footer?: React.ReactNode;
  /** Default 240. */
  width?: number | string;
  /** Accessible name of the menu. */
  label?: string;
  onClose?: (refocusTrigger?: boolean) => void;
}

export declare const DropdownMenu: React.ForwardRefExoticComponent<DropdownMenuProps & React.RefAttributes<HTMLDivElement>>;

export interface DropdownProps extends Omit<DropdownMenuProps, "onClose"> {
  /** The element that opens the menu: Button, Button link-gray, <button className="jsk-ddicon">, <button className="jsk-ddavatar"><Avatar/></button> or DropdownAccountTrigger. */
  trigger: React.ReactElement;
  /** Menu edge aligned to the trigger. Default "start". */
  align?: "start" | "end";
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export declare const Dropdown: React.ForwardRefExoticComponent<DropdownProps & React.RefAttributes<HTMLDivElement>>;

export declare function DropdownHeader(props: { title: React.ReactNode; subtitle?: React.ReactNode }): React.ReactElement;

export interface DropdownAccountTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  src?: string;
  alt?: string;
  name: string;
  /** Adds a second line (email) and switches to the 40px avatar card with a selector chevron. */
  subtitle?: React.ReactNode;
  status?: "online" | "offline";
  /** "sm": 32px framed avatar with name only. Default: 20px avatar row. */
  size?: "sm";
}

export declare const DropdownAccountTrigger: React.ForwardRefExoticComponent<DropdownAccountTriggerProps & React.RefAttributes<HTMLButtonElement>>;

export interface SelectOption {
  value: string | number;
  label: React.ReactNode;
  /** Secondary text after the label, e.g. "@olivia". */
  supportingText?: React.ReactNode;
  /** One leading element: avatar image URL (null = placeholder avatar), icon node, status dot (true or a CSS colour), or a 34×24 media node such as a payment card. */
  avatar?: string | null;
  icon?: React.ReactNode;
  dot?: boolean | string;
  media?: React.ReactNode;
  /** Shorter text for the tag in multi-select. Defaults to label. */
  tagLabel?: React.ReactNode;
  disabled?: boolean;
  key?: React.Key;
}

export interface SelectProps {
  /** sm 36px · md 40px · lg 44px. Default "md". */
  size?: "sm" | "md" | "lg";
  label?: React.ReactNode;
  required?: boolean;
  tooltip?: string;
  hint?: React.ReactNode;
  /** true for the red border only, or a message shown under the field. */
  error?: React.ReactNode | boolean;
  disabled?: boolean;
  placeholder?: string;
  options: SelectOption[];
  /** Single: the selected value. Multiple: an array of values. */
  value?: any;
  defaultValue?: any;
  onChange?: (value: any, option?: SelectOption) => void;
  /** Icon shown in the field when the selected option has no leading element (or always, when searchable). */
  iconLeading?: React.ReactNode;
  /** Type to filter options. Shows a search icon. */
  searchable?: boolean;
  onSearch?: (query: string) => void;
  /** Keyboard hint shown at the right, e.g. "⌘K". */
  shortcut?: string;
  /** Multi-select: selected options become removable tags; implies searchable. */
  multiple?: boolean;
  /** Checkbox multi-select: options get checkboxes, the menu gets a search box and Reset / Select all. Implies multiple. */
  checkboxes?: boolean;
  /** Checkboxes only: how the trigger shows the selection. "summary" (default) e.g. "2 selected · 16 users", or "tags". */
  display?: "summary" | "tags";
  /** Checkboxes, display="summary": build the trigger text from the selected options. Default "{n} selected". */
  summary?: (selected: SelectOption[]) => { label: React.ReactNode; supportingText?: React.ReactNode } | React.ReactNode;
  /** Tags shown before collapsing into a "+N" chip. Default 2 with checkboxes, unlimited otherwise. */
  maxTags?: number;
  /** Text of the overflow chip. Default "+N". */
  overflowLabel?: (hidden: number, selected: SelectOption[]) => React.ReactNode;
  /** Checkboxes, display="tags": tags get a remove button. */
  removable?: boolean;
  /** Checkboxes: show the search box at the top of the menu. Default true. */
  menuSearch?: boolean;
  searchPlaceholder?: string;
  /** Checkboxes: show the Reset / Select all bar. Default true. */
  actions?: boolean;
  resetLabel?: React.ReactNode;
  selectAllLabel?: React.ReactNode;
  /** Content of the menu footer, e.g. <Button hierarchy="link-color" size="xs">Manage menu</Button>. */
  footer?: React.ReactNode;
  /** Shown when no options match. Defaults to "No results found". */
  emptyState?: { title?: React.ReactNode; description?: React.ReactNode; action?: React.ReactNode };
  /** Max list height in px. Default 224 (sm, md) / 320 (lg); with checkboxes 272 / 304 / 368. */
  menuHeight?: number;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Form field name; renders hidden input(s). */
  name?: string;
  id?: string;
  /** Force a visual state in documentation. */
  state?: "focus";
  className?: string;
  style?: React.CSSProperties;
  "aria-label"?: string;
}

export declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLButtonElement | HTMLInputElement>>;

export interface ChoiceCardProps {
  /** checkbox (default) or radio. Inherited from ChoiceCardGroup. */
  type?: "checkbox" | "radio";
  /** sm: 14/20 text, 16px control. md: 16/24 text, 20px control. Inherited from ChoiceCardGroup. */
  size?: "sm" | "md";
  /** default: leading control · icon: featured icon + trailing control · avatar · payment · pricing (header + price body). */
  variant?: "default" | "icon" | "avatar" | "payment" | "pricing";
  title: React.ReactNode;
  /** Text after the title, e.g. "Rp 1 jt/month", "@olivia", "Expiry 02/2026". */
  supportingText?: React.ReactNode;
  description?: React.ReactNode;
  /** icon / pricing: icon (16px sm, 20px md) shown in a gray featured-icon frame. */
  icon?: React.ReactNode;
  /** avatar: image URL; initials of `avatarAlt` or `title` when empty. */
  avatar?: string;
  avatarAlt?: string;
  /** payment: content of the 46×32 logo frame — pass the official payment-method SVG. */
  media?: React.ReactNode;
  /** payment: link buttons under the text, e.g. link-gray "Set as default" + link-color "Edit". Clicks here don't toggle the card. */
  actions?: React.ReactNode;
  /** pricing */
  price?: React.ReactNode;
  period?: React.ReactNode;
  /** pricing: e.g. <Badge type="modern" dot color="success">. Right side when wide, above the price under 480px. */
  badge?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  name?: string;
  /** Required inside ChoiceCardGroup. */
  value?: string;
  id?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  /** Force a visual state in documentation. */
  state?: "focus";
  className?: string;
  style?: React.CSSProperties;
}
export declare const ChoiceCard: React.ForwardRefExoticComponent<ChoiceCardProps & React.RefAttributes<HTMLDivElement>>;

export interface ChoiceCardGroupProps {
  type?: "checkbox" | "radio";
  size?: "sm" | "md";
  name?: string;
  /** radio: string · checkbox: string[] */
  value?: string | string[] | null;
  defaultValue?: string | string[] | null;
  onChange?: (value: any, e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  /** Cards per row. Default 1. */
  columns?: number;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  "aria-label"?: string;
  "aria-labelledby"?: string;
}
export declare const ChoiceCardGroup: React.ForwardRefExoticComponent<ChoiceCardGroupProps & React.RefAttributes<HTMLDivElement>>;

export interface SliderProps {
  /** number = single handle · [min, max] = range with two handles. */
  value?: number | [number, number];
  defaultValue?: number | [number, number];
  onChange?: (value: number | [number, number]) => void;
  /** Fires when the user releases the handle (pointer up / key up). */
  onChangeEnd?: (value: number | [number, number]) => void;
  min?: number;
  max?: number;
  step?: number;
  /** none (default) · bottom: value text under the handle · top: tooltip above the handle. */
  labelPosition?: "none" | "bottom" | "top";
  /** Label / aria-valuetext formatter. Default: "40%" when min 0 / max 100, otherwise the number. */
  formatValue?: (value: number) => React.ReactNode & string;
  /** Accessible names for the two range handles. Default ["Minimum", "Maximum"]. */
  thumbLabels?: [string, string];
  disabled?: boolean;
  /** Form name; a range submits name_min and name_max. */
  name?: string;
  id?: string;
  /** Force a visual state in documentation. */
  state?: "focus";
  className?: string;
  style?: React.CSSProperties;
  "aria-label"?: string;
  "aria-labelledby"?: string;
}
export declare const Slider: React.ForwardRefExoticComponent<SliderProps & React.RefAttributes<HTMLDivElement>>;

export interface TagProps {
  size?: "sm" | "md" | "lg";
  /** Tag text (or use `label`). */
  children?: React.ReactNode;
  label?: React.ReactNode;
  /** Leading 6px status dot. true = success. */
  dot?: boolean | "success" | "gray" | "brand" | "error" | "warning";
  /** Leading 13px round flag — pass an SVG/img. */
  flag?: React.ReactNode;
  /** Leading 16px avatar: image URL or an <Avatar size="xs">. */
  avatar?: string | React.ReactNode;
  avatarAlt?: string;
  /** Trailing count chip. */
  count?: React.ReactNode;
  /** Leading checkbox (14 / 16 / 18px). */
  checkbox?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Shows the × button. */
  onRemove?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  removeLabel?: string;
  disabled?: boolean;
  name?: string;
  value?: string;
  className?: string;
  style?: React.CSSProperties;
}
export declare const Tag: React.ForwardRefExoticComponent<TagProps & React.RefAttributes<HTMLSpanElement>>;

export type ToolbarAction = "bold" | "italic" | "underline" | "alignLeft" | "alignCenter" | "bullets" | "link" | "image" | "generate";
export interface TextEditorToolbarProps {
  /** simple: B I U · color · align / list. advanced: + font & size selects, link, image, AI generate. mini: B I U, align, link in one group. */
  type?: "simple" | "advanced" | "mini";
  /** inline (default, no frame) or floating (card with shadow — for a bubble menu above the selection). */
  variant?: "inline" | "floating";
  /** Show the font & size selects. Default: advanced + inline only. */
  selects?: boolean;
  /** Toggles shown as pressed, e.g. ["bold", "alignLeft"]. */
  active?: ToolbarAction[];
  onAction?: (action: ToolbarAction) => void;
  /** Utility color name ("brand", "error", …) or any CSS color. */
  color?: string;
  onColorChange?: (color: string) => void;
  colors?: string[];
  fonts?: string[];
  font?: string;
  onFontChange?: (font: string) => void;
  sizes?: string[];
  fontSize?: string;
  onFontSizeChange?: (size: string) => void;
  /** Custom button groups, e.g. [["bold","italic"],["color"],["link"]]. */
  groups?: (ToolbarAction | "color")[][];
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  "aria-label"?: string;
}
export declare const TextEditorToolbar: React.ForwardRefExoticComponent<TextEditorToolbarProps & React.RefAttributes<HTMLDivElement>>;

export interface ToolbarButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Built-in icon name (ToolbarAction) or your own 20px icon. */
  icon: ToolbarAction | React.ReactNode;
  /** Accessible name + tooltip. */
  label: string;
  /** Toggle state; sets aria-pressed. */
  pressed?: boolean;
}
export declare const ToolbarButton: React.ForwardRefExoticComponent<ToolbarButtonProps & React.RefAttributes<HTMLButtonElement>>;

export interface EditorBubbleMenuProps extends Omit<TextEditorToolbarProps, "variant"> {
  /** The contentEditable / editor root; the menu shows while text inside it is selected. */
  editorRef: React.RefObject<HTMLElement>;
  /** Gap above the selection in px. Default 12. */
  offset?: number;
  /** Force open (docs / custom positioning with `style`). */
  open?: boolean;
  style?: React.CSSProperties;
  /** Custom content instead of the mini floating toolbar. */
  children?: React.ReactNode;
}
export declare function EditorBubbleMenu(props: EditorBubbleMenuProps): React.ReactElement | null;

export interface TextEditorProps {
  /** sm: simple toolbar, 16px padding, radius 8. md: toolbar with font/size dropdowns, 20px padding, radius 12. */
  size?: "sm" | "md";
  /** inline (default) · floating (card toolbar) · none. */
  toolbar?: "inline" | "floating" | "none";
  label?: React.ReactNode;
  required?: boolean;
  tooltip?: string;
  /** Replaces the characters-left counter. */
  hint?: React.ReactNode;
  error?: boolean | React.ReactNode;
  /** Shows "N characters left" and turns red when exceeded. */
  maxLength?: number;
  counter?: boolean;
  placeholder?: string;
  /** HTML string. */
  value?: string;
  defaultValue?: string;
  onChange?: (html: string, text: string) => void;
  /** Called for every toolbar action (link, image, generate need your own handling); `exec` runs document.execCommand on the editor. */
  onAction?: (action: ToolbarAction, api: { exec: (cmd: string, arg?: string) => void; element: HTMLElement | null }) => void;
  /** Editor height in px. Default 340 (sm) / 428 (md). Resizable vertically unless `resizable={false}`. */
  height?: number;
  resizable?: boolean;
  fonts?: string[];
  sizes?: string[];
  disabled?: boolean;
  /** Adds a hidden input with the HTML for plain forms. */
  name?: string;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  "aria-label"?: string;
}
export declare const TextEditor: React.ForwardRefExoticComponent<TextEditorProps & React.RefAttributes<HTMLDivElement>>;

export interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  /** sm: 36×20 (slim 32×16) · md: 44×24 (slim 40×20). */
  size?: "sm" | "md";
  /** default: padded track · slim: knob as tall as the track, with borders. */
  type?: "default" | "slim";
  label?: React.ReactNode;
  hint?: React.ReactNode;
  /** Mixed state — knob becomes a centered bar. */
  indeterminate?: boolean;
  inputRef?: React.Ref<HTMLInputElement>;
  /** Force a visual state in documentation. */
  state?: "hover" | "focus";
}
export declare const Toggle: React.ForwardRefExoticComponent<ToggleProps & React.RefAttributes<HTMLLabelElement>>;

export type TooltipPlacement = "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "right";
export interface TooltipProps {
  /** 12/18 semibold, white. */
  title: React.ReactNode;
  /** Supporting text (12/18 medium); switches to the 12px-padded, max 296px layout. */
  description?: React.ReactNode;
  placement?: TooltipPlacement;
  /** Default true. */
  arrow?: boolean;
  /** Controlled open state; otherwise opens on hover and keyboard focus. */
  open?: boolean;
  defaultOpen?: boolean;
  /** Hover delay in ms. Default 150. */
  delay?: number;
  disabled?: boolean;
  /** The trigger. Elements get aria-describedby; plain text is wrapped in a focusable span. */
  children: React.ReactNode;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Tooltip(props: TooltipProps): React.ReactElement;
export declare function TooltipBubble(props: { title: React.ReactNode; description?: React.ReactNode; placement?: TooltipPlacement; arrow?: boolean; id?: string; className?: string; style?: React.CSSProperties }): React.ReactElement;

export interface HelpIconProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  placement?: TooltipPlacement;
  arrow?: boolean;
  /** Accessible name; defaults to the title string or "More information". */
  label?: string;
  className?: string;
}
export declare function HelpIcon(props: HelpIconProps): React.ReactElement;

export interface VideoPlayerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title" | "onPlay" | "onPause" | "onEnded"> {
  src?: string;
  poster?: string;
  /** sm: play, volume, full screen · md: + timeline · lg: + volume slider, playback speed, cast/PiP. Default md. */
  size?: "sm" | "md" | "lg";
  /** 9:16 instead of 16:9. */
  vertical?: boolean;
  /** Accessible name of the player region. */
  title?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  /** Thumbnail for the scrub preview at a given second (e.g. from a sprite / storyboard). Falls back to the poster. */
  getPreviewImage?: (time: number) => string;
  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
  /** <track> elements for captions. */
  children?: React.ReactNode;
  /** Static display for docs / mocks without media. */
  state?: { playing?: boolean; duration?: number; currentTime?: number; buffered?: number; volume?: number; rate?: number; previewTime?: number };
}
export declare const VideoPlayer: React.ForwardRefExoticComponent<VideoPlayerProps & React.RefAttributes<HTMLDivElement>>;

/* ---------- FileIcon / FeedItem / ActivityFeed ---------- */
export interface FileIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** File extension: pdf, txt, doc(x), xls(x), csv, ppt(x), mp4, mp3, jpg, png, svg, fig, psd, zip, json… (default "file") */
  type?: string;
  variant?: "default" | "gray" | "solid";
  /** Override the colour picked from the extension. */
  color?: "brand" | "error" | "success" | "gray" | "gray-dark" | "blue" | "indigo" | "orange" | "orange-dark" | "pink" | "fuchsia" | "purple";
  /** Override the label text (max 4 chars), or false for a blank page. */
  label?: string | false;
  /** Glyph shown instead of the label (18px default, 16px gray/solid). */
  icon?: React.ReactNode;
}
export declare const FileIcon: React.ForwardRefExoticComponent<FileIconProps & React.RefAttributes<HTMLSpanElement>>;

export interface FeedFile { name: string; size?: string; type?: string; href?: string; onClick?: (e: React.MouseEvent) => void; download?: boolean | string; }
export interface FeedItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  name: React.ReactNode;
  src?: string; alt?: string; initials?: string;
  status?: "online" | "offline";
  /** Custom avatar node instead of src/name. */
  avatar?: React.ReactNode;
  time?: React.ReactNode;
  dateTime?: string;
  /** Action line; <a>/<strong> inside render in brand colour. */
  children?: React.ReactNode;
  file?: FeedFile;
  labels?: Array<string | BadgeProps | React.ReactElement>;
  message?: React.ReactNode;
  supporting?: React.ReactNode;
  unread?: boolean;
  /** Set automatically by <ActivityFeed variant="connector">. */
  connector?: boolean;
}
export declare const FeedItem: React.ForwardRefExoticComponent<FeedItemProps & React.RefAttributes<HTMLDivElement>>;

export interface ActivityFeedProps extends React.HTMLAttributes<HTMLUListElement> {
  variant?: "divider" | "spaced" | "connector";
}
export declare const ActivityFeed: React.ForwardRefExoticComponent<ActivityFeedProps & React.RefAttributes<HTMLUListElement>>;

/* ---------- Notification ---------- */
export interface NotificationAction { label: React.ReactNode; onClick?: (e: React.MouseEvent) => void; href?: string; hierarchy?: "link-color" | "link-gray" | "secondary" | "primary" | "tertiary"; }
export interface NotificationProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  color?: "brand" | "gray" | "error" | "warning" | "success" | "info";
  /** Custom glyph, or false for no leading icon. */
  icon?: React.ReactNode | false;
  iconStyle?: "outline" | "modern";
  avatar?: { src?: string; alt?: string; name: string; time?: React.ReactNode; status?: "online" | "offline" };
  image?: string;
  imageAlt?: string;
  progress?: number;
  progressLabel?: string | ((value: number, max: number) => string);
  actions?: NotificationAction[];
  onClose?: (reason: "close" | "timeout") => void;
  closeLabel?: string;
  layout?: "desktop" | "mobile";
  /** Auto-dismiss after N ms (needs onClose). Pauses on hover / focus. */
  dismissAfter?: number;
}
export declare const Notification: React.ForwardRefExoticComponent<NotificationProps & React.RefAttributes<HTMLDivElement>>;
export interface NotificationRegionProps extends React.HTMLAttributes<HTMLElement> {
  placement?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center";
  inline?: boolean;
}
export declare const NotificationRegion: React.ForwardRefExoticComponent<NotificationRegionProps & React.RefAttributes<HTMLElement>>;

/* ---------- FeaturedIcon ---------- */
export interface FeaturedIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  type?: "light" | "gradient" | "dark" | "outline" | "modern" | "modern-neue";
  color?: "brand" | "gray" | "error" | "warning" | "success" | "info";
  size?: "sm" | "md" | "lg" | "xl";
  icon?: React.ReactNode;
}
export declare const FeaturedIcon: React.ForwardRefExoticComponent<FeaturedIconProps & React.RefAttributes<HTMLSpanElement>>;

/* ---------- FolderIcon ---------- */
export interface FolderIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "brand" | "gray" | "glass";
  /** Front tilts forward (54 wide at 48 high). */
  open?: boolean;
  /** Text lines on the paper. */
  preview?: boolean;
  /** Tiny caption on the front: "{count} {countLabel}". */
  count?: number | string;
  countLabel?: string;
  /** Tiny caption on the front, bottom-left, with a dot. */
  name?: string;
  /** Height in px (default 48); width scales. */
  size?: number;
}
export declare const FolderIcon: React.ForwardRefExoticComponent<FolderIconProps & React.RefAttributes<HTMLSpanElement>>;

/* ---------- CheckIcon ---------- */
export interface CheckIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  type?: "light" | "solid" | "outline";
  color?: "brand" | "gray" | "success";
  size?: "sm" | "md" | "lg" | "xl";
}
export declare const CheckIcon: React.ForwardRefExoticComponent<CheckIconProps & React.RefAttributes<HTMLSpanElement>>;

/* ---------- CheckItem / CheckList ---------- */
export interface CheckItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  /** Icon size: sm 24 · md 28 · lg 32. */
  size?: "sm" | "md" | "lg";
  /** md 16/24 · lg 18/28 */
  textSize?: "md" | "lg";
  type?: "light" | "solid" | "outline";
  color?: "brand" | "gray" | "success";
  /** Replace the check (e.g. an X for "not included"). */
  icon?: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}
export declare const CheckItem: React.ForwardRefExoticComponent<CheckItemProps & React.RefAttributes<HTMLLIElement>>;
export interface CheckListProps extends React.HTMLAttributes<HTMLUListElement> {
  size?: "sm" | "md" | "lg";
  textSize?: "md" | "lg";
  type?: "light" | "solid" | "outline";
  color?: "brand" | "gray" | "success";
}
export declare const CheckList: React.ForwardRefExoticComponent<CheckListProps & React.RefAttributes<HTMLUListElement>>;

/* ---------- RatingStar / RatingStars ---------- */
export interface RatingStarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** 0–1, partial fill left to right. Default 1. */
  fill?: number;
  shape?: "star" | "heart";
  size?: "sm" | "md" | "lg" | number;
}
export declare const RatingStar: React.ForwardRefExoticComponent<RatingStarProps & React.RefAttributes<HTMLSpanElement>>;
export interface RatingStarsProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, "onChange"> {
  value: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  shape?: "star" | "heart";
  /** Makes it an input (whole steps). */
  onChange?: (value: number) => void;
  /** Allow 0 (clicking the current value clears it). */
  clearable?: boolean;
  disabled?: boolean;
}
export declare const RatingStars: React.ForwardRefExoticComponent<RatingStarsProps & React.RefAttributes<HTMLSpanElement>>;

export interface MessageBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Message text (inline links allowed). */
  children?: React.ReactNode;
  color?: "gray" | "brand" | "success" | "error" | "warning" | "info";
  /** solid = filled colour, white text · light = tinted background. Ignored for gray (outlined white). */
  variant?: "solid" | "light";
  /** md = desktop (14px) · sm = mobile (12px). */
  size?: "md" | "sm";
  /** Custom leading icon, or false to hide it. */
  icon?: React.ReactNode | false;
  /** Optional trailing node, e.g. a link-style Button. */
  action?: React.ReactNode;
  /** Shows the close button when provided. */
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  closeLabel?: string;
}
export declare const MessageBar: React.ForwardRefExoticComponent<MessageBarProps & React.RefAttributes<HTMLDivElement>>;

export interface AlertAction { label: React.ReactNode; onClick?: (e: React.MouseEvent) => void; href?: string; disabled?: boolean; }
export interface AlertProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
  /** Supporting text (or pass as children). */
  description?: React.ReactNode;
  color?: "gray" | "brand" | "error" | "warning" | "success" | "info";
  /** default = white card with border · filled = tinted background. */
  variant?: "default" | "filled";
  /** desktop = icon left · mobile = icon on top. */
  layout?: "desktop" | "mobile";
  /** Custom glyph, or false to hide the icon. */
  icon?: React.ReactNode | false;
  /** "modern" = 40px gray box instead of the coloured outline icon. */
  iconStyle?: "outline" | "modern";
  /** Link buttons; the last one is brand-coloured. */
  actions?: AlertAction[];
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  closeLabel?: string;
}
export declare const Alert: React.ForwardRefExoticComponent<AlertProps & React.RefAttributes<HTMLDivElement>>;
export interface BannerProps extends AlertProps {
  /** button = secondary + primary buttons (full-width stack on mobile) · link = link buttons. */
  actionStyle?: "button" | "link";
  /** Which edge the border sits on. Default: top on desktop, bottom on mobile. */
  position?: "top" | "bottom";
}
export declare const Banner: React.ForwardRefExoticComponent<BannerProps & React.RefAttributes<HTMLDivElement>>;

export interface BreadcrumbAccount { name: string; email?: string; src?: string; value?: string; }
export interface BreadcrumbItem {
  label?: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  /** "home" for the house icon, or a custom icon node (icon-only item; label becomes its aria-label). */
  icon?: "home" | React.ReactNode;
  /** Account / workspace crumb: square avatar before the label. */
  avatar?: { src?: string; name: string };
  /** Turns the crumb into an account switcher with a dropdown of radio items. */
  menu?: { items: BreadcrumbAccount[]; value?: string; onChange?: (value: string, account: BreadcrumbAccount) => void; label?: string };
}
export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  /** The last item is the current page. */
  items: BreadcrumbItem[];
  type?: "text" | "button";
  divider?: "chevron" | "slash";
  /** md = desktop spacing · sm = mobile spacing. */
  size?: "md" | "sm";
  /** Thin rules above and below. */
  bordered?: boolean;
  /** Collapse the middle into "…" when there are more items than this. */
  maxItems?: number;
  /** aria-label of the nav (default "Breadcrumb"). */
  label?: string;
}
export declare const Breadcrumbs: React.ForwardRefExoticComponent<BreadcrumbsProps & React.RefAttributes<HTMLElement>>;

export interface ChartSeries {
  /** Key in each data row. */
  key: string;
  /** Legend / tooltip name (defaults to key). */
  name?: string;
  /** CSS colour or a token name like "--utility-brand-600". Defaults to the brand utility palette. */
  color?: string;
}
export interface ChartProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  type?: "line" | "bar";
  data: Array<Record<string, string | number>>;
  series: ChartSeries[];
  /** Key used for x-axis labels (default "label"). */
  xKey?: string;
  /** md = desktop (32px bars) · sm = mobile (16px rounded bars, every 2nd x label). */
  size?: "md" | "sm";
  legend?: false | "top" | "right";
  /** Show y tick values (left column, 40px). */
  axisLabels?: boolean;
  xLabel?: string;
  yLabel?: string;
  /** Bars: stack series (default true) or group side by side. */
  stacked?: boolean;
  /** Line: gradient fill under each line (default true). */
  area?: boolean;
  yMax?: number;
  /** Number of y intervals (default 5 → 6 grid lines). */
  yTicks?: number;
  xLabelEvery?: number;
  /** Total height in px (default 240). */
  height?: number;
  /** Number locale (default "id-ID" → 1.000). */
  locale?: string;
  formatValue?: (v: number) => string;
  /** Accessible name / table caption. */
  label?: string;
  /** Active-point marker (line): ring = 12px hollow, dot = 6px solid, none. Default "ring". */
  marker?: "ring" | "dot" | "none";
  /** Line: 12px fading band under the active point (default true). */
  guide?: boolean;
  /** Supporting text in the tooltip (default: the x label). false = value only. */
  /** Index shown as active on first render (e.g. for docs/screenshots). */
  defaultActive?: number;
  tooltipLabel?: false | ((row: Record<string, string | number>, index: number) => string);
}
export declare const Chart: React.ForwardRefExoticComponent<ChartProps & React.RefAttributes<HTMLElement>>;

export interface RadialChartItem {
  key?: string;
  name: string;
  value: number;
  /** Overrides the chart-level max for this ring. */
  max?: number;
  /** CSS colour or token name ("--utility-brand-700"). Defaults: brand 700 / 600 / 400 / 300 / 200, outer → inner. */
  color?: string;
}
export interface RadialChartProps extends React.HTMLAttributes<HTMLElement> {
  /** One concentric ring per item, outermost first. */
  data: RadialChartItem[];
  /** Ring max (default 100 → values are percentages). */
  max?: number;
  /** xs 160 · sm 200 · md 240 · lg 280 px (stroke 8 / 12 / 16 / 18). */
  size?: "xs" | "sm" | "md" | "lg";
  /** Small caption in the centre. */
  label?: React.ReactNode;
  /** Big number in the centre (numbers are locale-formatted). */
  value?: React.ReactNode;
  legend?: false | "bottom" | "right";
  locale?: string;
  formatValue?: (v: number) => string;
  ariaLabel?: string;
}
export declare const RadialChart: React.ForwardRefExoticComponent<RadialChartProps & React.RefAttributes<HTMLElement>>;

export interface PieChartItem {
  key?: string;
  name: string;
  value: number;
  /** CSS colour or token name. Defaults: brand 600 / 500 / 400 / 300 / 200, gray 200. */
  color?: string;
}
export interface PieChartProps extends React.HTMLAttributes<HTMLElement> {
  /** Slices clockwise from 12 o'clock, sized by value / total. */
  data: PieChartItem[];
  /** xxs 120 · xs 160 · sm 200 · md 240 · lg 280 px. */
  size?: "xxs" | "xs" | "sm" | "md" | "lg";
  /** Inner radius as a fraction of the outer radius (0 = pie, default 0.5 = donut). */
  hole?: number;
  legend?: false | "right" | "bottom";
  /** Centre caption / number (donut only). */
  label?: React.ReactNode;
  value?: React.ReactNode;
  locale?: string;
  formatValue?: (v: number) => string;
  ariaLabel?: string;
}
export declare const PieChart: React.ForwardRefExoticComponent<PieChartProps & React.RefAttributes<HTMLElement>>;

export interface RadarChartProps extends React.HTMLAttributes<HTMLElement> {
  /** One row per axis (e.g. weekday), clockwise from 12 o'clock. Needs ≥ 3 rows. */
  data: Array<Record<string, string | number>>;
  /** One filled polygon per series. Colours default to brand-600 / pink-500 / blue-light-500. */
  series: ChartSeries[];
  /** Key for axis labels (default "label"). */
  xKey?: string;
  legend?: false | "right" | "bottom";
  /** Grid rings + value pills (default 5). */
  ticks?: number;
  max?: number;
  /** Outer radius in px (default 160 → 392 × ~372 chart). */
  radius?: number;
  locale?: string;
  formatValue?: (v: number) => string;
  /** Accessible name / table caption. */
  label?: string;
  defaultActive?: number;
}
export declare const RadarChart: React.ForwardRefExoticComponent<RadarChartProps & React.RefAttributes<HTMLElement>>;

export interface CodeSnippetTab {
  label: React.ReactNode;
  code: string;
  language?: "js" | "ts" | "jsx" | "tsx" | "json" | "bash" | "plain";
  value?: string | number;
}
export interface CodeSnippetProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onCopy"> {
  /** simple = bordered card with line numbers · framed = gray frame + elevated panel. */
  variant?: "simple" | "framed";
  code?: string;
  /** Light built-in highlighter (keywords, names/keys, numbers, comments). Default "js". */
  language?: "js" | "ts" | "jsx" | "tsx" | "json" | "bash" | "plain";
  /** Tabbed snippets (e.g. npm / yarn / bun). Copy moves into the tab bar. */
  tabs?: CodeSnippetTab[];
  tab?: string | number;
  defaultTab?: string | number;
  onTabChange?: (value: string | number) => void;
  /** Default: true for simple, false for framed. */
  lineNumbers?: boolean;
  /** Copy button (default true). */
  copyable?: boolean;
  onCopy?: (text: string) => void;
  /** Clip long code with a fade + "Show more" (collapsedHeight default 400). */
  collapsible?: boolean;
  collapsedHeight?: number;
  defaultExpanded?: boolean;
  showMoreLabel?: string;
  showLessLabel?: string;
  /** Soft-wrap long lines instead of scrolling horizontally. */
  wrap?: boolean;
  /** Extra icon buttons shown before Copy. */
  actions?: Array<{ icon: React.ReactNode; label: string; onClick?: () => void }>;
  label?: string;
}
export declare const CodeSnippet: React.ForwardRefExoticComponent<CodeSnippetProps & React.RefAttributes<HTMLDivElement>>;

/** Colours are hex strings: "#RRGGBB", or "#RRGGBBAA" when opacity < 100%. */
export interface ColorSwatchProps extends React.HTMLAttributes<HTMLElement> {
  /** Hex colour or any CSS background (e.g. a gradient). */
  color: string;
  /** lg 28px · md 20px · sm 16px. */
  size?: "lg" | "md" | "sm";
  /** Shows the 2px ring (4px offset) in the swatch colour. */
  selected?: boolean;
  label?: string;
}
export declare const ColorSwatch: React.ForwardRefExoticComponent<ColorSwatchProps & React.RefAttributes<HTMLElement>>;
export interface ColorSwatchesProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  colors: Array<string | { value: string; color?: string; label?: string }>;
  value?: string | null;
  onChange?: (value: string) => void;
  size?: "md" | "sm";
  /** Accessible name of the radiogroup. */
  label?: string;
  /** Shows a trailing "+" action swatch. */
  onAdd?: () => void;
  addLabel?: string;
}
export declare const ColorSwatches: React.ForwardRefExoticComponent<ColorSwatchesProps & React.RefAttributes<HTMLDivElement>>;
export interface ColorSliderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  type?: "hue" | "alpha";
  /** Hue 0–360 or alpha 0–1. */
  value: number;
  onChange?: (value: number) => void;
  /** Base colour for the alpha track. */
  color?: string;
  label?: string;
}
export declare const ColorSlider: React.ForwardRefExoticComponent<ColorSliderProps & React.RefAttributes<HTMLDivElement>>;
export interface ColorAreaProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  hue: number;
  /** 0–1 */
  saturation: number;
  /** 0–1 */
  brightness: number;
  onChange?: (v: { saturation: number; brightness: number }) => void;
  /** Default 280. */
  height?: number;
  label?: string;
}
export declare const ColorArea: React.ForwardRefExoticComponent<ColorAreaProps & React.RefAttributes<HTMLDivElement>>;
export interface ColorInputProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue"> {
  value?: string;
  defaultValue?: string;
  onChange?: (hex: string) => void;
  /** Show the Hex / RGB / HSL select. */
  showFormat?: boolean;
  format?: "hex" | "rgb" | "hsl";
  defaultFormat?: "hex" | "rgb" | "hsl";
  onFormatChange?: (f: "hex" | "rgb" | "hsl") => void;
  /** Opacity % field (default true). */
  alpha?: boolean;
  /** Leading swatch (default true). */
  swatch?: boolean;
  /** Makes the swatch a button (e.g. to open a picker). */
  onSwatchClick?: (e: React.MouseEvent) => void;
  swatchLabel?: string;
  swatchExpanded?: boolean;
  disabled?: boolean;
  label?: string;
}
export declare const ColorInput: React.ForwardRefExoticComponent<ColorInputProps & React.RefAttributes<HTMLDivElement>>;
export interface ColorPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  color: string;
  /** Default 128. */
  height?: number;
}
export declare const ColorPreview: React.ForwardRefExoticComponent<ColorPreviewProps & React.RefAttributes<HTMLDivElement>>;
export interface ColorPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /** md = radius 12 (compact popovers) · lg = radius 16 (full picker). */
  size?: "md" | "lg";
  onClose?: () => void;
  closeLabel?: string;
}
export declare const ColorPanel: React.ForwardRefExoticComponent<ColorPanelProps & React.RefAttributes<HTMLDivElement>>;
export interface ColorGradientStop { color: string; position: number }
export interface ColorGradient { type?: "linear" | "radial" | "conic"; angle?: number; stops: ColorGradientStop[] }
export interface ColorImageFill {
  src?: string;
  name?: string;
  fit?: "fill" | "fit" | "tile" | "stretch";
  /** Each −100…100 (0 = unchanged). */
  adjustments?: Partial<Record<"exposure" | "contrast" | "saturation" | "temperature" | "tint" | "highlights" | "shadows", number>>;
}
/** "palette" = shade grid + opacity + input + saved (not in the default tab set). */
export type ColorPickerMode = "solid" | "gradient" | "image" | "palette";
export interface ColorPickerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue"> {
  value?: string;
  defaultValue?: string;
  onChange?: (hex: string) => void;
  /** Tabs to show (default all three). A single mode hides the tab bar. */
  modes?: Array<ColorPickerMode>;
  mode?: ColorPickerMode;
  defaultMode?: ColorPickerMode;
  onModeChange?: (m: ColorPickerMode) => void;
  /** palette mode: columns of shades (default: colorPalettes, 17 families × 50–950). */
  palettes?: Array<{ name: string; shades: string[] }>;
  /** Saved swatches (false hides the section). */
  savedColors?: string[] | false;
  defaultSavedColors?: string[];
  onSavedColorsChange?: (colors: string[]) => void;
  gradient?: ColorGradient;
  defaultGradient?: ColorGradient;
  onGradientChange?: (g: ColorGradient) => void;
  /** Receives the CSS string, e.g. "linear-gradient(135deg, …)". */
  onGradientCssChange?: (css: string) => void;
  savedGradients?: ColorGradient[];
  defaultSavedGradients?: ColorGradient[];
  onSavedGradientsChange?: (g: ColorGradient[]) => void;
  image?: ColorImageFill;
  defaultImage?: ColorImageFill;
  onImageChange?: (img: ColorImageFill) => void;
  /** Opacity slider + % field (default true). */
  alpha?: boolean;
  format?: "hex" | "rgb" | "hsl";
  defaultFormat?: "hex" | "rgb" | "hsl";
  onFormatChange?: (f: "hex" | "rgb" | "hsl") => void;
  onClose?: () => void;
}
export declare const ColorPicker: React.ForwardRefExoticComponent<ColorPickerProps & React.RefAttributes<HTMLDivElement>>;
export interface ColorPaletteProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** One column per palette, shades top → bottom. Default: colorPalettes. */
  palettes?: Array<{ name: string; shades: string[] }>;
  /** Default 50 … 950. */
  shadeLabels?: string[];
  value?: string;
  onChange?: (hex: string) => void;
  label?: string;
  /** Default 20. */
  cellHeight?: number;
}
export declare const ColorPalette: React.ForwardRefExoticComponent<ColorPaletteProps & React.RefAttributes<HTMLDivElement>>;

export interface ColorPickerPopoverProps extends Omit<ColorPickerProps, "onClose"> {
  /** What opens the picker: swatch (20 / 28px) · button ("Color" secondary sm) · link (swatch + text) · input (hex + % field, swatch opens) · select (labelled field). */
  trigger?: "swatch" | "button" | "link" | "input" | "select";
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Popover edge to align with the trigger. Default "end" ("start" for select). Flips when there's no room. */
  align?: "start" | "end";
  /** Field label (select) / accessible name. Default "Colour". */
  label?: string;
  /** Text inside the button / link trigger. Defaults to `label`. */
  triggerLabel?: string;
  hint?: string;
  /** select: show a swatch before the hex (default true). */
  showSwatch?: boolean;
  /** swatch trigger: md 20px · lg 28px. */
  size?: "md" | "lg";
  disabled?: boolean;
}
export declare const ColorPickerPopover: React.ForwardRefExoticComponent<ColorPickerPopoverProps & React.RefAttributes<HTMLDivElement>>;

/** Default palette grid: Lime … Yellow, shades 50–950. */
export declare const colorPalettes: Array<{ name: string; shades: string[] }>;
export interface ColorPickerModalProps extends Omit<ColorPickerProps, "onClose"> {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Default ["palette"]. */
  modes?: Array<ColorPickerMode>;
  /** auto: centred, bottom sheet ≤640px · center · bottom. */
  placement?: "auto" | "center" | "bottom";
  /** Dialog accessible name. Default "Choose colour". */
  label?: string;
  /** Dialog width (default 380px). */
  width?: number | string;
  /** Show a close button in the corner (default false). */
  showClose?: boolean;
  closeOnEscape?: boolean;
  closeOnOverlayClick?: boolean;
  /** Render into document.body with a fixed overlay (default true). false = fill the nearest positioned parent. */
  portal?: boolean;
  autoFocus?: boolean;
}
/** ColorPickerModal — a ColorPicker (palette by default) in a blurred overlay; Esc / overlay click close, focus trapped and restored. */
export declare const ColorPickerModal: React.ForwardRefExoticComponent<ColorPickerModalProps & React.RefAttributes<HTMLDivElement>>;

export interface ContentDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** line: hairlines either side of the content · border: top + bottom border, content centred · background: bg-secondary band, radius 8. */
  variant?: "line" | "border" | "background";
  /** Where the content sits. "start" / "end" drop the leading / trailing line. Default "center". */
  align?: "start" | "center" | "end";
  /** Shortcut for a text label (ignored when children are given). */
  label?: React.ReactNode;
  /** text: 14 / 500 tertiary · heading: 16 / 600 primary. */
  labelStyle?: "text" | "heading";
  /** Element for the label, e.g. "h3" for a section heading. Default "span". */
  as?: keyof JSX.IntrinsicElements;
  /** Space between lines and content (default 8). */
  gap?: number | string;
  /** Any content: a Button, IconButton, ButtonGroup… With no content and no label it renders a plain role="separator". */
  children?: React.ReactNode;
}
/** ContentDivider — a divider that carries a label, heading or actions (Add button, button group, icon button). */
export declare const ContentDivider: React.ForwardRefExoticComponent<ContentDividerProps & React.RefAttributes<HTMLDivElement>>;

export type DateLike = Date | string | number;
export interface DateRange { start: Date | null; end: Date | null; }
export interface DatePreset { label: string; value: { start: DateLike | null; end: DateLike | null }; }
interface DateCommon {
  /** "single" (default) or "range". */
  mode?: "single" | "range";
  /** What a cell is: day (default), month or year. Values snap to the 1st of the month / 1 Jan. */
  granularity?: "day" | "month" | "year";
  /** Month and weekday names (default "en-US"). Dates always show as "10 Jan 2025" / "Feb 2025" / "2025". */
  locale?: string;
  /** 1 = Monday (default), 0 = Sunday. */
  weekStartsOn?: 0 | 1;
  /** Override "today" (for tests / previews). */
  today?: DateLike;
  min?: DateLike;
  max?: DateLike;
  /** Day granularity only. */
  isDateDisabled?: (d: Date) => boolean;
  /** Dates that get a small brand dot (events, deadlines). */
  markedDates?: DateLike[];
  /** auto: mobile under 768px (one pane, inputs + quick links on top). */
  layout?: "auto" | "desktop" | "mobile";
}
export interface CalendarProps extends DateCommon, Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue" | "onSelect"> {
  value?: Date | DateRange | null;
  defaultValue?: DateLike | { start?: DateLike; end?: DateLike } | null;
  onChange?: (v: any) => void;
  /** Fires when a single date is picked or a range is completed. */
  onSelect?: (v: any) => void;
  /** Number of panes (default 2 for desktop range, else 1). */
  panes?: number;
}
/** Calendar — just the month / year / decade grids with navigation and keyboard support (arrows, PageUp/Down, Home/End, Enter). */
export declare const Calendar: React.ForwardRefExoticComponent<CalendarProps & React.RefAttributes<HTMLDivElement>>;
export interface DatePickerPanelProps extends DateCommon {
  value?: Date | DateRange | null;
  defaultValue?: DateLike | { start?: DateLike; end?: DateLike } | null;
  onChange?: (v: any) => void;
  /** Range presets (sidebar on desktop, quick links on mobile). Defaults depend on granularity; false hides them. */
  presets?: DatePreset[] | false;
  /** Labels of presets shown as mobile quick links (default 3 per granularity). */
  quickPresets?: string[];
  /** Footer buttons appear when either handler is set. */
  onApply?: (v: any) => void;
  onCancel?: () => void;
  applyLabel?: string;
  cancelLabel?: string;
  /** Lighter border, no shadow (for embedding in a page). */
  bare?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
/** DatePickerPanel — the full picker surface: presets, panes, typed inputs and Cancel / Apply. */
export declare const DatePickerPanel: React.ForwardRefExoticComponent<DatePickerPanelProps & React.RefAttributes<HTMLDivElement>>;
export interface DatePickerProps extends Omit<DatePickerPanelProps, "onApply" | "onCancel" | "bare"> {
  placeholder?: string;
  /** Accessible name for the trigger / dialog. */
  label?: string;
  formatValue?: (v: any) => string;
  disabled?: boolean;
  /** Popover edge aligned with the trigger (default "end"); flips when there's no room. */
  align?: "start" | "end";
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** false = no footer; a pick (or completed range) commits and closes. Default true: draft until Apply. */
  actions?: boolean;
  /** Trigger button size (default "sm"). */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}
/** DatePicker — secondary button trigger with calendar icon that opens DatePickerPanel in a popover. */
export declare const DatePicker: React.ForwardRefExoticComponent<DatePickerProps & React.RefAttributes<HTMLDivElement>>;
export declare function datePresets(granularity: "day" | "month" | "year", today: Date): DatePreset[];
export declare function parseDate(text: string, granularity?: "day" | "month" | "year", locale?: string): Date | null;
export declare function formatDate(d: Date | null, granularity?: "day" | "month" | "year", locale?: string, long?: boolean): string;

/* ---------- EmptyState ---------- */
export interface EmptyStateAction extends Omit<ButtonProps, "children"> { label: React.ReactNode; }
export interface EmptyStateProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  /** sm · md · lg — title 16/18/20px, buttons sm/md/lg. Default "md". */
  size?: "sm" | "md" | "lg";
  /** "icon" (FeaturedIcon modern, default) · "file" (FileIcon in a gradient circle) · "illustration" (search) · "folder" · "avatars" (cloud) · "avatars-row" · "none" · or any node. */
  media?: "icon" | "file" | "illustration" | "folder" | "avatars" | "avatars-row" | "none" | React.ReactElement;
  /** Glyph for media "icon" (default search), or a custom node for "file". */
  icon?: React.ReactNode;
  /** FileIcon extension for media "file". */
  fileType?: string;
  /** People for media "avatars" / "avatars-row" — the first is the large centre avatar in the cloud. */
  avatars?: AvatarProps[];
  maxAvatars?: number;
  /** Decorative background behind the media, faded from the centre. Default "circles". */
  pattern?: "circles" | "grid" | "grid-check" | "none";
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** Button props (last one primary, the rest secondary, sized to match) or nodes. */
  actions?: Array<EmptyStateAction | React.ReactElement> | React.ReactNode;
  /** Heading element for the title. Default "h3". */
  titleAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  children?: React.ReactNode;
}
export declare const EmptyState: React.ForwardRefExoticComponent<EmptyStateProps & React.RefAttributes<HTMLDivElement>>;

/* ---------- FileUpload ---------- */
export interface FileUploadRejection { file: File; reason: "type" | "size"; }
export interface FileUploadDropzoneProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Helper line under the prompt. Default "SVG, PNG, JPG or GIF (max. 10MB)"; null hides it. */
  hint?: React.ReactNode;
  /** Same syntax as <input accept>: ".pdf,image/*". */
  accept?: string;
  multiple?: boolean;
  /** Bytes; bigger files go to onReject with reason "size". */
  maxSize?: number;
  disabled?: boolean;
  onFiles?: (files: File[]) => void;
  onReject?: (rejected: FileUploadRejection[]) => void;
  /** Glyph in the featured icon (default upload cloud). */
  icon?: React.ReactNode;
  /** Link text. Default "Click to upload". */
  label?: React.ReactNode;
  /** Prompt shown while files are dragged over. Default "Drop files to upload". */
  dragLabel?: React.ReactNode;
}
export declare const FileUploadDropzone: React.ForwardRefExoticComponent<FileUploadDropzoneProps & React.RefAttributes<HTMLDivElement>>;

export interface FileUploadFile {
  id?: string | number;
  name: string;
  /** Bytes (formatted as "6.4 MB", and "x of y" while uploading) or a ready string. */
  size?: number | string;
  /** 0–100. */
  progress?: number;
  /** Default: "complete" at 100, else "uploading". */
  state?: "uploading" | "complete" | "error";
  /** FileIcon extension; default taken from the name. */
  type?: string;
  /** Error line. Default "Upload failed". */
  errorText?: React.ReactNode;
}
export interface FileUploadItemProps extends FileUploadFile, Omit<React.HTMLAttributes<HTMLDivElement>, "id"> {
  /** "bar" — outline file icon + progress bar · "fill" — solid file icon, row background fills. Default "bar". */
  variant?: "bar" | "fill";
  onRemove?: () => void;
  /** Shows a "Try again" link in the error state. */
  onRetry?: () => void;
  removeLabel?: string;
  retryLabel?: React.ReactNode;
  /** Custom icon instead of the FileIcon. */
  icon?: React.ReactNode;
}
export declare const FileUploadItem: React.ForwardRefExoticComponent<FileUploadItemProps & React.RefAttributes<HTMLDivElement>>;

export interface FileUploadProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onReject"> {
  files?: FileUploadFile[];
  variant?: "bar" | "fill";
  onFiles?: (files: File[]) => void;
  onReject?: (rejected: FileUploadRejection[]) => void;
  onRemove?: (id: string | number, file: FileUploadFile) => void;
  onRetry?: (id: string | number, file: FileUploadFile) => void;
  hint?: React.ReactNode;
  accept?: string;
  /** Default true. */
  multiple?: boolean;
  maxSize?: number;
  disabled?: boolean;
}
export declare const FileUpload: React.ForwardRefExoticComponent<FileUploadProps & React.RefAttributes<HTMLDivElement>>;

/* ---------- SegmentedControl ---------- */
export interface SegmentedItem {
  value: string | number;
  label?: React.ReactNode;
  /** Shown instead of label when the control is `compact`, e.g. "12m" for "12 months". */
  shortLabel?: React.ReactNode;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  disabled?: boolean;
  "aria-label"?: string;
}
export interface SegmentedControlProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue"> {
  items: SegmentedItem[];
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (value: string | number) => void;
  /** sm 36px · md 40px. Default "sm". */
  size?: "sm" | "md";
  /** Items share the full width. */
  fullWidth?: boolean;
  /** Use each item's shortLabel (mobile). */
  compact?: boolean;
}
/** SegmentedControl — "button minimal" tabs: radiogroup, arrow keys / Home / End move the selection. */
export declare const SegmentedControl: React.ForwardRefExoticComponent<SegmentedControlProps & React.RefAttributes<HTMLDivElement>>;

/* ---------- Filters ---------- */
export interface FilterButtonProps extends Omit<ButtonProps, "hierarchy" | "iconLeading" | "iconTrailing"> {
  /** Default "Filters". Children work too. */
  label?: React.ReactNode;
  /** Applied-filter count, shown as a modern gray badge (a brand dot when iconOnly). */
  count?: number | string;
  /** Trailing chevron for a dropdown trigger. */
  chevron?: boolean;
  /** Pressed look (bg-primary_hover); also applied automatically with aria-expanded="true". */
  active?: boolean;
  fullWidth?: boolean;
  /** Override the filter-lines icon. */
  icon?: React.ReactNode;
}
export declare const FilterButton: React.ForwardRefExoticComponent<FilterButtonProps & React.RefAttributes<HTMLButtonElement>>;

export interface FilterConditionValue { field?: string | number; operator?: string | number; value?: any; }
export interface FilterConditionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue"> {
  value?: FilterConditionValue;
  /** Changing the field clears the value. */
  onChange?: (value: FilterConditionValue) => void;
  fields: SelectOption[];
  operators: SelectOption[];
  /** Options for a select value (otherwise a text Input). */
  valueOptions?: SelectOption[];
  /** valueOptions as a checkbox multi-select. */
  multiple?: boolean;
  valueFooter?: React.ReactNode;
  valueSummary?: SelectProps["summary"];
  /** Custom value control (e.g. a DatePicker). */
  valueInput?: React.ReactNode;
  valuePlaceholder?: string;
  onRemove?: () => void;
  /** Default "Remove filter". */
  removeLabel?: string;
  /** Fill the container: field and operator flex up to 160px, value takes the rest (used inside FilterMenu). */
  fluid?: boolean;
  /** Two lines: field + operator, then value + remove (used inside FilterPanel). */
  stacked?: boolean;
  /** Field select placeholder. Default "Filter". */
  fieldPlaceholder?: string;
  /** px widths. Default field 112 · operator 128 · value 168 (208 for a select). */
  widths?: { field?: number | string; operator?: number | string; value?: number | string };
}
export declare const FilterCondition: React.ForwardRefExoticComponent<FilterConditionProps & React.RefAttributes<HTMLDivElement>>;

export interface FilterBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Left group (wraps). Children are used when omitted. */
  start?: React.ReactNode;
  /** Right group; drops below the start group under 560px container width. */
  end?: React.ReactNode;
  /** Adds a secondary "Clear all" button at the end. */
  onClearAll?: () => void;
  clearLabel?: React.ReactNode;
  /** Vertical alignment of items. Default "center"; "end" lines up bottoms when fields have labels. */
  align?: "center" | "end";
  /** Stack the groups vertically (mobile layouts). */
  stack?: boolean;
}
/** FilterBar — toolbar layout for search, selects, segmented tabs, date range and filter buttons. */
export declare const FilterBar: React.ForwardRefExoticComponent<FilterBarProps & React.RefAttributes<HTMLDivElement>>;

/* ---------- FilterMenu ---------- */
export interface FilterMenuField extends SelectOption {
  /** Operators for this field (falls back to FilterMenu `operators`). */
  operators?: SelectOption[];
  /** Value as a select instead of a text input. */
  valueOptions?: SelectOption[];
  multiple?: boolean;
  valuePlaceholder?: string;
  valueSummary?: SelectProps["summary"];
  valueFooter?: React.ReactNode;
}
export interface FilterMenuCondition extends FilterConditionValue { id?: string | number; }
export interface FilterMenuProps {
  fields: FilterMenuField[];
  operators?: SelectOption[];
  /** Applied conditions. Rows without a field are dropped on Apply. */
  value?: FilterMenuCondition[];
  defaultValue?: FilterMenuCondition[];
  onChange?: (conditions: FilterMenuCondition[]) => void;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Popover edge aligned with the button (default "start"); flips when there's no room. */
  align?: "start" | "end";
  /** Popover width with rows, px. Default 624 (280 for the empty state); never wider than the viewport − 32. */
  width?: number;
  /** Trigger props (FilterButton). Count = applied conditions. */
  label?: React.ReactNode;
  chevron?: boolean;
  iconOnly?: boolean;
  fullWidth?: boolean;
  size?: ButtonProps["size"];
  disabled?: boolean;
  emptyTitle?: React.ReactNode;
  emptyDescription?: React.ReactNode;
  addLabel?: React.ReactNode;
  clearLabel?: React.ReactNode;
  applyLabel?: React.ReactNode;
  dialogLabel?: string;
  /** Field select placeholder. Default "Select filter". */
  fieldPlaceholder?: string;
  className?: string;
  style?: React.CSSProperties;
}
/** FilterMenu — "Filters" button + popover: empty state, condition rows, Add filter / Clear all / Apply filter. Esc or outside click discards the draft. */
export declare const FilterMenu: React.ForwardRefExoticComponent<FilterMenuProps & React.RefAttributes<HTMLDivElement>>;

/* ---------- SlideoutPanel ---------- */
export interface SlideoutPanelProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Default "right". */
  side?: "right" | "left";
  /** px. Default 400; never wider than the viewport (24px overlay gutter). */
  width?: number;
  /** Glyph for a modern gray FeaturedIcon, or a FeaturedIcon element. */
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** Right-aligned footer row with a top border. */
  footer?: React.ReactNode;
  /** Dimmed, blurred overlay; makes the panel modal (focus trap, scroll lock). Default true. */
  overlay?: boolean;
  /** Render into document.body (default). false = absolute inside the nearest positioned ancestor. */
  portal?: boolean;
  /** With an overlay: trap focus and lock scroll (default true). false = overlay is visual only. */
  modal?: boolean;
  closeOnEscape?: boolean;
  closeOnOverlayClick?: boolean;
  /** Default true. */
  showClose?: boolean;
  /** Default "Close panel". */
  closeLabel?: string;
  autoFocus?: boolean;
  /** Replaces the default header (e.g. cover image + avatar). The close button stays top-right; label the dialog with aria-labelledby. */
  header?: React.ReactNode;
  /** White close button for headers on imagery. */
  closeOnDark?: boolean;
  /** Full-width segmented tabs under the title; header gets a bottom border. */
  tabs?: { value: string; label: React.ReactNode; badge?: React.ReactNode; disabled?: boolean }[];
  tab?: string;
  defaultTab?: string;
  onTabChange?: (value: string) => void;
  tabsLabel?: string;
  /** Footer buttons as Button props (label = text); secondary, last one primary. Or nodes. */
  actions?: (Record<string, any> | React.ReactElement)[];
  /** Default "md". */
  actionsSize?: "sm" | "md";
  /** Left side of the footer (e.g. a link button); footer becomes space-between. */
  footerStart?: React.ReactNode;
  /** Body children stacked with a 24px gap. */
  stack?: boolean;
  /** Stacked with 1px dividers between children. */
  divided?: boolean;
  /** "none" removes body padding (edge-to-edge media). */
  bodyPadding?: "default" | "none";
  children?: React.ReactNode;
}
/** SlideoutPanel — side sheet: header (icon, title, description, close), scrolling body, footer. Esc closes; focus returns to the opener. */
export declare const SlideoutPanel: React.ForwardRefExoticComponent<SlideoutPanelProps & React.RefAttributes<HTMLDivElement>>;

/* ---------- FilterPanel ---------- */
export interface FilterPanelProps extends Omit<FilterMenuProps, "align" | "chevron" | "dialogLabel"> {
  /** false = no FilterButton; open it yourself with `open`. */
  trigger?: boolean;
  triggerClassName?: string;
  side?: "right" | "left";
  /** Panel width, px. Default 400. */
  width?: number;
  overlay?: boolean;
  modal?: boolean;
  autoFocus?: boolean;
  portal?: boolean;
  /** Default "Filters". */
  title?: React.ReactNode;
  /** Default "Add filters to narrow down results."; null hides it. */
  description?: React.ReactNode;
  /** Header icon glyph (default filter lines); null hides it. */
  icon?: React.ReactNode;
}
/** FilterPanel — the slide-out version of FilterMenu: stacked condition rows, Add filter, footer Clear all / Apply filter. */
export declare const FilterPanel: React.FC<FilterPanelProps & { ref?: React.Ref<HTMLDivElement> }>;

/* ---------- CtaCard ---------- */
export type CtaAction = (Omit<ButtonProps, "children"> & { label: React.ReactNode }) | React.ReactElement;
export interface CtaCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** Image URL or node. Left (239px) when the card is ≥560px wide in "auto", on top (200px) otherwise. */
  image?: string | React.ReactNode;
  imageAlt?: string;
  /** "auto" (default) · "horizontal" (image left) · "vertical" (image on top). */
  layout?: "auto" | "horizontal" | "vertical";
  /** Desktop order: secondary first, primary last (plain objects: last = primary). Below 480px they stack full width, primary on top. */
  actions?: CtaAction[] | React.ReactNode;
  /** Button size for action objects. Default "md". */
  actionSize?: ButtonProps["size"];
  titleAs?: "h2" | "h3" | "h4" | "p";
  /** Body slot between the text and the actions: Input + Button, PlanSummary, FeatureList, CtaItem… */
  children?: React.ReactNode;
}
export declare const CtaCard: React.ForwardRefExoticComponent<CtaCardProps & React.RefAttributes<HTMLDivElement>>;

export interface CtaItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  /** FileIcon, payment-method logo (46×32 / 34×24 — use the official SVG), avatar… */
  media?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Extra line under the text, e.g. a billing email. */
  meta?: React.ReactNode;
  metaIcon?: React.ReactNode;
  actions?: CtaAction[] | React.ReactNode;
  /** "end" (default): right of the row, full width under it in a narrow card · "title": next to the title, always inline. */
  actionsPlacement?: "end" | "title";
}
export declare const CtaItem: React.ForwardRefExoticComponent<CtaItemProps & React.RefAttributes<HTMLDivElement>>;

export interface PlanSummaryProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Glyph for the light brand featured icon (default layers); null hides it. */
  icon?: React.ReactNode;
  name: React.ReactNode;
  /** e.g. "Rp 1 jt". */
  price: React.ReactNode;
  /** e.g. "per month". */
  period?: React.ReactNode;
  description?: React.ReactNode;
  actions?: CtaAction[] | React.ReactNode;
}
export declare const PlanSummary: React.ForwardRefExoticComponent<PlanSummaryProps & React.RefAttributes<HTMLDivElement>>;

export interface FeatureListProps extends React.HTMLAttributes<HTMLUListElement> {
  items: Array<{ title: React.ReactNode; description?: React.ReactNode }>;
  /** Check-circle colour. Default "success". */
  color?: "success" | "brand" | "gray";
}
export declare const FeatureList: React.ForwardRefExoticComponent<FeatureListProps & React.RefAttributes<HTMLUListElement>>;

/* ---------- LoadingIndicator ---------- */
export interface LoadingIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /** sm 32 (4px stroke) · md 48 (6) · lg 56 (6; gradient 8) · xl 64 (8). Label 14/20 up to md, 18/28 for lg and xl. Default "md". */
  size?: "sm" | "md" | "lg" | "xl";
  /** line-simple: gray track + brand arc (default) · line-spinner: arc only · gradient: brand ring fading into its tail. */
  type?: "line-simple" | "line-spinner" | "gradient";
  /** Default "Loading..."; null/"" hides it (pass aria-label then). */
  label?: React.ReactNode;
}
/** LoadingIndicator — role="status" spinner; slows down with prefers-reduced-motion. */
export declare const LoadingIndicator: React.ForwardRefExoticComponent<LoadingIndicatorProps & React.RefAttributes<HTMLDivElement>>;

/* ---------- ChatMessage ---------- */
export interface ChatReaction { emoji: string; count?: number; active?: boolean; /** Accessible name, e.g. "Heart". */ label?: string; }
export interface ChatAction { icon: React.ReactNode; label: string; onClick?: (e: React.MouseEvent) => void; }
export interface ChatMessageProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  /** md (desktop: 40px avatar, 16/24 text) · sm (mobile: 32px avatar, 14/20 text, 8px padding). Default "md". */
  size?: "md" | "sm";
  /** Right-aligned, white bubble, no avatar, read receipt. */
  outgoing?: boolean;
  /** Incoming sender name (outgoing default "You"); false hides the name row. */
  name?: React.ReactNode | false;
  /** Avatar props for incoming messages (default: initials from name + online dot); false hides it. */
  avatar?: AvatarProps | false;
  time?: React.ReactNode;
  dateTime?: string;
  /** Outgoing receipt. */
  status?: "sent" | "delivered" | "read";
  /** Quoted message above the text. */
  reply?: { text: React.ReactNode } | React.ReactNode;
  file?: { name: string; size?: string; type?: string; href?: string; download?: boolean | string };
  /** Voice message. Waveform is generated from src/duration unless given (0–1 heights). */
  audio?: { src?: string; duration?: string; waveform?: number[]; progress?: number; playing?: boolean; onToggle?: (playing: boolean) => void };
  /** URL or node. */
  image?: string | React.ReactNode;
  imageAlt?: string;
  /** VideoPlayer props (rendered size sm) or a node. */
  video?: VideoPlayerProps | React.ReactElement;
  /** Link preview card + underlined URL. */
  link?: { url: string; title?: React.ReactNode; description?: React.ReactNode; label?: React.ReactNode; showUrl?: boolean };
  /** Shows the three-dot typing bubble instead of content. */
  typing?: boolean;
  reactions?: ChatReaction[];
  onReact?: (reaction: ChatReaction, index: number) => void;
  /** Hover / focus toolbar on the bubble (react, reply, forward, delete…). */
  actions?: ChatAction[];
  /** Message text. */
  children?: React.ReactNode;
}
/** ChatMessage — incoming / outgoing chat bubble with text, reply quote, file, voice, image, video, link preview, typing; reactions and hover actions. */
export declare const ChatMessage: React.ForwardRefExoticComponent<ChatMessageProps & React.RefAttributes<HTMLDivElement>>;

export interface SparklineProps extends React.HTMLAttributes<HTMLDivElement> {
  data: number[]; compare?: number[]; tone?: "success" | "error" | "gray" | "brand";
  height?: number; width?: number; line?: boolean; area?: boolean; marker?: boolean | number; min?: number; max?: number;
}
export declare const Sparkline: React.ForwardRefExoticComponent<SparklineProps & React.RefAttributes<HTMLDivElement>>;
export interface MetricCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  label: React.ReactNode; value: React.ReactNode;
  change?: React.ReactNode; trend?: "positive" | "negative" | "neutral";
  changeType?: "badge" | "arrow" | "trend"; changeContext?: React.ReactNode; changePlacement?: "end" | "below" | "inline";
  icon?: React.ReactNode; iconType?: "modern" | "light"; iconColor?: string; iconPlacement?: "top" | "start" | "inline";
  labelStyle?: "subtle" | "title"; valueSize?: "md" | "lg";
  chart?: number[] | Omit<SparklineProps, "tone"> | React.ReactElement; chartPlacement?: "bottom" | "end";
  menuItems?: any[]; menuLabel?: string; menu?: React.ReactNode;
  action?: { label: React.ReactNode; onClick?: (e: React.MouseEvent) => void; href?: string } | React.ReactElement;
  actionVariant?: "link" | "button"; footerStart?: React.ReactNode; footer?: React.ReactNode;
  nested?: boolean; titleAs?: keyof JSX.IntrinsicElements;
}
export declare const MetricCard: React.ForwardRefExoticComponent<MetricCardProps & React.RefAttributes<HTMLDivElement>>;

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  total: number; page?: number; defaultPage?: number; onChange?: (page: number) => void;
  variant?: "numbers" | "text" | "group"; navStyle?: "button" | "link"; shape?: "square" | "circle";
  textPosition?: "start" | "end" | "center"; align?: "start" | "center" | "end";
  placement?: "page" | "card"; divider?: boolean; slots?: number; mobileSlots?: number;
  previousLabel?: string; nextLabel?: string; pageText?: (page: number, total: number) => React.ReactNode;
  pageSize?: number; pageSizeOptions?: Array<number | { value: any; label: string }>; onPageSizeChange?: (size: number) => void;
  totalItems?: number; rowsLabel?: string; rangeText?: (from: number, to: number, total: number) => React.ReactNode; label?: string;
}
export declare const Pagination: React.ForwardRefExoticComponent<PaginationProps & React.RefAttributes<HTMLElement>>;

export interface PaginationDotsProps extends React.HTMLAttributes<HTMLDivElement> {
  count: number; current?: number; defaultCurrent?: number; onChange?: (index: number) => void; interactive?: boolean;
  type?: "dot" | "line"; size?: "md" | "lg"; framed?: boolean; itemLabel?: (index: number, count: number) => string; label?: string;
}
export declare const PaginationDots: React.ForwardRefExoticComponent<PaginationDotsProps & React.RefAttributes<HTMLDivElement>>;

export interface ProgressStep { title: React.ReactNode; description?: React.ReactNode; status?: "complete" | "current" | "incomplete" | "error";
  icon?: React.ReactNode; avatar?: string; name?: string; number?: React.ReactNode; key?: React.Key; }
export interface ProgressStepsProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: ProgressStep[]; current?: number; type?: "check" | "number" | "icon" | "avatar" | "line"; size?: "sm" | "md";
  orientation?: "vertical" | "horizontal"; onStepClick?: (index: number, step: ProgressStep) => void; label?: string;
}
export declare const ProgressSteps: React.ForwardRefExoticComponent<ProgressStepsProps & React.RefAttributes<HTMLDivElement>>;

export interface CaptchaFieldHandle { reset(): void; getToken(): string; }
export interface CaptchaFieldProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onError"> {
  provider?: "recaptcha" | "hcaptcha" | "turnstile"; siteKey: string; theme?: "auto" | "light" | "dark"; size?: "normal" | "compact";
  label?: React.ReactNode; required?: boolean; hint?: React.ReactNode; error?: React.ReactNode; name?: string;
  onVerify?: (token: string) => void; onExpire?: () => void; onError?: (err: Error) => void; timeout?: number;
  status?: "loading" | "error"; loadingLabel?: string; loadErrorLabel?: string; retryLabel?: string; verifiedLabel?: string;
}
export declare const CaptchaField: React.ForwardRefExoticComponent<CaptchaFieldProps & React.RefAttributes<CaptchaFieldHandle>>;

export interface SectionFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  start?: React.ReactNode; link?: { label: React.ReactNode; href?: string; onClick?: (e: React.MouseEvent) => void } | React.ReactElement;
  actions?: Array<React.ReactElement | (Record<string, any> & { label: React.ReactNode; hierarchy?: string; destructive?: boolean })>;
  placement?: "page" | "card"; divider?: boolean; size?: "sm" | "md" | "lg";
}
export declare const SectionFooter: React.ForwardRefExoticComponent<SectionFooterProps & React.RefAttributes<HTMLDivElement>>;

export interface SectionLabelProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: React.ReactNode; description?: React.ReactNode; required?: boolean; tooltip?: React.ReactNode; tooltipDescription?: React.ReactNode;
  actions?: Array<React.ReactElement | (Record<string, any> & { label: React.ReactNode; hierarchy?: string })>;
  size?: "sm" | "md"; htmlFor?: string; as?: keyof JSX.IntrinsicElements; id?: string;
}
export declare const SectionLabel: React.ForwardRefExoticComponent<SectionLabelProps & React.RefAttributes<HTMLDivElement>>;

export interface SectionHeaderTab { value: string; label: React.ReactNode; badge?: React.ReactNode; badgeColor?: string; id?: string; panelId?: string; }
export interface SectionHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: React.ReactNode; description?: React.ReactNode; titleAs?: keyof JSX.IntrinsicElements;
  actions?: React.ReactNode | Array<React.ReactElement | (Record<string, any> & { label: React.ReactNode; hierarchy?: string })>;
  search?: boolean | Record<string, any>; menuItems?: any[]; menuLabel?: string;
  tabs?: SectionHeaderTab[]; tab?: string; defaultTab?: string; onTabChange?: (value: string) => void; tabsLabel?: string; divider?: boolean;
}
export declare const SectionHeader: React.ForwardRefExoticComponent<SectionHeaderProps & React.RefAttributes<HTMLDivElement>>;

/* ---------- SlideoutSection ---------- */
export interface SlideoutSectionProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** Trailing icon buttons in the section header. */
  action?: React.ReactNode;
  /** Default 16px between header and content; "sm" = 12px. */
  gap?: "md" | "sm";
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}
/** SlideoutSection — titled block inside a SlideoutPanel body. */
export declare const SlideoutSection: React.ForwardRefExoticComponent<SlideoutSectionProps & React.RefAttributes<HTMLElement>>;

/* ---------- Table ---------- */
export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  /** Even body rows on bg-secondary. */
  striped?: boolean;
  /** sm = 64px rows. */
  size?: "md" | "sm";
  wrapClassName?: string;
}
/** Table — horizontally scrolling wrapper + <table>. */
export declare const Table: React.ForwardRefExoticComponent<TableProps & React.RefAttributes<HTMLTableElement>>;
export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  alt?: boolean;
  selected?: boolean;
}
export declare const TableRow: React.ForwardRefExoticComponent<TableRowProps & React.RefAttributes<HTMLTableRowElement>>;
export interface TableCellProps extends Omit<React.TdHTMLAttributes<HTMLTableCellElement>, "title"> {
  as?: "td" | "th";
  /** true or Checkbox props (or a node). md 20px checkbox. */
  checkbox?: boolean | Record<string, any> | React.ReactElement;
  expandable?: boolean;
  expanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
  /** Nesting level for tree rows (indent). */
  level?: number;
  /** Avatar, FileIcon, card logo… */
  leading?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Default "medium". "semibold" = 600 tertiary (group/parent rows). */
  titleWeight?: "medium" | "regular" | "semibold";
  /** Trailing kebab Dropdown. */
  menuItems?: any[];
  menuLabel?: string;
  align?: "start" | "end";
  /** md 24px (default) · sm 16px horizontal padding. */
  padding?: "md" | "sm";
  /** xs: 2px gap between children (action icon buttons). Default 12px. */
  gap?: "md" | "xs";
  width?: number | string;
  children?: React.ReactNode;
}
/** TableCell — 72px cell with lead-cell parts and free content. */
export declare const TableCell: React.ForwardRefExoticComponent<TableCellProps & React.RefAttributes<HTMLTableCellElement>>;

/* ---------- TableHeaderCell ---------- */
export interface TableHeaderCellProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  /** Select-all checkbox: true or Checkbox props (checked, indeterminate, onChange). */
  checkbox?: boolean | Record<string, any> | React.ReactElement;
  /** Renders the label as a sort button with a chevron-selector icon; sets aria-sort. */
  sortable?: boolean;
  sort?: "asc" | "desc" | null;
  /** Called with the next direction (asc → desc → asc). */
  onSortChange?: (next: "asc" | "desc") => void;
  /** Trailing help: a string / {title, description} renders a HelpIcon tooltip; an element is used as-is. */
  help?: React.ReactNode | HelpIconProps;
  align?: "start" | "end";
  width?: number | string;
  /** md 44px · 12/24 padding (default) · sm 40px · 8/20 padding. Inside <Table size="sm"> headers are sm automatically. */
  size?: "md" | "sm";
  /** secondary (default, bg-secondary) · primary (white, for plain tables). */
  background?: "secondary" | "primary";
  children?: React.ReactNode;
}
/** TableHeaderCell — 44px column header (12/18 semibold, bg-secondary). */
export declare const TableHeaderCell: React.ForwardRefExoticComponent<TableHeaderCellProps & React.RefAttributes<HTMLTableCellElement>>;

/* ---------- TableCard ---------- */
export interface TableCardProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  title?: React.ReactNode;
  titleAs?: "h2" | "h3" | "h4";
  /** String → brand sm Badge, or any node. */
  badge?: React.ReactNode;
  description?: React.ReactNode;
  /** Search field: true, Input props, or a custom element. */
  search?: boolean | Record<string, any> | React.ReactElement;
  /** Right-side header actions (ButtonGroup, Buttons, Dropdown…). */
  actions?: React.ReactNode;
  /** Replaces the whole header row. */
  header?: React.ReactNode;
  /** Usually <Pagination variant="group" placement="card" pageSize … />. */
  footer?: React.ReactNode;
  /** Header bottom border. Default true. */
  divider?: boolean;
  children?: React.ReactNode;
}
/** TableCard — bordered card: header (title or search + actions) · Table · footer. */
export declare const TableCard: React.ForwardRefExoticComponent<TableCardProps & React.RefAttributes<HTMLElement>>;

/* ---------- Tabs ---------- */
export interface TabItem {
  value: string;
  label: React.ReactNode;
  /** 16px (sm) / 20px (md) line icon. */
  icon?: React.ReactNode;
  /** Count pill after the label. */
  badge?: React.ReactNode;
  /** Badge color. Default "gray"; Figma uses "error" for unread counts. */
  badgeColor?: string;
  /** Accessible name for the badge, e.g. "2 unread". */
  badgeLabel?: string;
  disabled?: boolean;
}
export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue"> {
  items: TabItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** brand (default) · gray · underline · white (padded track) · minimal (bordered track) · line (vertical underline; "underline" maps to it when vertical). */
  type?: "brand" | "gray" | "underline" | "white" | "minimal" | "line";
  /** horizontal (default) · vertical — stacked, left-aligned; ↑/↓ move focus. */
  orientation?: "horizontal" | "vertical";
  /** sm 14/20 · 36px (default) · md 16/24 · 40px (44px for white/minimal). */
  size?: "sm" | "md";
  /** Tabs share the width equally. */
  fullWidth?: boolean;
  /** ≤640px: "select" (default) swaps to a Select · "scroll" keeps a horizontal strip. */
  mobile?: "select" | "scroll";
  /** Set false when no TabPanels are rendered (drops aria-controls). */
  panels?: boolean;
  /** Used to build tab / panel ids: `${id}-tab-${value}`, `${id}-panel-${value}`. */
  id?: string;
  label?: string;
}
/** Tabs — horizontal tablist with roving focus (←/→/Home/End). */
export declare const Tabs: React.ForwardRefExoticComponent<TabsProps & React.RefAttributes<HTMLDivElement>>;
export interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The id passed to <Tabs>. */
  tabsId: string;
  value: string;
  /** Current tab value; the panel is hidden when it differs. */
  active?: string;
}
export declare const TabPanel: React.ForwardRefExoticComponent<TabPanelProps & React.RefAttributes<HTMLDivElement>>;

/* ---------- TreeView ---------- */
export interface TreeItem {
  id: string;
  label: React.ReactNode;
  /** 16px (sm) / 20px (md) line icon. */
  icon?: React.ReactNode;
  /** Avatar instead of an icon: true (initials from label), an image URL, or Avatar props. */
  avatar?: boolean | string | Record<string, any>;
  /** Extra node before the drag handle (badge, count…). */
  trailing?: React.ReactNode;
  children?: TreeItem[];
  disabled?: boolean;
}
export interface TreeViewProps extends Omit<React.HTMLAttributes<HTMLUListElement>, "onSelect" | "defaultChecked"> {
  items?: TreeItem[];
  defaultItems?: TreeItem[];
  /** Makes items controlled (needed to persist reordering). */
  onItemsChange?: (items: TreeItem[]) => void;
  /** sm: 32px rows (6/8 padding) · md: 36px rows (8 padding), 20px media. */
  size?: "sm" | "md";
  /** single (default): row highlight + aria-selected · checkbox: tri-state, cascades · none. */
  selectionMode?: "none" | "single" | "checkbox";
  /** Shorthand for selectionMode="checkbox". */
  checkboxes?: boolean;
  expanded?: string[];
  defaultExpanded?: string[];
  onExpandedChange?: (ids: string[]) => void;
  selected?: string | null;
  defaultSelected?: string | null;
  onSelect?: (id: string, item: TreeItem) => void;
  /** Leaf ids that are checked; folder state (on/mixed/off) is derived. */
  checked?: string[];
  defaultChecked?: string[];
  onCheckedChange?: (leafIds: string[]) => void;
  /** Called on click / Enter / Space for any mode. */
  onAction?: (id: string, item: TreeItem) => void;
  /** └ ├ │ guide lines. */
  connectors?: boolean;
  /** Drag handle + Alt+↑/↓ move an item among its siblings. */
  reorderable?: boolean;
  onReorder?: (e: { id: string; parentId: string | null; from: number; to: number }) => void;
}
/** TreeView — role="tree" with roving focus, expand/collapse, single or checkbox selection, connectors, sibling reordering. */
export declare const TreeView: React.ForwardRefExoticComponent<TreeViewProps & React.RefAttributes<HTMLUListElement>>;

export type CalendarEventColor = "gray" | "brand" | "error" | "warning" | "success" | "green" | "blue-light" | "blue" | "indigo" | "purple" | "pink" | "orange" | "yellow" | "gray-blue";
export interface CalendarEventGuest { name: string; src?: string; status?: "yes" | "no" | "awaiting"; }
export interface CalendarEventData {
  id?: string | number;
  title: string;
  /** Date or "YYYY-MM-DD" / "YYYY-MM-DDTHH:mm" (local time). */
  start: Date | string;
  /** Exclusive for timed events; inclusive last day for all-day events. Defaults to start + 30 min. */
  end?: Date | string;
  allDay?: boolean;
  color?: CalendarEventColor;
  /** Small dotted badge above the title, e.g. "Interview". */
  tag?: string;
  tagColor?: CalendarEventColor;
  description?: string;
  reminder?: string;
  location?: string;
  guests?: CalendarEventGuest[];
  [key: string]: unknown;
}
export interface CalendarEventProps extends React.HTMLAttributes<HTMLElement> {
  event: CalendarEventData;
  /** pill (month cell / agenda) · block (time grid, position it yourself) · dot (mobile month). */
  variant?: "pill" | "block" | "dot";
  /** Selected events (and hover) use the utility-100 background. */
  selected?: boolean;
  /** Force the hover look for docs. */
  state?: "default" | "hover";
  timeFormat?: "24h" | "12h";
  locale?: string;
  showTag?: boolean;
  showTime?: boolean;
}
/** CalendarEvent — one coloured event chip; renders a button when onClick is set. */
export declare const CalendarEvent: React.ForwardRefExoticComponent<CalendarEventProps & React.RefAttributes<HTMLElement>>;
export type EventCalendarView = "month" | "week" | "day";
export interface EventCalendarProps extends Omit<React.HTMLAttributes<HTMLElement>, "onChange"> {
  events?: CalendarEventData[];
  view?: EventCalendarView;
  defaultView?: EventCalendarView;
  onViewChange?: (view: EventCalendarView) => void;
  /** Focused / selected day. */
  date?: Date | string;
  defaultDate?: Date | string;
  onDateChange?: (date: Date) => void;
  /** Defaults to the real date. */
  today?: Date | string;
  /** Current-time indicator position; defaults to the real clock (updates every minute). */
  now?: Date | string;
  /** 0 = Sunday … 1 = Monday (default). */
  weekStartsOn?: number;
  locale?: string;
  timeFormat?: "24h" | "12h";
  onEventClick?: (event: CalendarEventData) => void;
  selectedEventId?: string | number;
  defaultSelectedEventId?: string | number;
  onSelectedEventChange?: (id: string | number) => void;
  /** Shows the search icon button. */
  onSearch?: () => void;
  /** Extra header controls (e.g. an "Add event" button). */
  actions?: React.ReactNode;
  /** Event pills per month cell before "+N more" (default 2). */
  maxEvents?: number;
  /** "+N more" handler; overrides the built-in behaviour. */
  onMoreClick?: (date: Date) => void;
  /** Built-in "+N more" behaviour: popover listing all of that day's events (default) or switch to the day view. */
  moreBehavior?: "popover" | "day";
  /** Max height of the week/day scroll area in px (default 720). */
  height?: number;
  /** Hour the time grid scrolls to on open (default 8). */
  scrollToHour?: number;
  /** auto switches to the mobile layout at ≤767px. */
  layout?: "auto" | "desktop" | "mobile";
  /** Day view side panel (mini calendar + event details). Default true. */
  eventPanel?: boolean;
  renderEventDetails?: (event: CalendarEventData) => React.ReactNode;
  onEventEdit?: (event: CalendarEventData) => void;
  onEventDelete?: (event: CalendarEventData) => void;
  onEventCopy?: (event: CalendarEventData) => void;
  onAddGuest?: (event: CalendarEventData) => void;
  viewLabels?: Partial<Record<EventCalendarView, string>>;
  /** Single-key view shortcuts shown in the view menu and active while focus is inside the calendar (default D / W / M). false disables. */
  viewShortcuts?: Partial<Record<EventCalendarView, string>> | false;
}
/** EventCalendar — month / week / day event calendar with today badge, navigation, view switcher, time grid, now line and a day-view detail panel. */
export declare const EventCalendar: React.ForwardRefExoticComponent<EventCalendarProps & React.RefAttributes<HTMLElement>>;
