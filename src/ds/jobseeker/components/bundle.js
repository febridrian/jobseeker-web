/* @ds-bundle: {"format":4,"namespace":"Jobseeker","components":[{"name":"Button"},{"name":"IconButton"},{"name":"CloseButton"},{"name":"SocialIcon"},{"name":"SocialButton"},{"name":"SocialButtonGroup"},{"name":"Badge"},{"name":"BadgeGroup"},{"name":"Checkbox"},{"name":"Radio"},{"name":"Input"},{"name":"NumberInput"},{"name":"VerificationCode"},{"name":"Textarea"},{"name":"TagInput"},{"name":"ProgressBar"},{"name":"ProgressCircle"},{"name":"Avatar"},{"name":"AvatarGroup"},{"name":"AvatarLabelGroup"},{"name":"AvatarProfilePhoto"},{"name":"ButtonGroup"},{"name":"Dropdown"},{"name":"DropdownMenu"},{"name":"DropdownHeader"},{"name":"DropdownAccountTrigger"},{"name":"Select"},{"name":"ChoiceCard"},{"name":"ChoiceCardGroup"},{"name":"Slider"},{"name":"Tag"},{"name":"TextEditorToolbar"},{"name":"ToolbarButton"},{"name":"EditorBubbleMenu"},{"name":"TextEditor"},{"name":"Toggle"},{"name":"Tooltip"},{"name":"TooltipBubble"},{"name":"HelpIcon"},{"name":"VideoPlayer"},{"name":"FileIcon"},{"name":"FeedItem"},{"name":"ActivityFeed"},{"name":"Notification"},{"name":"NotificationRegion"},{"name":"FeaturedIcon"},{"name":"FolderIcon"},{"name":"CheckIcon"},{"name":"CheckItem"},{"name":"CheckList"},{"name":"RatingStar"},{"name":"RatingStars"},{"name":"MessageBar"},{"name":"Alert"},{"name":"Banner"},{"name":"Breadcrumbs"},{"name":"Chart"},{"name":"RadialChart"},{"name":"PieChart"},{"name":"RadarChart"},{"name":"CodeSnippet"},{"name":"ColorSwatch"},{"name":"ColorSwatches"},{"name":"ColorSlider"},{"name":"ColorArea"},{"name":"ColorInput"},{"name":"ColorPreview"},{"name":"ColorPanel"},{"name":"ColorPicker"},{"name":"ColorPalette"},{"name":"ColorPickerPopover"},{"name":"ColorPickerModal"},{"name":"ContentDivider"},{"name":"Calendar"},{"name":"DatePickerPanel"},{"name":"DatePicker"},{"name":"EmptyState"},{"name":"FileUpload"},{"name":"FilterBar"},{"name":"SegmentedControl"},{"name":"FilterMenu"},{"name":"SlideoutPanel"},{"name":"FilterPanel"},{"name":"CtaCard"},{"name":"LoadingIndicator"},{"name":"ChatMessage"},{"name":"MetricCard"},{"name":"Pagination"},{"name":"PaginationDots"},{"name":"ProgressSteps"},{"name":"CaptchaField"},{"name":"SectionFooter"},{"name":"SectionLabel"},{"name":"SectionHeader"},{"name":"SlideoutSection"},{"name":"Table"},{"name":"TableRow"},{"name":"TableCell"},{"name":"TableHeaderCell"},{"name":"TableCard"},{"name":"Tabs"},{"name":"TabPanel"},{"name":"TreeView"},{"name":"EventCalendar"},{"name":"CalendarEvent"}]} */
(function () {
  var React = window.React;
  var h = React.createElement;

  var HIERARCHIES = ["primary", "secondary", "tertiary", "link-color", "link-gray"];
  var SIZES = ["xs", "sm", "md", "lg", "xl"];

  function Spinner() {
    return h("svg", { className: "jsk-btn__spinner", viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true" },
      h("circle", { className: "track", cx: 10, cy: 10, r: 8, stroke: "currentColor", strokeWidth: 2 }),
      h("path", { d: "M18 10a8 8 0 0 0-8-8", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" })
    );
  }

  function Icon(props) {
    if (!props.node) return null;
    return h("span", { className: "jsk-btn__icon", "aria-hidden": "true" }, props.node);
  }

  /**
   * Button — the Jobseeker action button.
   * hierarchy: primary | secondary | tertiary | link-color | link-gray
   * size: xs | sm | md | lg | xl
   * destructive: red variant of any hierarchy
   */
  var Button = React.forwardRef(function Button(props, ref) {
    var hierarchy = HIERARCHIES.indexOf(props.hierarchy) >= 0 ? props.hierarchy : "primary";
    var size = SIZES.indexOf(props.size) >= 0 ? props.size : "md";
    var loading = !!props.loading;
    var disabled = !!props.disabled;
    var iconOnly = !!props.iconOnly;
    var href = props.href;

    var rest = {};
    for (var k in props) {
      if (["hierarchy", "size", "destructive", "loading", "loadingText", "disabled", "iconOnly", "iconLeading", "iconTrailing", "children", "className", "state", "href"].indexOf(k) < 0) rest[k] = props[k];
    }

    var cls = ["jsk-btn", "jsk-btn--" + hierarchy, "jsk-btn--" + size];
    if (props.destructive) cls.push("jsk-btn--destructive");
    if (iconOnly) cls.push("jsk-btn--icon");
    if (props.className) cls.push(props.className);

    var content;
    if (loading) {
      content = [
        h(Icon, { key: "s", node: h(Spinner) }),
        iconOnly ? null : h("span", { key: "l", className: "jsk-btn__label" }, props.loadingText || props.children)
      ];
    } else if (iconOnly) {
      content = h(Icon, { node: props.iconLeading || props.iconTrailing });
    } else {
      content = [
        h(Icon, { key: "a", node: props.iconLeading }),
        props.children != null ? h("span", { key: "l", className: "jsk-btn__label" }, props.children) : null,
        h(Icon, { key: "b", node: props.iconTrailing })
      ];
    }

    var attrs = Object.assign(rest, {
      ref: ref,
      className: cls.join(" "),
      "data-state": props.state || undefined,
      "aria-busy": loading ? "true" : undefined
    });

    if (href && !disabled && !loading) {
      attrs.href = href;
      return h("a", attrs, content);
    }
    attrs.type = rest.type || "button";
    attrs.disabled = disabled || undefined;
    if (loading) attrs.onClick = undefined;
    return h("button", attrs, content);
  });
  Button.displayName = "Button";

  var IB_HIERARCHIES = ["primary", "secondary", "tertiary"];
  var IB_SIZES = ["xs", "sm", "md", "lg", "xl", "2xl"];

  /**
   * IconButton — circular icon-only button.
   * hierarchy: primary | secondary | tertiary · size: xs | sm | md | lg | xl | 2xl
   */
  var IconButton = React.forwardRef(function IconButton(props, ref) {
    var hierarchy = IB_HIERARCHIES.indexOf(props.hierarchy) >= 0 ? props.hierarchy : "primary";
    var size = IB_SIZES.indexOf(props.size) >= 0 ? props.size : "md";
    var loading = !!props.loading;
    var rest = {};
    for (var k in props) {
      if (["hierarchy", "size", "icon", "loading", "disabled", "className", "state"].indexOf(k) < 0) rest[k] = props[k];
    }
    var cls = ["jsk-ibtn", "jsk-ibtn--" + hierarchy, "jsk-ibtn--" + size];
    if (props.className) cls.push(props.className);
    return h("button", Object.assign(rest, {
      ref: ref,
      type: rest.type || "button",
      className: cls.join(" "),
      disabled: props.disabled || undefined,
      "data-state": props.state || undefined,
      "aria-busy": loading ? "true" : undefined,
      onClick: loading ? undefined : rest.onClick
    }), h(Icon, { node: loading ? h(Spinner) : props.icon }));
  });
  IconButton.displayName = "IconButton";

  var CLOSE_SIZES = ["sm", "md", "lg"];

  /**
   * CloseButton — the X that dismisses modals, slide-outs, toasts and banners.
   * size: sm | md | lg · onDark: white icon for overlays, images and dark sections
   */
  var CloseButton = React.forwardRef(function CloseButton(props, ref) {
    var size = CLOSE_SIZES.indexOf(props.size) >= 0 ? props.size : "md";
    var rest = {};
    for (var k in props) {
      if (["size", "onDark", "className", "state"].indexOf(k) < 0) rest[k] = props[k];
    }
    var cls = ["jsk-close", "jsk-close--" + size];
    if (props.onDark) cls.push("jsk-close--on-dark");
    if (props.className) cls.push(props.className);
    return h("button", Object.assign({ "aria-label": "Close" }, rest, {
      ref: ref,
      type: rest.type || "button",
      className: cls.join(" "),
      "data-state": props.state || undefined
    }), h("svg", { viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true" },
      h("path", { d: "M18 6 6 18M6 6l12 12", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })));
  });
  CloseButton.displayName = "CloseButton";

  /* ---------- SocialIcon ---------- */
  // Brand marks are NOT bundled: register the official SVGs once with registerSocialLogos().
  var SI_PLATFORMS = {
    apple: ["Apple", "var(--alpha-black-100)"], x: ["X", "var(--alpha-black-100)"], twitter: ["Twitter", "#1DA1F2"],
    facebook: ["Facebook", "#1877F2"], instagram: ["Instagram", "#C837AB"], linkedin: ["LinkedIn", "#0A66C2"],
    google: ["Google", "#4285F4"], youtube: ["YouTube", "#FF0302"], whatsapp: ["WhatsApp", "#27B43E"],
    github: ["GitHub", "var(--alpha-black-100)"], pinterest: ["Pinterest", "#E60019"], figma: ["Figma", "#874FFF"],
    framer: ["Framer", "#0162FF"], discord: ["Discord", "#5865F2"], dribbble: ["Dribbble", "#EA4C89"],
    reddit: ["Reddit", "#FF4500"], signal: ["Signal", "#3A76F0"], slack: ["Slack", "#4A154B"],
    spotify: ["Spotify", "#1ED760"], telegram: ["Telegram", "#229ED9"], tiktok: ["TikTok", "var(--alpha-black-100)"],
    twitch: ["Twitch", "#6441A5"], paypal: ["PayPal", "#003087"], wise: ["Wise", "#163300"],
    webflow: ["Webflow", "#146EF5"], notion: ["Notion", "var(--alpha-black-100)"]
  };
  var SI_LOGOS = {};
  /** registerSocialLogos({ facebook: { brand: <svg/>|"<svg…>", mono: <svg/>|"<svg…>" } }) — mono marks paint with currentColor. */
  function registerSocialLogos(map) { for (var k in map) SI_LOGOS[k] = map[k]; SI_VERSION++; SI_LISTENERS.forEach(function (f) { f(SI_VERSION); }); }
  var SI_VERSION = 0, SI_LISTENERS = [];
  function siNode(v) {
    if (v == null) return null;
    if (typeof v === "string") return h("span", { className: "jsk-social-icon__svg", dangerouslySetInnerHTML: { __html: v } });
    return v;
  }
  var SI_OWN = ["platform", "variant", "size", "logo", "label", "href", "state", "className", "style"];
  /**
   * SocialIcon — one platform mark at 16 / 20 / 24px.
   * variant: brand (official colours) | gray (fg-quaternary → fg-quaternary_hover) | white (on filled buttons)
   * Uses the logo registered with registerSocialLogos(), the `logo` prop, or a neutral placeholder.
   * Decorative by default; pass `label` (or `href`, which renders a link) to expose it.
   */
  var SocialIcon = React.forwardRef(function SocialIcon(props, ref) {
    var _v = React.useState(SI_VERSION), setV = _v[1];
    React.useEffect(function () { SI_LISTENERS.push(setV); return function () { SI_LISTENERS = SI_LISTENERS.filter(function (f) { return f !== setV; }); }; }, []);
    var platform = props.platform || "";
    var meta = SI_PLATFORMS[platform] || [platform.charAt(0).toUpperCase() + platform.slice(1), "currentColor"];
    var variant = props.variant === "gray" || props.variant === "white" ? props.variant : "brand";
    var size = props.size === 16 || props.size === 20 ? props.size : 24;
    var entry = SI_LOGOS[platform];
    var mark = props.logo != null ? props.logo
      : entry ? (entry.brand !== undefined || entry.mono !== undefined
          ? (variant === "brand" ? (entry.brand !== undefined ? entry.brand : entry.mono) : (entry.mono !== undefined ? entry.mono : entry.brand))
          : entry)
      : null;
    var placeholder = mark == null;
    var inner = placeholder
      ? h("svg", { viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true" },
          h("rect", { x: 3, y: 3, width: 18, height: 18, rx: 5, stroke: "currentColor", strokeWidth: 2 }),
          h("circle", { cx: 12, cy: 12, r: 3, fill: "currentColor" }))
      : siNode(mark);
    var label = props.label || (props.href ? meta[0] : null);
    var Tag = props.href ? "a" : "span";
    return h(Tag, Object.assign(omit(props, SI_OWN), { ref: ref, href: props.href,
        className: "jsk-social-icon jsk-social-icon--" + variant + " jsk-social-icon--" + size + (placeholder ? " is-placeholder" : "") + (props.className ? " " + props.className : ""),
        style: Object.assign({ "--si-brand": meta[1] }, props.style), "data-platform": platform, "data-state": props.state || undefined,
        role: label && !props.href ? "img" : undefined, "aria-label": label || undefined, "aria-hidden": label ? undefined : "true" }), inner);
  });
  SocialIcon.displayName = "SocialIcon";
  SocialIcon.platforms = Object.keys(SI_PLATFORMS);

  var PLATFORMS = { google: "Google", facebook: "Facebook", apple: "Apple", x: "X", figma: "Figma", dribbble: "Dribbble" };
  var SB_THEMES = ["brand", "color", "gray"];

  /**
   * SocialButton — "Sign in with …" for Google, Facebook, Apple, X, Figma and Dribbble.
   * platform · theme: brand | color | gray · size: sm | md · iconOnly · fullWidth · logo: the platform mark (SVG)
   */
  var SocialButton = React.forwardRef(function SocialButton(props, ref) {
    var platform = PLATFORMS[props.platform] ? props.platform : "google";
    var theme = SB_THEMES.indexOf(props.theme) >= 0 ? props.theme : "color";
    var size = props.size === "sm" ? "sm" : "md";
    var name = PLATFORMS[platform];
    var label = props.children != null ? props.children : "Sign in with " + name;
    var rest = {};
    for (var k in props) {
      if (["platform", "theme", "size", "iconOnly", "logo", "children", "className", "state", "fullWidth"].indexOf(k) < 0) rest[k] = props[k];
    }
    var cls = ["jsk-social", "jsk-social--" + platform, "jsk-social--" + theme, "jsk-social--" + size];
    if (props.iconOnly) cls.push("jsk-social--icon");
    if (props.fullWidth && !props.iconOnly) cls.push("jsk-social--full");
    if (props.className) cls.push(props.className);
    var attrs = Object.assign({ type: "button" }, rest, {
      ref: ref,
      className: cls.join(" "),
      "data-state": props.state || undefined,
      "aria-label": props.iconOnly ? (rest["aria-label"] || label) : rest["aria-label"]
    });
    return h("button", attrs,
      h("span", { className: "jsk-social__logo", "aria-hidden": "true" },
        h(SocialIcon, { platform: platform, size: size === "sm" ? 16 : 20, logo: props.logo,
          variant: theme === "gray" ? "gray" : theme === "brand" && platform !== "google" && platform !== "figma" ? "white" : "brand" })),
      props.iconOnly ? null : h("span", null, label));
  });
  SocialButton.displayName = "SocialButton";

  var SBG_OWN = ["items", "theme", "size", "layout", "className", "style", "children"];
  /**
   * SocialButtonGroup — a set of SocialButtons sharing one theme and size.
   * layout: stack (full-width, labelled; gap 10 sm / 12 md) | row (icon-only, equal widths, gap 12)
   * items [{platform, logo, label, onClick, disabled}] or SocialButton children.
   */
  var SocialButtonGroup = React.forwardRef(function SocialButtonGroup(props, ref) {
    var layout = props.layout === "row" ? "row" : "stack";
    var size = props.size === "sm" ? "sm" : "md";
    var theme = SB_THEMES.indexOf(props.theme) >= 0 ? props.theme : "color";
    var shared = { theme: theme, size: size, fullWidth: layout === "stack", iconOnly: layout === "row" };
    var kids = props.items
      ? props.items.map(function (it, i) {
          return h(SocialButton, Object.assign({ key: it.key || it.platform || i }, shared, omit(it, ["key", "label"]), { children: it.label }));
        })
      : React.Children.map(props.children, function (c) {
          if (!React.isValidElement(c)) return c;
          var o = {}; for (var k in shared) if (c.props[k] === undefined) o[k] = shared[k];
          return React.cloneElement(c, o);
        });
    return h("div", Object.assign(omit(props, SBG_OWN), { ref: ref, role: "group",
        className: "jsk-sbg jsk-sbg--" + layout + " jsk-sbg--" + size + (props.className ? " " + props.className : ""), style: props.style }), kids);
  });
  SocialButtonGroup.displayName = "SocialButtonGroup";

  var BD_COLORS = ["gray", "brand", "error", "warning", "success", "info", "gray-blue", "blue-light", "blue", "indigo", "purple", "pink", "orange", "yellow"];
  var BD_TYPES = ["pill", "badge", "modern"];

  /**
   * Badge — small status / category label.
   * type: pill | badge | modern · color: 14 utility colours · size: sm | md | lg
   * dot · iconLeading · iconTrailing · flag · avatar · onRemove (X) · iconOnly
   */
  var Badge = React.forwardRef(function Badge(props, ref) {
    var type = BD_TYPES.indexOf(props.type) >= 0 ? props.type : "pill";
    var color = BD_COLORS.indexOf(props.color) >= 0 ? props.color : "gray";
    var size = ["sm", "md", "lg"].indexOf(props.size) >= 0 ? props.size : "sm";
    var rest = {};
    for (var k in props) {
      if (["type", "color", "size", "dot", "iconLeading", "iconTrailing", "flag", "avatar", "avatarAlt", "onRemove", "removeLabel", "iconOnly", "children", "className"].indexOf(k) < 0) rest[k] = props[k];
    }
    var iconOnly = !!props.iconOnly;
    var cls = ["jsk-badge", "jsk-badge--" + type, "jsk-badge--" + color, "jsk-badge--" + size];
    var lead = null;
    if (iconOnly) {
      cls.push("jsk-badge--icon");
    } else if (props.dot) {
      cls.push("has-dot"); lead = h("span", { className: "jsk-badge__dot", "aria-hidden": "true" });
    } else if (props.avatar) {
      cls.push("has-media");
      lead = h("span", { className: "jsk-badge__media jsk-badge__media--avatar" }, h("img", { src: props.avatar, alt: props.avatarAlt || "" }));
    } else if (props.flag) {
      cls.push("has-media"); lead = h("span", { className: "jsk-badge__media", "aria-hidden": "true" }, props.flag);
    } else if (props.iconLeading) {
      cls.push("has-lead"); lead = h("span", { className: "jsk-badge__icon", "aria-hidden": "true" }, props.iconLeading);
    }
    var trail = null;
    if (!iconOnly) {
      if (props.onRemove) {
        cls.push("has-x");
        trail = h("button", { type: "button", className: "jsk-badge__x", "aria-label": props.removeLabel || ("Remove " + (typeof props.children === "string" ? props.children : "")).trim(), onClick: props.onRemove },
          h("svg", { viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true" },
            h("path", { d: "M9 3 3 9M3 3l6 6", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })));
      } else if (props.iconTrailing) {
        cls.push("has-trail"); trail = h("span", { className: "jsk-badge__icon", "aria-hidden": "true" }, props.iconTrailing);
      }
    }
    if (props.className) cls.push(props.className);
    var attrs = Object.assign(rest, { ref: ref, className: cls.join(" ") });
    if (iconOnly) {
      if (!attrs["aria-label"] && typeof props.children === "string") attrs["aria-label"] = props.children;
      attrs.role = attrs.role || "img";
      return h("span", attrs, h("span", { className: "jsk-badge__icon", "aria-hidden": "true" }, props.iconLeading || props.iconTrailing));
    }
    return h("span", attrs, lead, props.children, trail);
  });
  Badge.displayName = "Badge";

  function ArrowRight() {
    return h("svg", { viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true" },
      h("path", { d: "M3.33 8h9.34M8 3.33 12.67 8 8 12.67", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }));
  }
  function ArrowSmall() {
    return h("svg", { viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true" },
      h("path", { d: "M2.5 6h7M6 2.5 9.5 6 6 9.5", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }));
  }

  /**
   * BadgeGroup — a badge plus a short message, for announcements ("New feature · We've just released…").
   * type: pill | modern · color · size: sm | md · tone: light | medium · align: leading | trailing (badge position)
   */
  var BadgeGroup = React.forwardRef(function BadgeGroup(props, ref) {
    var type = props.type === "modern" ? "modern" : "pill";
    var color = BD_COLORS.indexOf(props.color) >= 0 ? props.color : "gray";
    var size = props.size === "md" ? "md" : "sm";
    var tone = props.tone === "medium" ? "medium" : "light";
    var align = props.align === "trailing" ? "trailing" : "leading";
    var rest = {};
    for (var k in props) {
      if (["type", "color", "size", "tone", "align", "badge", "icon", "children", "className"].indexOf(k) < 0) rest[k] = props[k];
    }
    var cls = ["jsk-bgroup", "jsk-bgroup--" + type, "jsk-bgroup--" + color, "jsk-bgroup--" + size, "jsk-bgroup--" + tone, "jsk-bgroup--" + align];
    if (props.className) cls.push(props.className);
    var icon = props.icon === null ? null : (props.icon || h(ArrowRight));
    var parts;
    if (align === "leading") {
      parts = [
        h(Badge, { key: "b", type: type === "modern" ? "modern" : "pill", color: color, size: size, dot: type === "modern" }, props.badge),
        h("span", { key: "m", className: "jsk-bgroup__msg" },
          h("span", { className: "jsk-bgroup__text" }, props.children),
          icon ? h("span", { className: "jsk-bgroup__icon", "aria-hidden": "true" }, icon) : null)
      ];
    } else {
      parts = [
        h("span", { key: "m", className: "jsk-bgroup__msg" + (type === "modern" ? " jsk-bgroup__msg--dot" : "") },
          type === "modern" ? h("span", { className: "jsk-bgroup__dot", "aria-hidden": "true" }) : null,
          h("span", { className: "jsk-bgroup__text" }, props.children)),
        h(Badge, { key: "b", type: type === "modern" ? "modern" : "pill", color: type === "modern" ? "gray" : color, size: size, iconTrailing: icon ? h(ArrowSmall) : null }, props.badge)
      ];
    }
    var tag = props.href ? "a" : (props.onClick ? "button" : "div");
    var attrs = Object.assign(rest, { ref: ref, className: cls.join(" ") });
    if (tag === "button") attrs.type = attrs.type || "button";
    return h(tag, attrs, parts);
  });
  BadgeGroup.displayName = "BadgeGroup";

  function makeToggle(kind) {
    var Comp = React.forwardRef(function (props, ref) {
      var size = props.size === "md" ? "md" : "sm";
      var inner = React.useRef(null);
      var setRef = function (el) {
        inner.current = el;
        if (typeof ref === "function") ref(el); else if (ref) ref.current = el;
      };
      React.useEffect(function () {
        if (inner.current && kind === "checkbox") inner.current.indeterminate = !!props.indeterminate;
      }, [props.indeterminate]);
      var rest = {};
      for (var k in props) {
        if (["size", "label", "hint", "indeterminate", "className", "style", "state"].indexOf(k) < 0) rest[k] = props[k];
      }
      var labelled = props.label != null || props.hint != null;
      var cls = ["jsk-check", "jsk-check--" + kind, "jsk-check--" + size];
      if (labelled) cls.push("jsk-check--labelled");
      if (props.disabled) cls.push("jsk-check--disabled");
      if (props.className) cls.push(props.className);
      var sw = size === "md" ? 2 : 1.67;
      var mark;
      if (kind === "checkbox") {
        var vb = size === "md" ? "0 0 14 14" : "0 0 12 12";
        mark = [
          h("svg", { key: "c", className: "jsk-check__mark jsk-check__mark--check", viewBox: vb, fill: "none", "aria-hidden": "true" },
            h("path", { d: size === "md" ? "M11.67 3.5 5.25 9.92 2.33 7" : "M10 3 4.5 8.5 2 6", stroke: "currentColor", strokeWidth: sw, strokeLinecap: "round", strokeLinejoin: "round" })),
          h("svg", { key: "d", className: "jsk-check__mark jsk-check__mark--dash", viewBox: vb, fill: "none", "aria-hidden": "true" },
            h("path", { d: size === "md" ? "M2.92 7h8.16" : "M2.5 6h7", stroke: "currentColor", strokeWidth: sw, strokeLinecap: "round" }))
        ];
      } else {
        mark = h("span", { className: "jsk-check__dot" });
      }
      return h("label", { className: cls.join(" "), style: props.style, "data-state": props.state || undefined },
        h("input", Object.assign(rest, { ref: setRef, type: kind, className: "jsk-check__input",
          "aria-checked": kind === "checkbox" && props.indeterminate ? "mixed" : undefined })),
        h("span", { className: "jsk-check__ctrl" }, h("span", { className: "jsk-check__box", "aria-hidden": "true" }, mark)),
        labelled ? h("span", { className: "jsk-check__text" },
          props.label != null ? h("span", { className: "jsk-check__label" }, props.label) : null,
          props.hint != null ? h("span", { className: "jsk-check__hint" }, props.hint) : null) : null);
    });
    return Comp;
  }

  /** Checkbox — sm 16px | md 20px box, optional label + hint, indeterminate. */
  var Checkbox = makeToggle("checkbox");
  Checkbox.displayName = "Checkbox";
  /** Radio — sm 16px | md 20px circle, optional label + hint. Group radios with the same `name`. */
  var Radio = makeToggle("radio");
  Radio.displayName = "Radio";

  /* ---------- Form fields: Input, NumberInput, VerificationCode ---------- */
  var FIELD_SIZES = ["sm", "md", "lg"];
  var P = {
    help: "M6.06 6a2 2 0 0 1 3.89.67c0 1.33-2 2-2 2M8 11.33h.01M14.67 8A6.67 6.67 0 1 1 1.33 8a6.67 6.67 0 0 1 13.34 0Z",
    alert: "M8 5.33V8M8 10.67h.01M14.67 8A6.67 6.67 0 1 1 1.33 8a6.67 6.67 0 0 1 13.34 0Z",
    check: "M5 8l2 2 4-4M14.67 8A6.67 6.67 0 1 1 1.33 8a6.67 6.67 0 0 1 13.34 0Z",
    down: "M4 6l4 4 4-4",
    up: "M4 10l4-4 4 4",
    eye: "M1.61 8.48c-.09-.14-.14-.21-.16-.32a.77.77 0 0 1 0-.32c.02-.11.07-.18.16-.32C2.36 6.33 4.6 3.33 8 3.33s5.64 3 6.39 4.19c.09.14.14.21.16.32.02.08.02.24 0 .32-.02.11-.07.18-.16.32-.75 1.19-2.99 4.19-6.39 4.19S2.36 9.67 1.61 8.48ZM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
    eyeOff: "M7.16 3.38A6.7 6.7 0 0 1 8 3.33c3.4 0 5.64 3 6.39 4.19.09.14.14.21.16.32.02.08.02.24 0 .32-.02.11-.07.18-.16.32-.2.32-.52.8-.94 1.29M4.48 4.47C2.98 5.49 1.96 6.9 1.49 7.64c-.09.15-.14.22-.16.33a.77.77 0 0 0 0 .32c.02.11.07.18.16.32.75 1.19 2.99 4.19 6.39 4.19 1.37 0 2.55-.49 3.52-1.15M2 2l12 12M6.59 6.59a2 2 0 0 0 2.83 2.83",
    minus: "M4.17 10h11.66",
    plus: "M10 4.17v11.66M4.17 10h11.66"
  };
  function Ico(vb, d, sw, cls) {
    return h("svg", { className: cls, viewBox: vb, fill: "none", "aria-hidden": "true" },
      h("path", { d: d, stroke: "currentColor", strokeWidth: sw, strokeLinecap: "round", strokeLinejoin: "round" }));
  }
  function useFieldId(id) {
    var gen = React.useId ? React.useId() : "f";
    return id || ("jsk" + gen.replace(/[^a-zA-Z0-9_-]/g, ""));
  }
  function omit(props, keys) {
    var r = {};
    for (var k in props) if (keys.indexOf(k) < 0) r[k] = props[k];
    return r;
  }
  function fieldSize(s) { return FIELD_SIZES.indexOf(s) >= 0 ? s : "md"; }
  function hasMessage(p) { return p.hint != null || (p.error != null && p.error !== true && p.error !== false); }

  /** Shared shell: label, required mark, control, hint / error message. */
  function Field(p) {
    var msg = p.error != null && p.error !== true && p.error !== false ? p.error : p.hint;
    var cls = ["jsk-field", "jsk-field--" + p.size];
    if (p.error) cls.push("jsk-field--error");
    if (p.disabled) cls.push("jsk-field--disabled");
    if (p.className) cls.push(p.className);
    var hcls = "jsk-field__hint" + (p.hintStatus ? " jsk-field__hint--" + p.hintStatus : "");
    return h("div", { className: cls.join(" "), style: p.style },
      p.label != null ? h("label", { className: "jsk-field__label", htmlFor: p.htmlFor, id: p.labelId }, p.label,
        p.required ? h("span", { className: "jsk-field__req", "aria-hidden": "true" }, "*") : null,
        p.tooltip ? h(HelpIcon, Object.assign({ className: "jsk-field__help" }, helpProps(p.tooltip))) : null) : null,
      p.children,
      msg != null ? h("div", { className: hcls, id: p.hintId },
        p.hintStatus ? Ico("0 0 16 16", P.check, 1.5, "jsk-field__hint-icon") : null,
        h("span", null, msg)) : null);
  }

  function InlineSelect(s, side, size, disabled) {
    if (!s) return null;
    var attrs = { className: "jsk-input__select-el", onChange: s.onChange, disabled: disabled || s.disabled,
      "aria-label": s["aria-label"] || (side === "leading" ? "Country code" : "Unit") };
    if (s.value !== undefined) attrs.value = s.value;
    if (s.defaultValue !== undefined) attrs.defaultValue = s.defaultValue;
    return h("span", { className: "jsk-input__select jsk-input__select--" + side },
      h("select", attrs, (s.options || []).map(function (o) {
        return typeof o === "object" ? h("option", { key: o.value, value: o.value }, o.label) : h("option", { key: o, value: o }, o);
      })),
      Ico("0 0 16 16", P.down, size === "sm" ? 2 : 1.75, "jsk-input__chev"));
  }

  var INPUT_OWN = ["size", "label", "required", "hint", "hintStatus", "error", "tooltip", "iconLeading", "leading", "prefix",
    "addonLeading", "addonTrailing", "selectLeading", "selectTrailing", "button", "revealable", "shortcut", "className", "style", "state", "id", "type"];

  /**
   * Input — single-line text field with label, hint and error.
   * size: sm 36px | md 40px | lg 44px. Add-ons: iconLeading, leading (card/media), prefix,
   * addonLeading/addonTrailing, selectLeading/selectTrailing, button. type="password" gets a show/hide toggle.
   */
  var Input = React.forwardRef(function Input(props, ref) {
    var size = fieldSize(props.size);
    var id = useFieldId(props.id);
    var hintId = id + "-hint";
    var reveal = React.useState(false);
    var type = props.type || "text";
    var revealable = type === "password" && props.revealable !== false;
    var err = !!props.error;
    var split = props.addonLeading != null || props.addonTrailing != null || !!props.button;

    var wrap = ["jsk-input"];
    var ctrl = ["jsk-input__control"];
    (split ? ctrl : wrap).push("jsk-input__frame");
    if (split) wrap.push("jsk-input--split");
    if (props.addonLeading != null) wrap.push("has-addon-l");
    if (props.addonTrailing != null) wrap.push("has-addon-t");
    if (props.button) wrap.push("has-btn");
    if (props.selectLeading) wrap.push("has-sel-l");
    if (props.selectTrailing) wrap.push("has-sel-t");
    if (props.leading) ctrl.push("has-media");

    var inputAttrs = Object.assign(omit(props, INPUT_OWN), {
      ref: ref, id: id, className: "jsk-input__el",
      type: revealable && reveal[0] ? "text" : type,
      required: props.required || undefined,
      "aria-invalid": err || undefined,
      "aria-describedby": hasMessage(props) ? hintId : undefined
    });

    var trailingIcon = err
      ? h("span", { className: "jsk-input__err" }, Ico("0 0 16 16", P.alert, 1.33))
      : props.tooltip ? h(HelpIcon, helpProps(props.tooltip)) : null;

    var b = props.button;
    return h(Field, { size: size, label: props.label, required: props.required, hint: props.hint, hintStatus: props.hintStatus,
        error: props.error, disabled: props.disabled, className: props.className, style: props.style, htmlFor: id, hintId: hintId },
      h("div", { className: wrap.join(" "), "data-state": props.state || undefined },
        props.addonLeading != null ? h("span", { className: "jsk-input__addon" }, props.addonLeading) : null,
        InlineSelect(props.selectLeading, "leading", size, props.disabled),
        h("div", { className: ctrl.join(" "), "data-state": split ? props.state || undefined : undefined },
          props.leading ? h("span", { className: "jsk-input__media" }, props.leading) : null,
          props.iconLeading ? h("span", { className: "jsk-input__icon", "aria-hidden": "true" }, props.iconLeading) : null,
          props.prefix != null ? h("span", { className: "jsk-input__prefix" }, props.prefix) : null,
          h("input", inputAttrs),
          revealable ? h("button", { type: "button", className: "jsk-input__reveal", disabled: props.disabled,
            "aria-label": reveal[0] ? "Hide password" : "Show password", "aria-pressed": reveal[0],
            onClick: function () { reveal[1](!reveal[0]); } }, Ico("0 0 16 16", reveal[0] ? P.eyeOff : P.eye, 1.5)) : null,
          props.shortcut ? h("kbd", { className: "jsk-input__kbd", "aria-hidden": "true" }, props.shortcut) : null,
          trailingIcon),
        InlineSelect(props.selectTrailing, "trailing", size, props.disabled),
        props.addonTrailing != null ? h("span", { className: "jsk-input__addon" }, props.addonTrailing) : null,
        b ? h(Button, { hierarchy: "secondary", size: size, iconLeading: b.icon, onClick: b.onClick, href: b.href,
          disabled: props.disabled || b.disabled, className: "jsk-input__btn" }, b.label) : null));
  });
  Input.displayName = "Input";

  var NUM_OWN = ["size", "label", "required", "hint", "error", "variant", "className", "style", "state", "id", "value",
    "defaultValue", "onValueChange", "onChange", "min", "max", "step", "decreaseLabel", "increaseLabel"];

  /** NumberInput — number field with −/+ buttons (stepper) or up/down chevrons on the right (chevrons). */
  var NumberInput = React.forwardRef(function NumberInput(props, ref) {
    var size = fieldSize(props.size);
    var id = useFieldId(props.id);
    var hintId = id + "-hint";
    var variant = props.variant === "chevrons" ? "chevrons" : "stepper";
    var controlled = props.value !== undefined;
    var st = React.useState(props.defaultValue != null ? props.defaultValue : "");
    var val = controlled ? props.value : st[0];
    var step = Number(props.step) || 1;
    var min = props.min != null ? Number(props.min) : null;
    var max = props.max != null ? Number(props.max) : null;
    var num = val === "" || val == null ? NaN : Number(val);
    function set(v) { if (!controlled) st[1](v); if (props.onValueChange) props.onValueChange(v === "" ? "" : Number(v)); }
    function bump(dir) {
      var n = isNaN(num) ? (min != null ? min : 0) : num + dir * step;
      if (isNaN(num) && dir < 0 && max != null) n = max;
      if (min != null && n < min) n = min;
      if (max != null && n > max) n = max;
      set(Math.round(n * 1e6) / 1e6);
    }
    var dis = !!props.disabled;
    var atMin = dis || (min != null && !isNaN(num) && num <= min);
    var atMax = dis || (max != null && !isNaN(num) && num >= max);
    var input = h("input", Object.assign(omit(props, NUM_OWN), {
      ref: ref, id: id, type: "number", inputMode: "decimal", className: "jsk-input__el", value: val == null ? "" : val,
      min: props.min, max: props.max, step: props.step, required: props.required || undefined,
      "aria-invalid": !!props.error || undefined, "aria-describedby": hasMessage(props) ? hintId : undefined,
      onChange: function (e) { set(e.target.value); if (props.onChange) props.onChange(e); }
    }));
    var dec = props.decreaseLabel || "Decrease", inc = props.increaseLabel || "Increase";
    var body;
    if (variant === "stepper") {
      body = [
        h("button", { key: "d", type: "button", className: "jsk-num__btn", "aria-label": dec, disabled: atMin, tabIndex: -1, onClick: function () { bump(-1); } }, Ico("0 0 20 20", P.minus, 1.67)),
        h("div", { key: "c", className: "jsk-input__control" }, input),
        h("button", { key: "i", type: "button", className: "jsk-num__btn", "aria-label": inc, disabled: atMax, tabIndex: -1, onClick: function () { bump(1); } }, Ico("0 0 20 20", P.plus, 1.67))
      ];
    } else {
      body = [
        h("div", { key: "c", className: "jsk-input__control" }, input),
        h("div", { key: "s", className: "jsk-num__spin" },
          h("button", { type: "button", className: "jsk-num__chev", "aria-label": inc, disabled: atMax, tabIndex: -1, onClick: function () { bump(1); } }, Ico("0 0 16 16", P.up, 1.75)),
          h("button", { type: "button", className: "jsk-num__chev", "aria-label": dec, disabled: atMin, tabIndex: -1, onClick: function () { bump(-1); } }, Ico("0 0 16 16", P.down, 1.75)))
      ];
    }
    return h(Field, { size: size, label: props.label, required: props.required, hint: props.hint, error: props.error,
        disabled: dis, className: props.className, style: props.style, htmlFor: id, hintId: hintId },
      h("div", { className: "jsk-input jsk-input__frame jsk-num jsk-num--" + variant, "data-state": props.state || undefined }, body));
  });
  NumberInput.displayName = "NumberInput";

  /** VerificationCode — one box per digit, auto-advance, backspace and paste support. */
  var VerificationCode = React.forwardRef(function VerificationCode(props, ref) {
    var size = fieldSize(props.size);
    var id = useFieldId(props.id);
    var length = props.length || 4;
    var controlled = props.value !== undefined;
    var st = React.useState(props.defaultValue || "");
    var val = String((controlled ? props.value : st[0]) || "").slice(0, length);
    var boxes = React.useRef([]);
    var pattern = props.pattern || /\d/g;
    function focus(i) { var el = boxes.current[Math.max(0, Math.min(length - 1, i))]; if (el) { el.focus(); el.select(); } }
    function commit(v) {
      v = v.slice(0, length);
      if (!controlled) st[1](v);
      if (props.onChange) props.onChange(v);
      if (v.length === length && props.onComplete) props.onComplete(v);
    }
    function onInput(i, e) {
      var chars = (e.target.value.match(pattern) || []).join("");
      if (!chars) return;
      if (chars.length > 1 && val[i] && chars.indexOf(val[i]) === 0 && chars.length === 2) chars = chars.slice(1);
      var at = Math.min(i, val.length);
      commit(val.slice(0, at) + chars + val.slice(at + chars.length));
      focus(at + chars.length);
    }
    function onKey(i, e) {
      if (e.key === "Backspace") {
        e.preventDefault();
        if (val[i]) commit(val.slice(0, i) + val.slice(i + 1));
        else if (i > 0) { commit(val.slice(0, i - 1) + val.slice(i)); focus(i - 1); }
      } else if (e.key === "ArrowLeft") { e.preventDefault(); focus(i - 1); }
      else if (e.key === "ArrowRight") { e.preventDefault(); focus(i + 1); }
    }
    var labelId = id + "-label", hintId = id + "-hint";
    var large = props.variant === "large";
    var sep = props.separator != null ? props.separator : (large && length % 2 === 0 && length >= 6 ? length / 2 : 0);
    if (sep === true) sep = Math.floor(length / 2);
    var items = [];
    for (var i = 0; i < length; i++) {
      (function (i) {
        if (sep && i === sep) items.push(h("span", { key: "sep", className: "jsk-otp__sep", "aria-hidden": "true" }, "-"));
        items.push(h("input", { key: i, id: i === 0 ? id : undefined, className: "jsk-otp__box" + (val[i] ? " is-filled" : ""),
          ref: function (el) { boxes.current[i] = el; },
          value: val[i] || "", placeholder: props.placeholder != null ? props.placeholder : "0",
          inputMode: props.inputMode || "numeric", autoComplete: i === 0 ? "one-time-code" : "off",
          disabled: props.disabled, "aria-label": "Digit " + (i + 1) + " of " + length,
          "aria-invalid": !!props.error || undefined,
          onChange: function (e) { onInput(i, e); },
          onKeyDown: function (e) { onKey(i, e); },
          onFocus: function (e) { e.target.select(); } }));
      })(i);
    }
    return h(Field, { size: size, label: props.label, required: props.required, hint: props.hint, error: props.error,
        disabled: props.disabled, className: props.className, style: props.style, htmlFor: id, labelId: labelId, hintId: hintId },
      h("div", { ref: ref, className: "jsk-otp" + (large ? " jsk-otp--large" : ""), role: "group", "aria-labelledby": props.label != null ? labelId : undefined,
        "aria-label": props.label == null ? (props["aria-label"] || "Verification code") : undefined,
        "aria-describedby": hasMessage(props) ? hintId : undefined, "data-state": props.state || undefined }, items));
  });
  VerificationCode.displayName = "VerificationCode";


  function sizeSmMd(s) { return s === "sm" ? "sm" : "md"; }
  var TA_OWN = ["size", "label", "required", "hint", "error", "tooltip", "className", "style", "state", "id"];

  /** Textarea — multi-line text field. size sm (14px text) | md (16px). Label tooltip, hint, error. */
  var Textarea = React.forwardRef(function Textarea(props, ref) {
    var size = sizeSmMd(props.size);
    var id = useFieldId(props.id);
    var hintId = id + "-hint";
    return h(Field, { size: size, label: props.label, required: props.required, tooltip: props.tooltip, hint: props.hint, error: props.error,
        disabled: props.disabled, className: props.className, style: props.style, htmlFor: id, hintId: hintId },
      h("div", { className: "jsk-input jsk-input__frame jsk-ta", "data-state": props.state || undefined },
        h("textarea", Object.assign(omit(props, TA_OWN), { ref: ref, id: id, className: "jsk-ta__el", rows: props.rows || 4,
          required: props.required || undefined, "aria-invalid": !!props.error || undefined,
          "aria-describedby": hasMessage(props) ? hintId : undefined }))));
  });
  Textarea.displayName = "Textarea";

  /** Tag chip used by TagInput: md 14px | sm 12px text, optional X. */
  var TAG_SIZES = ["sm", "md", "lg"];
  var TAG_OWN2 = ["size", "label", "children", "avatar", "avatarAlt", "flag", "dot", "count", "checkbox", "checked", "defaultChecked",
    "onCheckedChange", "onRemove", "removeLabel", "disabled", "name", "value", "className", "style"];
  var TAG_DOT = ["success", "gray", "brand", "error", "warning"];
  function TagView(p, ref) {
    var size = TAG_SIZES.indexOf(p.size) >= 0 ? p.size : "md";
    var text = p.children != null ? p.children : p.label;
    var cls = ["jsk-tag", "jsk-tag--" + size];
    var lead = null;
    if (p.dot) {
      var dc = TAG_DOT.indexOf(p.dot) >= 0 ? p.dot : "success";
      cls.push("has-dot"); lead = h("span", { className: "jsk-tag__dot jsk-tag__dot--" + dc, "aria-hidden": "true" });
    } else if (p.flag) {
      cls.push("has-flag"); lead = h("span", { className: "jsk-tag__flag", "aria-hidden": "true" }, p.flag);
    } else if (p.avatar) {
      cls.push("has-av");
      lead = h("span", { className: "jsk-tag__av" }, typeof p.avatar === "string" ? h(Avatar, { size: "xs", src: p.avatar, alt: p.avatarAlt || "" }) : p.avatar);
    }
    var box = null;
    if (p.checkbox) {
      cls.push("has-cb");
      var inp = { type: "checkbox", className: "jsk-check__input", disabled: p.disabled, name: p.name, value: p.value };
      if (p.checked !== undefined) { inp.checked = p.checked; inp.onChange = function (e) { if (p.onCheckedChange) p.onCheckedChange(e.target.checked, e); }; }
      else { inp.defaultChecked = p.defaultChecked; if (p.onCheckedChange) inp.onChange = function (e) { p.onCheckedChange(e.target.checked, e); }; }
      box = [h("input", Object.assign({ key: "i" }, inp)),
        h("span", { key: "c", className: "jsk-check__ctrl" }, h("span", { className: "jsk-check__box", "aria-hidden": "true" },
          h("svg", { className: "jsk-check__mark jsk-check__mark--check", viewBox: "0 0 12 12", fill: "none" },
            h("path", { d: "M10 3 4.5 8.5 2 6", stroke: "currentColor", strokeWidth: 1.67, strokeLinecap: "round", strokeLinejoin: "round" }))))];
    }
    if (p.onRemove) cls.push("has-x");
    if (p.count != null) cls.push("has-count");
    if (p.disabled) cls.push("is-disabled");
    if (p.className) cls.push(p.className);
    var inner = [box, lead, h("span", { key: "t", className: "jsk-tag__label" }, text),
      p.count != null ? h("span", { key: "n", className: "jsk-tag__count" }, p.count) : null];
    var xs = size === "lg" ? ["0 0 14 14", "M10.5 3.5l-7 7M3.5 3.5l7 7", 1.67] : ["0 0 12 12", "M9 3 3 9M3 3l6 6", 1.5];
    return h("span", Object.assign(omit(p, TAG_OWN2), { ref: ref, className: cls.join(" "), style: p.style }),
      p.checkbox
        ? h("label", { className: "jsk-tag__main jsk-check jsk-check--checkbox" + (p.disabled ? " jsk-check--disabled" : "") }, inner)
        : h("span", { className: "jsk-tag__main" }, inner),
      p.onRemove ? h("button", { type: "button", className: "jsk-tag__x", disabled: p.disabled,
        "aria-label": p.removeLabel || ("Remove " + (typeof text === "string" ? text : "tag")),
        onClick: function (e) { e.stopPropagation(); p.onRemove(e); } }, Ico(xs[0], xs[1], xs[2])) : null);
  }
  /** Tag — sm | md | lg chip with optional checkbox, dot / flag / avatar, count and remove button. */
  function Tag(p) { return TagView(p, null); }
  var TagPublic = React.forwardRef(TagView);
  TagPublic.displayName = "Tag";


  var TAG_OWN = ["size", "label", "required", "hint", "error", "tooltip", "className", "style", "state", "id", "tags", "defaultTags",
    "onChange", "placement", "addOnBlur", "disabled", "placeholder"];

  /** TagInput — type and press Enter or comma to add tags; tags sit inside the box or below it. */
  var TagInput = React.forwardRef(function TagInput(props, ref) {
    var size = sizeSmMd(props.size);
    var id = useFieldId(props.id);
    var hintId = id + "-hint";
    var controlled = props.tags !== undefined;
    var st = React.useState(props.defaultTags || []);
    var draft = React.useState("");
    var inputEl = React.useRef(null);
    var tags = (controlled ? props.tags : st[0]) || [];
    var dis = !!props.disabled;
    var inside = props.placement !== "below";
    function setTags(t) { if (!controlled) st[1](t); if (props.onChange) props.onChange(t); }
    function add(v) { v = (v || "").trim(); draft[1](""); if (!v || tags.indexOf(v) >= 0) return; setTags(tags.concat(v)); }
    function remove(i) { var t = tags.slice(); t.splice(i, 1); setTags(t); }
    var chips = tags.map(function (t, i) {
      return h(Tag, { key: t, size: size, label: t, onRemove: dis ? null : function () { remove(i); } });
    });
    var setRef = function (el) { inputEl.current = el; if (typeof ref === "function") ref(el); else if (ref) ref.current = el; };
    var input = h("input", Object.assign(omit(props, TAG_OWN), {
      ref: setRef, id: id, className: "jsk-tags__el", value: draft[0], disabled: dis,
      placeholder: props.placeholder != null ? props.placeholder : "Add tag",
      "aria-invalid": !!props.error || undefined, "aria-describedby": hasMessage(props) ? hintId : undefined,
      onChange: function (e) { var v = e.target.value; if (v.indexOf(",") >= 0) add(v.replace(/,/g, "")); else draft[1](v); },
      onKeyDown: function (e) {
        if (e.key === "Enter") { e.preventDefault(); add(draft[0]); }
        else if (e.key === "Backspace" && !draft[0] && tags.length) remove(tags.length - 1);
      },
      onBlur: function () { if (props.addOnBlur !== false) add(draft[0]); }
    }));
    var showBelow = !inside && tags.length > 0;
    return h(Field, { size: size, label: props.label, required: props.required, tooltip: props.tooltip,
        hint: showBelow ? undefined : props.hint, error: showBelow && props.error !== true ? (props.error ? true : undefined) : props.error,
        disabled: dis, className: props.className, style: props.style, htmlFor: id, hintId: hintId },
      h(React.Fragment, null,
        h("div", { className: "jsk-input jsk-input__frame jsk-tags", "data-state": props.state || undefined,
            onClick: function () { if (inputEl.current) inputEl.current.focus(); } },
          h("div", { className: "jsk-tags__wrap" }, inside ? chips : null, input)),
        showBelow ? h("div", { className: "jsk-tags__below", role: "list", "aria-label": "Selected tags" }, chips) : null));
  });
  TagInput.displayName = "TagInput";


  /* ---------- ProgressBar ---------- */
  var PB_OWN = ["value", "max", "label", "format", "className", "style"];
  /** ProgressBar — 8px track. label: none | right | bottom | top | top-floating | bottom-floating. */
  var ProgressBar = React.forwardRef(function ProgressBar(props, ref) {
    var max = props.max > 0 ? props.max : 100;
    var v = Math.max(0, Math.min(max, Number(props.value) || 0));
    var pct = v / max * 100;
    var text = props.format ? props.format(v, max) : Math.round(pct) + "%";
    var label = props.label || "none";
    var floating = label === "top-floating" || label === "bottom-floating";
    var bar = h("div", { className: "jsk-progress__track" },
      h("div", { className: "jsk-progress__fill" }),
      floating ? h("div", { className: "jsk-progress__tip", "aria-hidden": "true" }, text) : null);
    var lbl = label !== "none" && !floating ? h("div", { className: "jsk-progress__label", "aria-hidden": "true" }, text) : null;
    return h("div", Object.assign(omit(props, PB_OWN), { ref: ref,
        className: "jsk-progress jsk-progress--" + label + (props.className ? " " + props.className : ""),
        style: Object.assign({ "--pb": pct + "%" }, props.style),
        role: "progressbar", "aria-valuemin": 0, "aria-valuemax": max, "aria-valuenow": v, "aria-valuetext": text }),
      label === "top" ? lbl : null, bar, label === "right" || label === "bottom" ? lbl : null);
  });
  ProgressBar.displayName = "ProgressBar";


  /* ---------- ProgressCircle ---------- */
  var PCIRC_SIZES = { xxs: [64, 6], xs: [160, 16], sm: [200, 20], md: [240, 24], lg: [280, 28] };
  var PC_OWN = ["value", "max", "size", "shape", "label", "format", "className", "style"];
  /** ProgressCircle — ring or half-ring gauge. size xxs 64 · xs 160 · sm 200 · md 240 · lg 280. */
  var ProgressCircle = React.forwardRef(function ProgressCircle(props, ref) {
    var size = PCIRC_SIZES[props.size] ? props.size : "sm";
    var d = PCIRC_SIZES[size][0], sw = PCIRC_SIZES[size][1];
    var half = props.shape === "half";
    var max = props.max > 0 ? props.max : 100;
    var v = Math.max(0, Math.min(max, Number(props.value) || 0));
    var frac = v / max;
    var text = props.format ? props.format(v, max) : Math.round(frac * 100) + "%";
    var r = (d - sw) / 2, c = d / 2;
    var H = half ? c + sw / 2 : d;
    var path = half
      ? "M " + (sw / 2) + " " + c + " A " + r + " " + r + " 0 0 1 " + (d - sw / 2) + " " + c
      : "M " + c + " " + (sw / 2) + " A " + r + " " + r + " 0 1 1 " + c + " " + (d - sw / 2) + " A " + r + " " + r + " 0 1 1 " + c + " " + (sw / 2);
    var common = { d: path, fill: "none", strokeWidth: sw, strokeLinecap: "round", pathLength: 100 };
    var svg = h("svg", { className: "jsk-pcircle__svg", width: d, height: H, viewBox: "0 0 " + d + " " + H, "aria-hidden": "true" },
      h("path", Object.assign({ className: "jsk-pcircle__track" }, common)),
      frac > 0 ? h("path", Object.assign({ className: "jsk-pcircle__bar", strokeDasharray: (frac * 100) + " 100" }, common)) : null);
    var tiny = size === "xxs";
    var label = props.label != null ? h("div", { className: "jsk-pcircle__label" }, props.label) : null;
    var inner = h("div", { className: "jsk-pcircle__text" }, tiny ? null : label, h("div", { className: "jsk-pcircle__value" }, text));
    return h("div", Object.assign(omit(props, PC_OWN), { ref: ref,
        className: "jsk-pcircle jsk-pcircle--" + size + (half ? " jsk-pcircle--half" : "") + (props.className ? " " + props.className : ""),
        style: props.style, role: "progressbar", "aria-valuemin": 0, "aria-valuemax": max, "aria-valuenow": v, "aria-valuetext": text,
        "aria-label": props["aria-label"] || (typeof props.label === "string" ? props.label : undefined) }),
      h("div", { className: "jsk-pcircle__box", style: { width: d, height: H } }, svg, inner),
      tiny ? label : null);
  });
  ProgressCircle.displayName = "ProgressCircle";


  /* ---------- Avatar ---------- */
  var AV_SIZES = { xs: 24, sm: 32, md: 40, lg: 48, xl: 56, "2xl": 64 };
  var AV_OWN = ["size", "src", "alt", "name", "initials", "status", "framed", "className", "style"];
  function avInitials(name) {
    var parts = String(name || "").trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return "";
    return ((parts[0][0] || "") + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase();
  }
  /** Avatar — photo, initials or a placeholder icon. size xs 24 … 2xl 64. Optional status dot and white frame. */
  var Avatar = React.forwardRef(function Avatar(props, ref) {
    var size = AV_SIZES[props.size] ? props.size : "md";
    var failed = React.useState(false);
    React.useEffect(function () { failed[1](false); }, [props.src]);
    var initials = props.initials || avInitials(props.name);
    var label = props.alt || props.name || undefined;
    var content;
    if (props.src && !failed[0]) content = h("img", { className: "jsk-avatar__img", src: props.src, alt: label || "", onError: function () { failed[1](true); } });
    else if (initials) content = h("span", { className: "jsk-avatar__initials", "aria-hidden": "true" }, initials);
    else content = h("svg", { className: "jsk-avatar__icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" },
      h("path", { d: "M20 21c0-2.8-3.6-5-8-5s-8 2.2-8 5" }), h("circle", { cx: 12, cy: 8, r: 4.5 }));
    var isImg = props.src && !failed[0];
    return h("span", Object.assign(omit(props, AV_OWN), { ref: ref,
        className: "jsk-avatar jsk-avatar--" + size + (props.framed ? " jsk-avatar--framed" : "") + (props.className ? " " + props.className : ""),
        style: props.style, role: isImg ? undefined : "img", "aria-label": isImg ? undefined : label }),
      h("span", { className: "jsk-avatar__face" + (isImg ? " is-img" : "") }, content),
      props.status ? h("span", { className: "jsk-avatar__status jsk-avatar__status--" + props.status, role: "status", "aria-label": props.status === "online" ? "Online" : "Offline" }) : null);
  });
  Avatar.displayName = "Avatar";


  /* ---------- AvatarGroup ---------- */
  var AG_OWN = ["size", "max", "avatars", "children", "className", "style", "moreLabel", "onAdd", "addLabel"];
  /** AvatarGroup — overlapping avatars with a "+N" counter. size xs | sm | md. */
  var AvatarGroup = React.forwardRef(function AvatarGroup(props, ref) {
    var size = props.size === "xs" || props.size === "md" ? props.size : "sm";
    var items = props.avatars ? props.avatars.map(function (a, i) { return h(Avatar, Object.assign({ key: a.key || i }, a)); })
      : React.Children.toArray(props.children);
    var max = props.max > 0 ? props.max : items.length;
    var shown = items.slice(0, max), rest = items.length - shown.length;
    var list = h("div", { className: "jsk-avgroup__list" },
      shown.map(function (el, i) { return React.cloneElement(el, { key: el.key != null ? el.key : i, size: size, status: undefined, framed: false }); }),
      rest > 0 ? h("span", { className: "jsk-avatar jsk-avatar--" + size + " jsk-avgroup__more", role: "img",
        "aria-label": props.moreLabel ? props.moreLabel(rest) : rest + " more" },
        h("span", { className: "jsk-avatar__face" }, h("span", { className: "jsk-avgroup__count", "aria-hidden": "true" }, "+" + rest))) : null);
    return h("div", Object.assign(omit(props, AG_OWN), { ref: ref, role: "group",
        className: "jsk-avgroup jsk-avgroup--" + size + (props.className ? " " + props.className : ""), style: props.style }),
      list,
      props.onAdd ? h("button", { type: "button", className: "jsk-avgroup__add", onClick: props.onAdd, "aria-label": props.addLabel || "Add person" },
        Ico("0 0 20 20", "M10 4.17v11.66M4.17 10h11.66", 1.67)) : null);
  });
  AvatarGroup.displayName = "AvatarGroup";


  /* ---------- AvatarLabelGroup ---------- */
  var ALG_OWN = ["size", "title", "subtitle", "src", "alt", "name", "initials", "status", "framed", "className", "style"];
  /** AvatarLabelGroup — avatar with a name and a supporting line. size xs | sm | md | lg | xl. */
  var AvatarLabelGroup = React.forwardRef(function AvatarLabelGroup(props, ref) {
    var size = { xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }[props.size] ? props.size : "md";
    var title = props.title != null ? props.title : props.name;
    return h("div", Object.assign(omit(props, ALG_OWN), { ref: ref,
        className: "jsk-avlabel jsk-avlabel--" + size + (props.className ? " " + props.className : ""), style: props.style }),
      h(Avatar, { size: size, src: props.src, alt: props.alt || (typeof title === "string" ? title : undefined), name: props.name || (typeof title === "string" ? title : undefined),
        initials: props.initials, status: props.status, framed: props.framed }),
      h("div", { className: "jsk-avlabel__text" },
        title != null ? h("div", { className: "jsk-avlabel__title" }, title) : null,
        props.subtitle != null ? h("div", { className: "jsk-avlabel__sub" }, props.subtitle) : null));
  });
  AvatarLabelGroup.displayName = "AvatarLabelGroup";


  /* ---------- AvatarProfilePhoto ---------- */
  var APP_OWN = ["size", "src", "alt", "name", "initials", "verified", "verifiedLabel", "className", "style"];
  /** AvatarProfilePhoto — large framed profile photo for profile headers. size sm 72 | md 96 | lg 160. Optional verified badge. */
  var AvatarProfilePhoto = React.forwardRef(function AvatarProfilePhoto(props, ref) {
    var size = props.size === "sm" || props.size === "lg" ? props.size : "md";
    var failed = React.useState(false);
    React.useEffect(function () { failed[1](false); }, [props.src]);
    var initials = props.initials || avInitials(props.name);
    var label = props.alt || props.name || undefined;
    var isImg = props.src && !failed[0];
    var content = isImg ? h("img", { className: "jsk-pphoto__img", src: props.src, alt: label || "", onError: function () { failed[1](true); } })
      : initials ? h("span", { className: "jsk-pphoto__initials", "aria-hidden": "true" }, initials)
      : h("svg", { className: "jsk-pphoto__icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" },
          h("path", { d: "M20 21c0-2.8-3.6-5-8-5s-8 2.2-8 5" }), h("circle", { cx: 12, cy: 8, r: 4.5 }));
    return h("div", Object.assign(omit(props, APP_OWN), { ref: ref,
        className: "jsk-pphoto jsk-pphoto--" + size + (isImg ? " is-img" : "") + (props.className ? " " + props.className : ""),
        style: props.style, role: isImg ? undefined : "img", "aria-label": isImg ? undefined : label }),
      h("div", { className: "jsk-pphoto__face" }, content),
      props.verified ? h("span", { className: "jsk-pphoto__verified", role: "img", "aria-label": props.verifiedLabel || "Verified" },
        h("svg", { viewBox: "0 0 24 24", "aria-hidden": "true" },
          h("path", { fill: "currentColor", d: "M12 1.5l2.6 1.9 3.2-.2 1 3.1 2.7 1.8-1 3.1 1 3.1-2.7 1.8-1 3.1-3.2-.2L12 22.5l-2.6-1.9-3.2.2-1-3.1-2.7-1.8 1-3.1-1-3.1 2.7-1.8 1-3.1 3.2.2z" }),
          h("path", { d: "M8.2 12.2l2.5 2.5 5-5", fill: "none", stroke: "#fff", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }))) : null);
  });
  AvatarProfilePhoto.displayName = "AvatarProfilePhoto";


  /* ---------- ButtonGroup ---------- */
  var BG_OWN = ["items", "size", "orientation", "type", "value", "defaultValue", "onChange", "className", "style"];
  /** ButtonGroup — joined buttons, horizontal or vertical. type default | radio. Pass value/onChange to make it a single-select. */
  var ButtonGroup = React.forwardRef(function ButtonGroup(props, ref) {
    var size = props.size === "sm" ? "sm" : "md";
    var vertical = props.orientation === "vertical";
    var radio = props.type === "radio";
    var controlled = props.value !== undefined;
    var st = React.useState(props.defaultValue);
    var cur = controlled ? props.value : st[0];
    var selectable = controlled || props.defaultValue !== undefined || !!props.onChange;
    var items = props.items || [];
    var btns = items.map(function (it, i) {
      var v = it.value != null ? it.value : i;
      var on = selectable && cur === v;
      var only = !it.label && it.icon;
      var a11y = selectable ? (radio ? { role: "radio", "aria-checked": on } : { "aria-pressed": on }) : {};
      return h("button", Object.assign({ key: v, type: "button", disabled: it.disabled,
          className: "jsk-btngroup__item" + (only ? " is-icon" : "") + (it.icon && !only ? " has-icon" : "") + (radio ? " has-radio" : "") + (on ? " is-current" : ""),
          "aria-label": only ? it["aria-label"] || it.title : undefined, title: it.title,
          "data-state": it.state || undefined,
          onClick: function (e) {
            if (it.onClick) it.onClick(e);
            if (selectable) { if (!controlled) st[1](v); if (props.onChange) props.onChange(v); }
          } }, a11y),
        radio ? h("span", { className: "jsk-btngroup__radio", "aria-hidden": "true" }, h("span", { className: "jsk-btngroup__dot" })) : null,
        it.icon ? h("span", { className: "jsk-btngroup__icon", "aria-hidden": "true" }, it.icon) : null,
        it.label ? h("span", { className: "jsk-btngroup__label" }, it.label) : null);
    });
    return h("div", Object.assign(omit(props, BG_OWN), { ref: ref, role: selectable && radio ? "radiogroup" : "group",
        className: "jsk-btngroup jsk-btngroup--" + size + (vertical ? " jsk-btngroup--vertical" : "") + (props.className ? " " + props.className : ""),
        style: props.style, "aria-orientation": vertical ? "vertical" : undefined }), btns);
  });
  ButtonGroup.displayName = "ButtonGroup";


  /* ---------- Dropdown ---------- */
  var DD_CHECK = "M13.33 4 6 11.33 2.67 8";
  var DD_RIGHT = "M6 12l4-4-4-4";

  function ddItems(menuEl) { return menuEl ? Array.prototype.slice.call(menuEl.querySelectorAll(":scope > .jsk-dd__list > .jsk-dd__row > .jsk-dd__item:not([aria-disabled='true'])")) : []; }
  function ddKeys(e, close) {
    var menu = e.currentTarget, items = ddItems(menu), i = items.indexOf(document.activeElement);
    if (["ArrowDown", "ArrowUp", "Home", "End", "Escape"].indexOf(e.key) >= 0) e.stopPropagation();
    if (e.key === "ArrowDown") { e.preventDefault(); (items[(i + 1) % items.length] || items[0]).focus(); }
    else if (e.key === "ArrowUp") { e.preventDefault(); (items[(i - 1 + items.length) % items.length] || items[0]).focus(); }
    else if (e.key === "Home") { e.preventDefault(); if (items[0]) items[0].focus(); }
    else if (e.key === "End") { e.preventDefault(); if (items.length) items[items.length - 1].focus(); }
    else if (e.key === "Escape" && close) { e.preventDefault(); e.stopPropagation(); close(true); }
  }

  function DdRow(p) {
    var it = p.item, close = p.close;
    var sub = React.useState(false);
    var rowRef = React.useRef(null), subRef = React.useRef(null);
    if (it.type === "divider") return h("div", { className: "jsk-dd__divider", role: "separator" });
    if (it.type === "heading") return h("div", { className: "jsk-dd__heading", role: "presentation" }, it.label);
    var hasSub = !!(it.items && it.items.length);
    var role = it.toggle !== undefined || it.checkbox !== undefined ? "menuitemcheckbox" : it.radio !== undefined ? "menuitemradio" : "menuitem";
    var checkedState = it.toggle !== undefined ? it.toggle : it.checkbox !== undefined ? it.checkbox : it.radio !== undefined ? it.radio : it.checked;
    var lead = null;
    if (it.checkbox !== undefined) lead = h("span", { className: "jsk-dd__box" + (it.checkbox === "indeterminate" ? " is-mixed" : it.checkbox ? " is-on" : "") },
      it.checkbox === "indeterminate" ? Ico("0 0 12 12", "M2.5 6h7", 1.67) : it.checkbox ? Ico("0 0 12 12", "M10 3 4.5 8.5 2 6", 1.67) : null);
    else if (it.radio !== undefined && it.radioLeading) lead = h("span", { className: "jsk-dd__radio jsk-dd__radio--lead" + (it.radio ? " is-on" : "") }, h("span", null));
    else if (it.checked !== undefined) lead = it.checked ? h("span", { className: "jsk-dd__lead jsk-dd__check" }, Ico("0 0 16 16", DD_CHECK, 1.5)) : h("span", { className: "jsk-dd__lead" });
    else if (it.avatar) lead = h("span", { className: "jsk-dd__lead jsk-dd__avatar" }, h(Avatar, { size: "xs", src: it.avatar, alt: "", name: typeof it.label === "string" ? it.label : undefined }));
    else if (it.dot) lead = h("span", { className: "jsk-dd__lead" }, h("span", { className: "jsk-dd__dot", style: it.dot === true ? null : { background: it.dot } }));
    else if (it.icon) lead = h("span", { className: "jsk-dd__lead jsk-dd__icon" }, it.icon);
    else if (p.inset) lead = h("span", { className: "jsk-dd__lead" });
    var trail = [];
    if (it.shortcut) trail.push(h("kbd", { key: "k", className: "jsk-dd__kbd" }, it.shortcut));
    if (it.toggle !== undefined) trail.push(h("span", { key: "t", className: "jsk-dd__toggle" + (it.toggle ? " is-on" : "") }, h("span", { className: "jsk-dd__knob" })));
    if (it.radio !== undefined && !it.radioLeading) trail.push(h("span", { key: "r", className: "jsk-dd__radio" + (it.radio ? " is-on" : "") }, h("span", null)));
    if (it.trailingCheckbox !== undefined) trail.push(h("span", { key: "c", className: "jsk-dd__box" + (it.trailingCheckbox ? " is-on" : "") }, it.trailingCheckbox ? Ico("0 0 12 12", "M10 3 4.5 8.5 2 6", 1.67) : null));
    if (hasSub) trail.push(h("span", { key: "s", className: "jsk-dd__chev" }, Ico("0 0 16 16", DD_RIGHT, 1.5)));
    var rich = !!it.description;
    function activate(e) {
      if (it.disabled) return;
      if (hasSub) { sub[1](true); setTimeout(function () { var f = ddItems(subRef.current)[0]; if (f) f.focus(); }, 0); return; }
      if (it.onSelect) it.onSelect(e);
      if (role === "menuitem" ? it.closeOnSelect !== false : it.closeOnSelect === true) close(true);
    }
    return h("div", { ref: rowRef, className: "jsk-dd__row" + (rich ? " is-rich" : ""), role: "none",
        onMouseEnter: hasSub ? function () { sub[1](true); } : undefined, onMouseLeave: hasSub ? function () { sub[1](false); } : undefined },
      h("div", { className: "jsk-dd__item" + (it.destructive ? " is-danger" : "") + (sub[0] ? " is-open" : "") + (it.state ? " is-" + it.state : ""),
          role: role, tabIndex: -1, "aria-disabled": it.disabled || undefined, "aria-haspopup": hasSub ? "menu" : undefined, "aria-expanded": hasSub ? sub[0] : undefined,
          "aria-checked": role !== "menuitem" ? (checkedState === "indeterminate" ? "mixed" : !!checkedState) : undefined,
          onClick: activate,
          onKeyDown: function (e) {
            if (e.key === "Enter" || e.key === " ") { e.preventDefault(); activate(e); }
            else if (e.key === "ArrowRight" && hasSub) { e.preventDefault(); activate(e); }
          } },
        rich ? (it.media || lead) : lead,
        rich ? h("span", { className: "jsk-dd__text" }, h("span", { className: "jsk-dd__label" }, it.label), h("span", { className: "jsk-dd__desc" }, it.description))
          : h("span", { className: "jsk-dd__label" }, it.label),
        trail),
      hasSub && sub[0] ? h(DropdownMenu, { ref: subRef, items: it.items, width: it.submenuWidth || 200, className: "jsk-dd__sub",
        onClose: function (all) { if (all === true) close(true); else { sub[1](false); var b = rowRef.current && rowRef.current.querySelector(".jsk-dd__item"); if (b) b.focus(); } },
        onKeyDownCapture: function (e) { if (e.key === "ArrowLeft") { e.preventDefault(); e.stopPropagation(); sub[1](false); var b = rowRef.current.querySelector(".jsk-dd__item"); if (b) b.focus(); } } }) : null);
  }

  var DM_OWN = ["items", "header", "footer", "width", "onClose", "className", "style", "label"];
  /** DropdownMenu — the menu panel on its own (items, optional header and footer). */
  var DropdownMenu = React.forwardRef(function DropdownMenu(props, ref) {
    var items = props.items || [];
    var inset = items.some(function (it) { return it.checked !== undefined || it.icon || it.dot || it.avatar; }) && items.some(function (it) { return it.checked !== undefined; });
    var close = props.onClose || function () {};
    return h("div", Object.assign(omit(props, DM_OWN), { ref: ref, role: "menu", "aria-label": props.label,
        className: "jsk-dd" + (props.className ? " " + props.className : ""), style: Object.assign({ width: props.width || 240 }, props.style),
        onKeyDown: function (e) { ddKeys(e, close); } }),
      props.header ? h("div", { className: "jsk-dd__header" }, props.header) : null,
      h("div", { className: "jsk-dd__list" }, items.map(function (it, i) { return h(DdRow, { key: it.key || i, item: it, close: close, inset: inset }); })),
      props.footer ? h("div", { className: "jsk-dd__footer" }, props.footer) : null);
  });
  DropdownMenu.displayName = "DropdownMenu";

  /** DropdownHeader — title + supporting line for the top of a menu. */
  function DropdownHeader(p) {
    return h("div", { className: "jsk-dd__htext" }, h("div", { className: "jsk-dd__htitle" }, p.title), p.subtitle != null ? h("div", { className: "jsk-dd__hsub" }, p.subtitle) : null);
  }

  var DDW_OWN = ["trigger", "items", "header", "footer", "width", "align", "open", "defaultOpen", "onOpenChange", "className", "style", "label"];
  /** Dropdown — a trigger that opens a DropdownMenu below it. Click outside or Escape closes. */
  var Dropdown = React.forwardRef(function Dropdown(props, ref) {
    var controlled = props.open !== undefined;
    var st = React.useState(!!props.defaultOpen);
    var open = controlled ? props.open : st[0];
    var wrap = React.useRef(null), menu = React.useRef(null);
    var menuId = useFieldId();
    function set(v, refocus) {
      if (!controlled) st[1](v);
      if (props.onOpenChange) props.onOpenChange(v);
      if (!v && refocus && wrap.current) { var t = wrap.current.querySelector("[aria-haspopup]"); if (t) t.focus(); }
    }
    React.useEffect(function () {
      if (!open) return;
      function onDoc(e) { if (wrap.current && !wrap.current.contains(e.target)) set(false); }
      document.addEventListener("mousedown", onDoc);
      return function () { document.removeEventListener("mousedown", onDoc); };
    }, [open]);
    var trig = props.trigger;
    var trigger = React.isValidElement(trig) ? React.cloneElement(trig, {
      "aria-haspopup": "menu", "aria-expanded": open, "aria-controls": open ? menuId : undefined,
      onClick: function (e) { if (trig.props.onClick) trig.props.onClick(e); set(!open); if (!open) setTimeout(function () { var f = ddItems(menu.current)[0]; if (f && e.detail === 0) f.focus(); }, 0); },
      onKeyDown: function (e) { if (trig.props.onKeyDown) trig.props.onKeyDown(e); if (e.key === "ArrowDown") { e.preventDefault(); set(true); setTimeout(function () { var f = ddItems(menu.current)[0]; if (f) f.focus(); }, 0); } }
    }) : trig;
    return h("div", Object.assign(omit(props, DDW_OWN), { ref: function (el) { wrap.current = el; if (typeof ref === "function") ref(el); else if (ref) ref.current = el; },
        className: "jsk-ddw" + (props.align === "end" ? " jsk-ddw--end" : "") + (props.className ? " " + props.className : ""), style: props.style }),
      trigger,
      open ? h(DropdownMenu, { ref: menu, id: menuId, items: props.items, header: props.header, footer: props.footer, width: props.width, label: props.label,
        className: "jsk-ddw__menu", onClose: function (refocus) { set(false, refocus); } }) : null);
  });
  Dropdown.displayName = "Dropdown";

  var DAT_OWN = ["src", "alt", "name", "subtitle", "status", "size", "className"];
  /** DropdownAccountTrigger — sidebar account card (avatar + name [+ email] + chevron) that opens a Dropdown. */
  var DropdownAccountTrigger = React.forwardRef(function DropdownAccountTrigger(props, ref) {
    var big = !!props.subtitle;
    return h("button", Object.assign(omit(props, DAT_OWN), { ref: ref, type: "button",
        className: "jsk-ddacct" + (big ? " jsk-ddacct--lg" : "") + (props.className ? " " + props.className : "") }),
      big || props.size ? h(AvatarLabelGroup, { size: big ? "md" : props.size, src: props.src, alt: props.alt, name: props.name, subtitle: props.subtitle, status: props.status, framed: props.size === "sm" })
        : h("span", { className: "jsk-ddacct__row" }, h(Avatar, { size: "xs", src: props.src, alt: "", name: props.name }), h("span", { className: "jsk-ddacct__name" }, props.name)),
      h("span", { className: "jsk-ddacct__chev" }, Ico("0 0 16 16", big ? "M5.33 10 8 12.67 10.67 10M5.33 6 8 3.33 10.67 6" : "M4 6l4 4 4-4", 1.5)));
  });
  DropdownAccountTrigger.displayName = "DropdownAccountTrigger";

  /* ---------- Select ---------- */
  var SEL_SEARCH = "M17.5 17.5l-3.62-3.62m1.95-4.71a6.67 6.67 0 1 1-13.33 0 6.67 6.67 0 0 1 13.33 0Z";
  var SEL_OWN = ["size", "label", "required", "hint", "error", "tooltip", "className", "style", "state", "id", "name", "options", "value",
    "defaultValue", "onChange", "placeholder", "disabled", "iconLeading", "searchable", "multiple", "shortcut", "footer", "emptyState",
    "menuHeight", "open", "defaultOpen", "onOpenChange", "onSearch", "label", "checkboxes", "display", "summary", "maxTags", "removable",
    "overflowLabel", "menuSearch", "searchPlaceholder", "actions", "resetLabel", "selectAllLabel"];

  function selKind(opts) {
    for (var i = 0; i < opts.length; i++) {
      var o = opts[i];
      if (o.avatar !== undefined) return "avatar";
      if (o.media) return "media";
      if (o.dot) return "dot";
      if (o.icon) return "icon";
    }
    return null;
  }
  function selLead(o, cls) {
    if (!o) return null;
    if (o.avatar !== undefined) return h("span", { className: cls + " jsk-sel__av" }, h(Avatar, { size: "xs", src: o.avatar || undefined, alt: "", name: o.avatar ? undefined : o.initialsFrom }));
    if (o.media) return h("span", { className: cls + " jsk-sel__media" }, o.media);
    if (o.dot) return h("span", { className: cls + " jsk-sel__dotbox" }, h("span", { className: "jsk-sel__dot", style: o.dot === true ? null : { background: o.dot } }));
    if (o.icon) return h("span", { className: cls + " jsk-sel__icon" }, o.icon);
    return null;
  }
  function selText(o, cls) {
    return h("span", { className: cls },
      h("span", { className: "jsk-sel__label" }, o.label),
      o.supportingText != null ? h("span", { className: "jsk-sel__sub" }, o.supportingText) : null);
  }
  function selMatch(o, q) {
    q = q.toLowerCase();
    return String(o.label).toLowerCase().indexOf(q) >= 0 || (o.supportingText != null && String(o.supportingText).toLowerCase().indexOf(q) >= 0);
  }

  /**
   * Select — a field that opens a list of options. size sm | md | lg. Leading avatar, icon, dot or media per option;
   * searchable (type to filter, optional ⌘K shortcut hint); multiple (selected options become tags).
   */
  var Select = React.forwardRef(function Select(props, ref) {
    var size = fieldSize(props.size);
    var id = useFieldId(props.id);
    var hintId = id + "-hint", listId = id + "-list", labelId = id + "-label";
    var options = props.options || [];
    var cbx = !!props.checkboxes;
    var multiple = !!props.multiple || cbx;
    var searchable = cbx ? false : (!!props.searchable || multiple);
    var menuSearch = cbx && props.menuSearch !== false;
    var display = props.display || (cbx ? "summary" : "tags");
    var dis = !!props.disabled;
    var err = !!props.error;

    var vCtl = props.value !== undefined;
    var vSt = React.useState(props.defaultValue !== undefined ? props.defaultValue : (multiple ? [] : null));
    var value = vCtl ? props.value : vSt[0];
    var vals = multiple ? (value || []) : [];
    var oCtl = props.open !== undefined;
    var oSt = React.useState(!!props.defaultOpen);
    var open = !dis && (oCtl ? props.open : oSt[0]);
    var qSt = React.useState(""), query = qSt[0];
    var aSt = React.useState(-1), active = aSt[0];
    var wrap = React.useRef(null), ctrl = React.useRef(null), list = React.useRef(null), msearch = React.useRef(null);

    var shown = (searchable || menuSearch) && query ? options.filter(function (o) { return selMatch(o, query); }) : options;
    var isSel = function (o) { return multiple ? vals.indexOf(o.value) >= 0 : value != null && o.value === value; };
    var selected = multiple ? options.filter(isSel) : options.filter(isSel)[0];
    var kind = selKind(options);

    function setOpen(v) { if (dis) return; if (!oCtl) oSt[1](v); if (props.onOpenChange) props.onOpenChange(v); if (!v) { qSt[1](""); aSt[1](-1); } }
    function setValue(v, o) { if (!vCtl) vSt[1](v); if (props.onChange) props.onChange(v, o); }
    function choose(o) {
      if (!o || o.disabled) return;
      if (multiple) {
        var nv = isSel(o) ? vals.filter(function (x) { return x !== o.value; }) : vals.concat([o.value]);
        setValue(nv, o); qSt[1]("");
      } else { setValue(o.value, o); setOpen(false); }
      var f = cbx && msearch.current ? msearch.current : ctrl.current;
      if (f) f.focus();
    }
    function refocus() { var f = msearch.current || ctrl.current; if (f) f.focus({ preventScroll: true }); }
    function resetAll() { setValue([]); refocus(); }
    function selectAll() {
      var add = shown.filter(function (o) { return !o.disabled && vals.indexOf(o.value) < 0; }).map(function (o) { return o.value; });
      if (add.length) setValue(vals.concat(add)); refocus();
    }
    function firstEnabled(from, dir) {
      if (!shown.length) return -1;
      for (var n = 0, i = from; n < shown.length; n++, i = (i + dir + shown.length) % shown.length) if (!shown[i].disabled) return i;
      return -1;
    }
    function openAt(i) {
      setOpen(true);
      var s = shown.findIndex ? shown.findIndex(isSel) : -1;
      aSt[1](i != null ? i : (s >= 0 ? s : firstEnabled(0, 1)));
    }
    React.useEffect(function () {
      if (!open) return;
      function onDoc(e) { if (wrap.current && !wrap.current.contains(e.target)) setOpen(false); }
      document.addEventListener("mousedown", onDoc);
      return function () { document.removeEventListener("mousedown", onDoc); };
    }, [open]);
    var mounted = React.useRef(false);
    React.useEffect(function () { if (mounted.current && open && menuSearch && msearch.current) msearch.current.focus({ preventScroll: true }); mounted.current = true; }, [open]);
    React.useEffect(function () {
      if (!open || active < 0 || !list.current) return;
      var el = list.current.querySelector("#" + CSS.escape(id + "-opt-" + active));
      if (el && el.scrollIntoView) el.scrollIntoView({ block: "nearest" });
    }, [active, open]);

    var typed = React.useRef({ s: "", t: 0 });
    function onKey(e) {
      if (dis) return;
      var k = e.key;
      if (k === "ArrowDown" || k === "ArrowUp") {
        e.preventDefault();
        if (!open) { openAt(k === "ArrowUp" ? firstEnabled(shown.length - 1, -1) : null); return; }
        var d = k === "ArrowDown" ? 1 : -1;
        aSt[1](firstEnabled(active < 0 ? (d > 0 ? 0 : shown.length - 1) : (active + d + shown.length) % shown.length, d));
      } else if (k === "Home" && open) { e.preventDefault(); aSt[1](firstEnabled(0, 1)); }
      else if (k === "End" && open) { e.preventDefault(); aSt[1](firstEnabled(shown.length - 1, -1)); }
      else if (k === "Enter" || (k === " " && !searchable)) {
        e.preventDefault();
        if (open && active >= 0) choose(shown[active]); else if (!open) openAt();
      } else if (k === " " && cbx && e.target !== msearch.current) { e.preventDefault(); if (open && active >= 0) choose(shown[active]); else if (!open) openAt(); }
      else if (k === "Escape") { if (open) { e.preventDefault(); e.stopPropagation(); setOpen(false); if (cbx && ctrl.current) ctrl.current.focus(); } }
      else if (k === "Tab") { if (open) setOpen(false); }
      else if (k === "Backspace" && multiple && !cbx && !query && vals.length) { setValue(vals.slice(0, -1)); }
      else if (!searchable && e.target !== msearch.current && k.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
        var now = Date.now(), t = typed.current;
        t.s = (now - t.t > 600 ? "" : t.s) + k.toLowerCase(); t.t = now;
        var hit = shown.findIndex(function (o) { return !o.disabled && String(o.label).toLowerCase().indexOf(t.s) === 0; });
        if (hit >= 0) { if (!open) openAt(hit); else aSt[1](hit); }
      }
    }

    var icoSz = size === "sm" ? 16 : 20;
    var chev = Ico(size === "lg" ? "0 0 20 20" : "0 0 16 16", size === "lg" ? "M5 7.5l5 5 5-5" : P.down, size === "lg" ? 1.67 : 1.5, "jsk-sel__chev");
    var errIco = err ? h("span", { className: "jsk-input__err" }, Ico("0 0 16 16", P.alert, 1.33)) : null;
    var kbd = props.shortcut ? h("kbd", { className: "jsk-sel__kbd" }, props.shortcut) : null;
    var activeId = open && active >= 0 ? id + "-opt-" + active : undefined;
    var aria = { role: "combobox", "aria-haspopup": "listbox", "aria-expanded": open, "aria-controls": open ? listId : undefined,
      "aria-activedescendant": activeId, "aria-invalid": err || undefined, "aria-required": props.required || undefined,
      "aria-describedby": hasMessage(props) ? hintId : undefined };

    var lead;
    if (cbx) lead = props.iconLeading ? h("span", { className: "jsk-sel__lead jsk-sel__icon" }, props.iconLeading) : null;
    else if (searchable) lead = h("span", { className: "jsk-sel__lead jsk-sel__icon" }, props.iconLeading || Ico("0 0 20 20", SEL_SEARCH, 1.67));
    else if (selected && (selected.avatar !== undefined || selected.media || selected.dot || selected.icon)) lead = selLead(selected, "jsk-sel__lead");
    else if (props.iconLeading) lead = h("span", { className: "jsk-sel__lead jsk-sel__icon" }, props.iconLeading);
    else if (kind === "avatar") lead = selLead({ avatar: null }, "jsk-sel__lead");
    else if (kind === "dot") lead = selLead({ dot: true }, "jsk-sel__lead");

    function tagsFor(removable) {
      var max = props.maxTags != null ? props.maxTags : (cbx ? 2 : Infinity);
      var sel = vals.map(function (v) { return options.filter(function (x) { return x.value === v; })[0]; }).filter(Boolean);
      var out = sel.slice(0, max).map(function (o) {
        return h(Tag, { key: String(o.value), size: size === "sm" ? "sm" : "md", label: o.tagLabel || o.label,
          avatar: o.avatar !== undefined ? h(Avatar, { size: "xs", src: o.avatar || undefined, alt: "" }) : null,
          onRemove: removable && !dis ? function () { choose(o); } : null });
      });
      var more = sel.length - out.length;
      if (more > 0) out.push(h(Tag, { key: "__more", size: size === "sm" ? "sm" : "md",
        label: props.overflowLabel ? props.overflowLabel(more, sel) : "+" + more }));
      return out;
    }

    var body;
    if (cbx) {
      var sel0 = options.filter(isSel);
      if (!sel0.length) body = h("span", { className: "jsk-sel__ph" }, props.placeholder || "Select");
      else if (display === "tags") body = h("span", { className: "jsk-sel__field jsk-sel__tags" }, tagsFor(!!props.removable));
      else {
        var sm = props.summary ? props.summary(sel0) : null;
        if (sm == null || typeof sm !== "object" || React.isValidElement(sm)) sm = { label: sm != null ? sm : sel0.length + " selected" };
        body = selText(sm, "jsk-sel__value");
      }
    } else if (searchable) {
      var showValue = !multiple && selected && !query;
      var ph = multiple ? (vals.length ? "" : props.placeholder) : (showValue ? "" : props.placeholder);
      body = h("span", { className: "jsk-sel__field" },
        multiple ? tagsFor(true) : null,
        showValue ? selText(selected, "jsk-sel__value") : null,
        h("input", Object.assign({ ref: function (el) { ctrl.current = el; if (typeof ref === "function") ref(el); else if (ref) ref.current = el; },
          id: id, className: "jsk-sel__input", type: "text", autoComplete: "off", value: query, placeholder: ph || undefined, disabled: dis,
          "aria-autocomplete": "list", "aria-labelledby": props.label != null ? labelId : undefined, "aria-label": props.label == null ? props["aria-label"] : undefined,
          onChange: function (e) { qSt[1](e.target.value); if (props.onSearch) props.onSearch(e.target.value); setOpen(true); aSt[1](e.target.value ? 0 : -1); },
          onKeyDown: onKey }, aria)));
    } else {
      body = selected ? selText(selected, "jsk-sel__value") : h("span", { className: "jsk-sel__ph" }, props.placeholder || "Select");
    }

    var setCtl = function (el) { ctrl.current = el; if (typeof ref === "function") ref(el); else if (ref) ref.current = el; };
    var control = cbx
      ? h("div", Object.assign({ ref: setCtl, id: id, tabIndex: dis ? -1 : 0, className: "jsk-input__control jsk-sel__control jsk-sel__btn" + (display === "tags" && vals.length ? " has-tags" : ""),
          "aria-disabled": dis || undefined, "aria-labelledby": props.label != null ? labelId + " " + id : undefined, "aria-label": props.label == null ? props["aria-label"] : undefined,
          onMouseDown: function (e) { if (dis || (e.target.closest && e.target.closest(".jsk-tag__x"))) return; e.preventDefault(); if (ctrl.current) ctrl.current.focus(); if (open) setOpen(false); else openAt(-1); },
          onKeyDown: onKey }, aria, menuSearch ? { "aria-activedescendant": undefined } : null),
          lead, body, errIco, kbd, chev)
      : searchable
      ? h("div", { className: "jsk-input__control jsk-sel__control" + (multiple && vals.length ? " has-tags" : ""),
          onMouseDown: function (e) { if (dis || e.target === ctrl.current || (e.target.closest && e.target.closest(".jsk-tag__x"))) return; e.preventDefault(); if (ctrl.current) ctrl.current.focus(); if (!open) openAt(); },
          onClick: function (e) { if (!dis && e.target === ctrl.current && !open) openAt(); } },
          lead, body, errIco, kbd)
      : h("button", Object.assign({ ref: function (el) { ctrl.current = el; if (typeof ref === "function") ref(el); else if (ref) ref.current = el; },
          id: id, type: "button", className: "jsk-input__control jsk-sel__control jsk-sel__btn", disabled: dis,
          "aria-labelledby": props.label != null ? labelId + " " + id : undefined, "aria-label": props.label == null ? props["aria-label"] : undefined,
          onClick: function () { if (open) setOpen(false); else openAt(); }, onKeyDown: onKey }, aria),
          lead, body, errIco, kbd, chev);

    var menuH = props.menuHeight || (cbx ? (size === "lg" ? 368 : size === "sm" ? 272 : 304) : (size === "lg" ? 320 : 224));
    var es = props.emptyState || {};
    var cbHead = cbx ? [
      menuSearch ? h("div", { key: "s", className: "jsk-sel__msearch" },
        h("span", { className: "jsk-sel__icon" }, Ico("0 0 20 20", SEL_SEARCH, 1.67)),
        h("input", Object.assign({ ref: msearch, className: "jsk-sel__minput", type: "text", autoComplete: "off", value: query,
          placeholder: props.searchPlaceholder || "Search", "aria-label": props.searchPlaceholder || "Search", "aria-autocomplete": "list",
          onChange: function (e) { qSt[1](e.target.value); if (props.onSearch) props.onSearch(e.target.value); aSt[1](e.target.value ? 0 : -1); },
          onKeyDown: onKey }, { role: "combobox", "aria-expanded": true, "aria-controls": listId, "aria-activedescendant": activeId }))) : null,
      props.actions !== false ? h("div", { key: "a", className: "jsk-sel__actions" },
        h(Button, { hierarchy: "secondary", size: size === "sm" ? "xs" : "sm", disabled: !vals.length, onClick: resetAll }, props.resetLabel || "Reset"),
        h(Button, { hierarchy: "secondary", size: size === "sm" ? "xs" : "sm",
          disabled: !shown.some(function (o) { return !o.disabled && vals.indexOf(o.value) < 0; }), onClick: selectAll }, props.selectAllLabel || "Select all")) : null
    ] : null;
    var menu = open ? h("div", { className: "jsk-dd jsk-sel__menu" + (cbx ? " jsk-sel__menu--cb" : ""),
        onKeyDown: cbx ? function (e) { if (e.key === "Escape" && e.target !== msearch.current) { e.preventDefault(); e.stopPropagation(); setOpen(false); if (ctrl.current) ctrl.current.focus(); } } : undefined },
      cbHead,
      shown.length ? h("ul", { ref: list, id: listId, role: "listbox", className: "jsk-sel__list", style: { maxHeight: menuH },
          "aria-multiselectable": multiple || undefined, "aria-labelledby": props.label != null ? labelId : undefined },
        shown.map(function (o, i) {
          var on = isSel(o);
          return h("li", { key: o.key || String(o.value), className: "jsk-sel__row", role: "presentation" },
            h("div", { id: id + "-opt-" + i, role: "option", "aria-selected": on, "aria-disabled": o.disabled || undefined,
                className: "jsk-sel__opt" + (on ? " is-selected" : "") + (i === active ? " is-active" : ""),
                onMouseDown: function (e) { e.preventDefault(); }, onMouseMove: function () { if (active !== i && !o.disabled) aSt[1](i); },
                onClick: function () { choose(o); } },
              cbx ? h("span", { className: "jsk-sel__cb", "aria-hidden": "true" },
                h(Checkbox, { size: size === "lg" ? "md" : "sm", checked: on, disabled: !!o.disabled, readOnly: true, tabIndex: -1, onChange: function () {} })) : null,
              selLead(o, "jsk-sel__lead"),
              selText(o, "jsk-sel__value"),
              on && !cbx ? h("span", { className: "jsk-sel__check" }, Ico(size === "lg" ? "0 0 20 20" : "0 0 16 16", size === "lg" ? "M16.67 5 7.5 14.17 3.33 10" : "M13.33 4 6 11.33 2.67 8", size === "lg" ? 1.67 : 1.5)) : null));
        }))
        : h("div", { id: listId, role: "listbox", className: "jsk-sel__empty", style: cbx ? null : { height: menuH }, "aria-labelledby": props.label != null ? labelId : undefined },
          h("span", { className: "jsk-sel__eicon" }, Ico("0 0 16 16", "M14 14l-2.33-2.33m1.66-4a5.33 5.33 0 1 1-10.66 0 5.33 5.33 0 0 1 10.66 0Z", 1.33)),
          h("span", { className: "jsk-sel__etext" },
            h("span", { className: "jsk-sel__etitle" }, es.title || "No results found"),
            h("span", { className: "jsk-sel__edesc" }, es.description || "Try a different search term.")),
          es.action || null),
      props.footer ? h("div", { className: "jsk-sel__footer" }, props.footer) : null) : null;

    var hidden = props.name ? (multiple ? vals.map(function (v) { return h("input", { key: String(v), type: "hidden", name: props.name, value: v }); })
      : h("input", { type: "hidden", name: props.name, value: value == null ? "" : value })) : null;

    return h(Field, { size: size, label: props.label, required: props.required, hint: props.hint, error: props.error, tooltip: props.tooltip,
        disabled: dis, className: "jsk-sel" + (props.className ? " " + props.className : ""), style: props.style, htmlFor: id, labelId: labelId, hintId: hintId },
      h("div", { ref: wrap, className: "jsk-sel__wrap" },
        h("div", { className: "jsk-input jsk-input__frame jsk-sel__box" + (open ? " is-open" : "") + (kind ? " jsk-sel--" + kind : ""),
            "data-state": props.state || undefined }, control),
        menu),
      hidden);
  });
  Select.displayName = "Select";


  /* ---------- ChoiceCard ---------- */
  var CC_VARIANTS = ["default", "icon", "avatar", "payment", "pricing"];
  var CC_OWN = ["type", "size", "variant", "title", "supportingText", "description", "icon", "avatar", "avatarAlt", "media",
    "actions", "price", "period", "badge", "checked", "defaultChecked", "onChange", "disabled", "name", "value", "id",
    "state", "className", "style", "inputRef"];
  var ChoiceCardCtx = React.createContext(null);
  /**
   * ChoiceCard — selectable card with a checkbox or radio.
   * variant: default (leading control) | icon | avatar | payment | pricing. size sm | md.
   */
  var ChoiceCard = React.forwardRef(function ChoiceCard(props, ref) {
    var g = React.useContext(ChoiceCardCtx);
    var type = (props.type || (g && g.type)) === "radio" ? "radio" : "checkbox";
    var size = (props.size || (g && g.size)) === "md" ? "md" : "sm";
    var variant = CC_VARIANTS.indexOf(props.variant) >= 0 ? props.variant : "default";
    var disabled = !!(props.disabled || (g && g.disabled));
    var uid = useFieldId(props.id);
    var input = React.useRef(null);
    var setInput = function (el) {
      input.current = el;
      var r = props.inputRef;
      if (typeof r === "function") r(el); else if (r) r.current = el;
    };
    var inputProps = { ref: setInput, id: uid, type: type, className: "jsk-check__input", disabled: disabled,
      name: props.name || (g && g.name) || undefined, value: props.value,
      "aria-labelledby": uid + "-t", "aria-describedby": props.description != null ? uid + "-d" : undefined };
    if (g && props.value != null) {
      inputProps.checked = g.isChecked(props.value);
      inputProps.onChange = function (e) { g.toggle(props.value, e); if (props.onChange) props.onChange(e); };
    } else {
      if (props.checked !== undefined) inputProps.checked = props.checked;
      if (props.defaultChecked !== undefined) inputProps.defaultChecked = props.defaultChecked;
      inputProps.onChange = props.onChange || (props.checked !== undefined ? function () {} : undefined);
    }
    var sw = size === "md" ? 2 : 1.67;
    var mark = type === "checkbox"
      ? h("svg", { className: "jsk-check__mark jsk-check__mark--check", viewBox: size === "md" ? "0 0 14 14" : "0 0 12 12", fill: "none", "aria-hidden": "true" },
          h("path", { d: size === "md" ? "M11.67 3.5 5.25 9.92 2.33 7" : "M10 3 4.5 8.5 2 6", stroke: "currentColor", strokeWidth: sw, strokeLinecap: "round", strokeLinejoin: "round" }))
      : h("span", { className: "jsk-check__dot" });
    var control = h("span", { key: "ctl", className: "jsk-check jsk-check--" + type + " jsk-check--" + size + " jsk-cc__control" + (disabled ? " jsk-check--disabled" : "") },
      h("input", inputProps),
      h("span", { className: "jsk-check__ctrl" }, h("span", { className: "jsk-check__box", "aria-hidden": "true" }, mark)));

    var titleEl = h("span", { id: uid + "-t", className: "jsk-cc__title" }, props.title);
    var desc = props.description != null ? h("span", { id: uid + "-d", className: "jsk-cc__desc" }, props.description) : null;
    var icon = props.icon != null ? h("span", { className: "jsk-cc__icon", "aria-hidden": "true" }, props.icon) : null;
    var body;
    if (variant === "pricing") {
      var priceRow = props.price != null ? h("span", { className: "jsk-cc__price" },
        h("span", { className: "jsk-cc__amount" }, props.price),
        props.period != null ? h("span", { className: "jsk-cc__period" }, props.period) : null) : null;
      body = [
        h("span", { key: "hd", className: "jsk-cc__head" },
          h("span", { className: "jsk-cc__lead" }, icon, titleEl), control),
        h("span", { key: "bd", className: "jsk-cc__body" },
          props.badge != null ? h("span", { className: "jsk-cc__badge" }, props.badge) : null,
          h("span", { className: "jsk-cc__plan" }, priceRow, desc))
      ];
    } else {
      var heading = variant === "payment"
        ? h("span", { className: "jsk-cc__text" }, titleEl, props.supportingText != null ? h("span", { className: "jsk-cc__sub" }, props.supportingText) : null, desc)
        : h("span", { className: "jsk-cc__text" },
            h("span", { className: "jsk-cc__row" }, titleEl, props.supportingText != null ? h("span", { className: "jsk-cc__sub" }, props.supportingText) : null),
            desc);
      var media = null;
      if (variant === "icon") media = icon;
      else if (variant === "avatar") media = h(Avatar, { size: "sm", src: props.avatar, name: props.avatarAlt || (typeof props.title === "string" ? props.title : undefined), alt: "" });
      else if (variant === "payment") media = h("span", { className: "jsk-cc__media", "aria-hidden": "true" }, props.media);
      var content = variant === "payment"
        ? h("span", { className: "jsk-cc__stack" }, heading,
            props.actions != null ? h("span", { className: "jsk-cc__actions", "data-cc-actions": "" }, props.actions) : null)
        : heading;
      body = variant === "default"
        ? [h("span", { key: "m", className: "jsk-cc__main" }, control, content)]
        : [h("span", { key: "m", className: "jsk-cc__main" }, media, content), control];
    }
    var cls = ["jsk-cc", "jsk-cc--" + variant, "jsk-cc--" + size];
    if (disabled) cls.push("is-disabled");
    if (props.className) cls.push(props.className);
    var onClick = function (e) {
      if (disabled || !input.current) return;
      var t = e.target;
      if (t === input.current || (t.closest && (t.closest("[data-cc-actions]") || t.closest("a,button,label,input,select,textarea")))) return;
      input.current.click();
    };
    return h("div", Object.assign(omit(props, CC_OWN), { ref: ref, className: cls.join(" "), style: props.style,
      "data-state": props.state || undefined, onClick: onClick }), body);
  });
  ChoiceCard.displayName = "ChoiceCard";

  /** ChoiceCardGroup — radio (single value) or checkbox (array of values) group of ChoiceCards. */
  var CCG_OWN = ["type", "size", "name", "value", "defaultValue", "onChange", "disabled", "columns", "gap", "children", "className", "style"];
  var ChoiceCardGroup = React.forwardRef(function ChoiceCardGroup(props, ref) {
    var type = props.type === "radio" ? "radio" : "checkbox";
    var autoName = useFieldId();
    var ctrl = props.value !== undefined;
    var st = React.useState(props.defaultValue !== undefined ? props.defaultValue : (type === "radio" ? null : []));
    var val = ctrl ? props.value : st[0];
    var arr = Array.isArray(val) ? val : [];
    var ctx = {
      type: type, size: props.size, disabled: props.disabled, name: props.name || autoName,
      isChecked: function (v) { return type === "radio" ? val === v : arr.indexOf(v) >= 0; },
      toggle: function (v, e) {
        var next = type === "radio" ? v : (arr.indexOf(v) >= 0 ? arr.filter(function (x) { return x !== v; }) : arr.concat([v]));
        if (!ctrl) st[1](next);
        if (props.onChange) props.onChange(next, e);
      }
    };
    var cols = props.columns > 1 ? props.columns : 1;
    var style = Object.assign({ gridTemplateColumns: cols > 1 ? "repeat(" + cols + ", minmax(0, 1fr))" : undefined }, props.style);
    return h(ChoiceCardCtx.Provider, { value: ctx },
      h("div", Object.assign(omit(props, CCG_OWN), { ref: ref, role: type === "radio" ? "radiogroup" : "group",
        className: "jsk-ccg" + (props.className ? " " + props.className : ""), style: style }), props.children));
  });
  ChoiceCardGroup.displayName = "ChoiceCardGroup";


  /* ---------- Slider ---------- */
  var SL_OWN = ["value", "defaultValue", "min", "max", "step", "onChange", "onChangeEnd", "labelPosition", "formatValue", "disabled",
    "name", "id", "state", "className", "style", "aria-label", "aria-labelledby", "thumbLabels"];
  /** Slider — single value or range (two handles). labelPosition: none | bottom | top (tooltip). */
  var Slider = React.forwardRef(function Slider(props, ref) {
    var min = props.min != null ? props.min : 0;
    var max = props.max != null ? props.max : 100;
    var step = props.step != null ? props.step : 1;
    var ctrl = props.value !== undefined;
    var st = React.useState(props.defaultValue !== undefined ? props.defaultValue : min);
    var raw = ctrl ? props.value : st[0];
    var range = Array.isArray(raw);
    var vals = range ? [raw[0], raw[1]] : [raw];
    var pos = props.labelPosition === "bottom" || props.labelPosition === "top" ? props.labelPosition : "none";
    var fmt = props.formatValue || function (v) { return min === 0 && max === 100 ? v + "%" : String(v); };
    var uid = useFieldId(props.id);
    function pct(v) { return max > min ? Math.min(1, Math.max(0, (v - min) / (max - min))) : 0; }
    function at(p) { return "calc(" + p + " * (100% - 24px) + 12px)"; }
    function set(i, v) {
      v = Number(v);
      var next;
      if (range) {
        next = vals.slice();
        if (i === 0) next[0] = Math.min(v, vals[1]); else next[1] = Math.max(v, vals[0]);
      } else next = v;
      if (!ctrl) st[1](next);
      if (props.onChange) props.onChange(next);
    }
    var ps = vals.map(pct);
    var fill = range
      ? { left: at(ps[0]), width: "calc(" + (ps[1] - ps[0]) + " * (100% - 24px))" }
      : { left: 0, width: at(ps[0]) };
    var labels = props.thumbLabels || (range ? ["Minimum", "Maximum"] : [null]);
    var inputs = vals.map(function (v, i) {
      var lowOnTop = range && i === 0 && ps[0] > 0.5;
      return h("input", { key: "i" + i, type: "range", className: "jsk-slider__input" + (lowOnTop ? " is-top" : ""),
        id: i === 0 ? uid : uid + "-" + i, min: min, max: max, step: step, value: v, disabled: props.disabled,
        name: props.name ? (range ? props.name + (i === 0 ? "_min" : "_max") : props.name) : undefined,
        "aria-label": labels[i] || props["aria-label"], "aria-labelledby": labels[i] ? undefined : props["aria-labelledby"],
        "aria-valuetext": fmt(v),
        onChange: function (e) { set(i, e.target.value); },
        onPointerUp: props.onChangeEnd ? function () { props.onChangeEnd(raw); } : undefined,
        onKeyUp: props.onChangeEnd ? function () { props.onChangeEnd(raw); } : undefined });
    });
    var tags = pos === "none" ? null : vals.map(function (v, i) {
      var align = ps[i] <= 0 ? " is-start" : ps[i] >= 1 ? " is-end" : "";
      return h("span", { key: "l" + i, className: "jsk-slider__label jsk-slider__label--" + pos + align, style: { left: at(ps[i]) }, "aria-hidden": "true" }, fmt(v));
    });
    var cls = ["jsk-slider", "jsk-slider--label-" + pos];
    if (range) cls.push("jsk-slider--range");
    if (props.disabled) cls.push("is-disabled");
    if (props.className) cls.push(props.className);
    return h("div", Object.assign(omit(props, SL_OWN), { ref: ref, className: cls.join(" "), style: props.style,
        role: range ? "group" : undefined, "aria-label": range ? props["aria-label"] : undefined, "aria-labelledby": range ? props["aria-labelledby"] : undefined,
        "data-state": props.state || undefined }),
      h("div", { className: "jsk-slider__rail" },
        h("span", { className: "jsk-slider__track", "aria-hidden": "true" }, h("span", { className: "jsk-slider__fill", style: fill })),
        inputs, tags));
  });
  Slider.displayName = "Slider";


  /* ---------- TextEditorToolbar ---------- */
  var TB_ICONS = {
    bold: "M5 10h5.83a2.92 2.92 0 0 0 0-5.83H5V10Zm0 0h6.67a2.92 2.92 0 1 1 0 5.83H5V10Z",
    italic: "M15.83 3.33H8.33M11.67 16.67H4.17M12.5 3.33l-5 13.34",
    underline: "M15 3.33V9.17a5 5 0 0 1-10 0V3.33M3.33 17.5h13.34",
    alignLeft: "M13.33 8.33h-10M16.67 5H3.33M16.67 11.67H3.33M13.33 15h-10",
    alignCenter: "M15 8.33H5M17.5 5h-15M17.5 11.67h-15M15 15H5",
    bullets: "M17.5 10H7.5M17.5 5H7.5M17.5 15H7.5M4.17 10a.83.83 0 1 1-1.67 0 .83.83 0 0 1 1.67 0Zm0-5a.83.83 0 1 1-1.67 0 .83.83 0 0 1 1.67 0Zm0 10a.83.83 0 1 1-1.67 0 .83.83 0 0 1 1.67 0Z",
    link: "M10.59 15.3 9.41 16.48a4.17 4.17 0 0 1-5.89-5.89L4.7 9.41m10.6 1.18 1.18-1.18a4.17 4.17 0 0 0-5.89-5.89L9.41 4.7M7.08 12.92l5.84-5.84",
    image: "M13.5 17.5H6.33c-.47 0-.7 0-.81-.09a.42.42 0 0 1-.15-.35c0-.14.17-.3.5-.64l6.6-6.6c.31-.3.46-.46.64-.52a.83.83 0 0 1 .51 0c.18.06.33.21.64.52l3 3.01v1m-3.76 3.67c1.4 0 2.1 0 2.64-.27.47-.24.85-.62 1.09-1.1.27-.53.27-1.23.27-2.63V6.5c0-1.4 0-2.1-.27-2.64a2.5 2.5 0 0 0-1.1-1.09c-.53-.27-1.23-.27-2.63-.27h-7c-1.4 0-2.1 0-2.64.27a2.5 2.5 0 0 0-1.09 1.1C2.5 4.4 2.5 5.1 2.5 6.5v7c0 1.4 0 2.1.27 2.64.24.47.62.85 1.1 1.09.53.27 1.23.27 2.63.27h7Zm-4.58-10.42a1.67 1.67 0 1 1-3.34 0 1.67 1.67 0 0 1 3.34 0Z",
    generate: "M3.75 18.33v-4.16m0-8.34V1.67M1.67 3.75h4.16m-4.16 12.5h4.16M10.83 2.5 9.39 6.26c-.24.61-.35.92-.54 1.17-.16.23-.36.43-.59.59-.25.19-.56.3-1.17.54L3.33 10l3.76 1.44c.61.24.92.36 1.17.54.23.17.43.37.59.6.19.25.3.56.54 1.17l1.44 3.75 1.45-3.75c.23-.61.35-.92.53-1.17.17-.23.37-.43.6-.6.25-.18.56-.3 1.17-.54L18.33 10l-3.75-1.44c-.61-.24-.92-.35-1.17-.54a2.5 2.5 0 0 1-.6-.59c-.18-.25-.3-.56-.53-1.17L10.83 2.5Z",
    type: "M6.67 6.67h6.66M10 6.67v6.66M6.5 17.5h7c1.4 0 2.1 0 2.64-.27.47-.24.85-.62 1.09-1.1.27-.53.27-1.23.27-2.63v-7c0-1.4 0-2.1-.27-2.64a2.5 2.5 0 0 0-1.1-1.09c-.53-.27-1.23-.27-2.63-.27h-7c-1.4 0-2.1 0-2.64.27a2.5 2.5 0 0 0-1.09 1.1C2.5 4.4 2.5 5.1 2.5 6.5v7c0 1.4 0 2.1.27 2.64.24.47.62.85 1.1 1.09.53.27 1.23.27 2.63.27Z"
  };
  var TB_LABELS = { bold: "Bold", italic: "Italic", underline: "Underline", alignLeft: "Align left", alignCenter: "Align center",
    bullets: "Bulleted list", link: "Insert link", image: "Insert image", generate: "Generate with AI", color: "Text color" };
  var TB_COLORS = ["brand", "gray", "error", "warning", "success", "blue", "indigo", "purple", "pink", "orange"];
  function tbIcon(k) { return Ico("0 0 20 20", TB_ICONS[k], 1.67); }

  /** ToolbarButton — 32px icon button for editor toolbars; `pressed` for toggles. */
  var ToolbarButton = React.forwardRef(function ToolbarButton(props, ref) {
    var rest = omit(props, ["icon", "label", "pressed", "className", "children"]);
    return h("button", Object.assign(rest, { ref: ref, type: "button", title: props.label, "aria-label": props.label,
      "aria-pressed": props.pressed === undefined ? undefined : !!props.pressed,
      className: "jsk-tb__btn" + (props.className ? " " + props.className : "") }),
      typeof props.icon === "string" ? tbIcon(props.icon) : (props.icon || props.children));
  });
  ToolbarButton.displayName = "ToolbarButton";

  function TbColor(props) {
    var open = React.useState(false);
    var wrap = React.useRef(null);
    React.useEffect(function () {
      if (!open[0]) return;
      function down(e) { if (wrap.current && !wrap.current.contains(e.target)) open[1](false); }
      function key(e) { if (e.key === "Escape") { open[1](false); var b = wrap.current && wrap.current.querySelector(".jsk-tb__btn"); if (b) b.focus(); } }
      document.addEventListener("mousedown", down); document.addEventListener("keydown", key);
      return function () { document.removeEventListener("mousedown", down); document.removeEventListener("keydown", key); };
    }, [open[0]]);
    var colors = props.colors || TB_COLORS;
    function css(c) { return c.charAt(0) === "#" || c.indexOf("(") >= 0 ? c : "var(--utility-" + c + "-600)"; }
    return h("span", { ref: wrap, className: "jsk-tb__color" },
      h("button", { type: "button", className: "jsk-tb__btn jsk-tb__btn--color", title: TB_LABELS.color, "aria-label": TB_LABELS.color,
        "aria-haspopup": "true", "aria-expanded": open[0], disabled: props.disabled, onClick: function () { open[1](!open[0]); } },
        h("span", { className: "jsk-tb__swatch", style: { background: css(props.value || "brand") } })),
      open[0] ? h("div", { className: "jsk-tb__palette", role: "group", "aria-label": TB_LABELS.color },
        colors.map(function (c) {
          return h("button", { key: c, type: "button", className: "jsk-tb__chip" + (c === props.value ? " is-on" : ""), "aria-label": c, "aria-pressed": c === props.value,
            style: { background: css(c) }, onClick: function () { open[1](false); if (props.onChange) props.onChange(c); } });
        })) : null);
  }

  var TB_OWN = ["type", "active", "onAction", "color", "onColorChange", "colors", "fonts", "font", "onFontChange", "sizes", "fontSize",
    "onFontSizeChange", "disabled", "className", "style", "groups", "variant", "selects"];
  /** TextEditorToolbar — simple (marks, color, align, list) or advanced (+ font, size, link, image, AI). */
  var TextEditorToolbar = React.forwardRef(function TextEditorToolbar(props, ref) {
    var adv = props.type === "advanced";
    var mini = props.type === "mini";
    var floating = props.variant === "floating";
    var showSelects = props.selects !== undefined ? !!props.selects : (adv && !floating);
    var active = props.active || [];
    var groups = props.groups || (mini ? [["bold", "italic", "underline", "alignLeft", "alignCenter", "link"]] : adv
      ? [["bold", "italic", "underline"], ["color"], ["alignLeft", "alignCenter", "bullets"], ["link", "image"], ["generate"]]
      : [["bold", "italic", "underline"], ["color"], ["alignLeft", "alignCenter", "bullets"]]);
    var toggles = { bold: 1, italic: 1, underline: 1, alignLeft: 1, alignCenter: 1, bullets: 1 };
    var items = [];
    groups.forEach(function (g, gi) {
      if (gi) items.push(h("span", { key: "s" + gi, className: "jsk-tb__sep", "aria-hidden": "true" }));
      g.forEach(function (k) {
        if (k === "color") items.push(h(TbColor, { key: k, value: props.color, onChange: props.onColorChange, colors: props.colors, disabled: props.disabled }));
        else items.push(h(ToolbarButton, { key: k, icon: k, label: TB_LABELS[k] || k, disabled: props.disabled,
          pressed: toggles[k] ? active.indexOf(k) >= 0 : undefined,
          onMouseDown: function (e) { e.preventDefault(); },
          onClick: function () { if (props.onAction) props.onAction(k); } }));
      });
    });
    var fonts = props.fonts || ["Plus Jakarta Sans", "Inter", "Georgia", "Courier New"];
    var sizes = props.sizes || ["12px", "14px", "16px", "18px", "20px", "24px"];
    var selects = showSelects ? h("div", { className: "jsk-tb__selects" },
      h(Select, { size: "md", "aria-label": "Font", iconLeading: tbIcon("type"), style: { width: 220, maxWidth: 240 }, disabled: props.disabled,
        options: fonts.map(function (f) { return { value: f, label: f }; }),
        value: props.font, defaultValue: props.font === undefined ? fonts[0] : undefined, onChange: props.onFontChange }),
      h(Select, { size: "md", "aria-label": "Font size", style: { width: 84 }, disabled: props.disabled,
        options: sizes.map(function (f) { return { value: f, label: f }; }),
        value: props.fontSize, defaultValue: props.fontSize === undefined ? "16px" : undefined, onChange: props.onFontSizeChange })) : null;
    return h("div", Object.assign(omit(props, TB_OWN), { ref: ref, role: "toolbar", "aria-label": props["aria-label"] || "Text formatting",
        className: "jsk-tb" + (adv ? " jsk-tb--advanced" : "") + (mini ? " jsk-tb--mini" : "") + (floating ? " jsk-tb--floating" : "") + (props.className ? " " + props.className : ""), style: props.style }),
      selects, h("div", { className: "jsk-tb__group" }, items));
  });
  TextEditorToolbar.displayName = "TextEditorToolbar";


  /* ---------- EditorBubbleMenu ---------- */
  /** EditorBubbleMenu — floating mini toolbar shown 12px above the text selected inside `editorRef`. */
  function EditorBubbleMenu(props) {
    var pos = React.useState(null);
    var box = React.useRef(null);
    var gap = props.offset != null ? props.offset : 12;
    React.useEffect(function () {
      function update() {
        var ed = props.editorRef && props.editorRef.current;
        var sel = window.getSelection();
        if (!ed || !sel || sel.rangeCount === 0 || sel.isCollapsed || !ed.contains(sel.anchorNode)) {
          if (!(box.current && box.current.contains(document.activeElement))) pos[1](null);
          return;
        }
        var r = sel.getRangeAt(0).getBoundingClientRect();
        if (!r.width && !r.height) return;
        var w = box.current ? box.current.offsetWidth : 240, hh = box.current ? box.current.offsetHeight : 40;
        var left = Math.max(8, Math.min(window.innerWidth - w - 8, r.left + r.width / 2 - w / 2));
        var top = r.top - gap - hh;
        if (top < 8) top = r.bottom + gap;
        pos[1]({ left: left, top: top });
      }
      document.addEventListener("selectionchange", update);
      window.addEventListener("scroll", update, true); window.addEventListener("resize", update);
      return function () { document.removeEventListener("selectionchange", update); window.removeEventListener("scroll", update, true); window.removeEventListener("resize", update); };
    }, [props.editorRef, gap]);
    React.useLayoutEffect(function () {
      if (pos[0] && box.current) {
        var sel = window.getSelection();
        if (sel && sel.rangeCount) {
          var r = sel.getRangeAt(0).getBoundingClientRect(), w = box.current.offsetWidth, hh = box.current.offsetHeight;
          var left = Math.max(8, Math.min(window.innerWidth - w - 8, r.left + r.width / 2 - w / 2));
          var top = r.top - gap - hh; if (top < 8) top = r.bottom + gap;
          if (Math.abs(left - pos[0].left) > 0.5 || Math.abs(top - pos[0].top) > 0.5) pos[1]({ left: left, top: top });
        }
      }
    });
    var open = props.open !== undefined ? props.open : !!pos[0];
    if (!open) return null;
    var style = props.open !== undefined && !pos[0] ? props.style : Object.assign({ position: "fixed", left: pos[0] ? pos[0].left : 0, top: pos[0] ? pos[0].top : 0, zIndex: 50 }, props.style);
    return h("div", { ref: box, className: "jsk-bubble", style: style },
      props.children || h(TextEditorToolbar, Object.assign({ type: "mini", variant: "floating" }, omit(props, ["editorRef", "offset", "open", "style", "children"]))));
  }


  /* ---------- TextEditor ---------- */
  var RTE_OWN = ["size", "toolbar", "label", "required", "tooltip", "hint", "error", "maxLength", "placeholder", "value", "defaultValue",
    "onChange", "onAction", "height", "disabled", "className", "style", "id", "name", "counter", "fonts", "sizes", "resizable"];
  var RTE_CMD = { bold: "bold", italic: "italic", underline: "underline", alignLeft: "justifyLeft", alignCenter: "justifyCenter", bullets: "insertUnorderedList" };
  /** TextEditor — rich-text field: toolbar (inline / floating / none) + editable area + characters-left hint. */
  var TextEditor = React.forwardRef(function TextEditor(props, ref) {
    var size = props.size === "md" ? "md" : "sm";
    var id = useFieldId(props.id);
    var ed = React.useRef(null);
    var st = React.useState({ len: 0, empty: true, active: [], color: "brand", font: undefined, fontSize: undefined });
    var s = st[0];
    var dis = !!props.disabled;
    var tbMode = props.toolbar === "floating" || props.toolbar === "none" ? props.toolbar : "inline";
    var setRef = function (el) { ed.current = el; if (typeof ref === "function") ref(el); else if (ref) ref.current = el; };
    function measure(fire) {
      var el = ed.current; if (!el) return;
      var text = el.innerText.replace(/\n$/, "");
      var empty = !text.trim() && !el.querySelector("img,li");
      var active = [];
      try {
        ["bold", "italic", "underline"].forEach(function (k) { if (document.queryCommandState(RTE_CMD[k])) active.push(k); });
        if (document.queryCommandState("justifyCenter")) active.push("alignCenter"); else active.push("alignLeft");
        if (document.queryCommandState("insertUnorderedList")) active.push("bullets");
      } catch (e) {}
      st[1](function (o) { return Object.assign({}, o, { len: text.length, empty: empty, active: active }); });
      if (fire && props.onChange) props.onChange(el.innerHTML, text);
    }
    React.useEffect(function () {
      var el = ed.current;
      if (el && props.value === undefined && props.defaultValue != null) el.innerHTML = props.defaultValue;
      measure(false);
      function sel() { var x = window.getSelection(); if (x && el && el.contains(x.anchorNode)) measure(false); }
      document.addEventListener("selectionchange", sel);
      return function () { document.removeEventListener("selectionchange", sel); };
    }, []);
    React.useEffect(function () {
      var el = ed.current;
      if (el && props.value !== undefined && props.value !== el.innerHTML) { el.innerHTML = props.value || ""; measure(false); }
    }, [props.value]);
    function exec(cmd, arg) {
      var el = ed.current; if (!el || dis) return;
      if (!el.contains(document.activeElement)) el.focus();
      try { document.execCommand("styleWithCSS", false, true); } catch (e) {}
      document.execCommand(cmd, false, arg);
      measure(true);
    }
    function onAction(k) {
      if (RTE_CMD[k]) exec(RTE_CMD[k]);
      if (props.onAction) props.onAction(k, { exec: exec, element: ed.current });
    }
    function cssColor(c) { return c.charAt(0) === "#" || c.indexOf("(") >= 0 ? c : getComputedStyle(ed.current).getPropertyValue("--utility-" + c + "-600").trim(); }
    var tb = tbMode === "none" ? null : h(TextEditorToolbar, {
      type: size === "md" ? "advanced" : "simple", variant: tbMode === "floating" ? "floating" : "inline", disabled: dis,
      active: s.active, color: s.color, fonts: props.fonts, sizes: props.sizes, font: s.font, fontSize: s.fontSize,
      onAction: onAction,
      onColorChange: function (c) { st[1](Object.assign({}, s, { color: c })); exec("foreColor", cssColor(c)); },
      onFontChange: function (f) { st[1](Object.assign({}, s, { font: f })); exec("fontName", f); },
      onFontSizeChange: function (z) {
        st[1](Object.assign({}, s, { fontSize: z }));
        exec("fontSize", "7");
        var el = ed.current; if (!el) return;
        Array.prototype.forEach.call(el.querySelectorAll('font[size="7"]'), function (f) { f.removeAttribute("size"); f.style.fontSize = z; });
        Array.prototype.forEach.call(el.querySelectorAll("span"), function (sp) { if (sp.style.fontSize === "xxx-large" || sp.style.fontSize === "-webkit-xxx-large") sp.style.fontSize = z; });
        measure(true);
      },
      "aria-controls": id
    });
    var max = props.maxLength;
    var left = max != null ? max - s.len : null;
    var hint = props.error != null && props.error !== true && props.error !== false ? null
      : props.hint != null ? props.hint
      : (max != null && props.counter !== false ? (left >= 0 ? left + " characters left" : (-left) + " characters over the limit") : null);
    var over = left != null && left < 0;
    var height = props.height != null ? props.height : (size === "md" ? 428 : 340);
    var cls = ["jsk-rte", "jsk-rte--" + size, "jsk-rte--tb-" + tbMode];
    if (props.resizable === false) cls.push("is-fixed");
    return h(Field, { size: "md", label: props.label, required: props.required, tooltip: props.tooltip, labelId: id + "-label",
        hint: hint, error: props.error || (over ? true : undefined), hintId: id + "-hint", disabled: dis,
        className: "jsk-rte-field" + (props.className ? " " + props.className : ""), style: props.style },
      h("div", Object.assign(omit(props, RTE_OWN), { className: cls.join(" ") }),
        tb,
        h("div", { ref: setRef, id: id, className: "jsk-rte__area jsk-editor" + (s.empty ? " is-empty" : ""),
          contentEditable: !dis, suppressContentEditableWarning: true, role: "textbox", "aria-multiline": "true",
          "aria-labelledby": props.label != null ? id + "-label" : undefined, "aria-label": props.label == null ? (props["aria-label"] || "Text editor") : undefined,
          "aria-describedby": hint != null || props.error ? id + "-hint" : undefined, "aria-invalid": props.error || over ? "true" : undefined,
          "aria-disabled": dis || undefined, "data-placeholder": props.placeholder != null ? props.placeholder : "Insert text",
          style: { height: height }, onInput: function () { measure(true); }, onBlur: function () { measure(false); } })),
      props.name ? h("input", { type: "hidden", name: props.name, value: ed.current ? ed.current.innerHTML : (props.value || props.defaultValue || "") }) : null);
  });
  TextEditor.displayName = "TextEditor";


  /* ---------- Toggle ---------- */
  var TG_OWN = ["size", "type", "label", "hint", "indeterminate", "className", "style", "state", "inputRef"];
  /** Toggle — switch. size sm | md, type default | slim, optional label + hint, indeterminate. */
  var Toggle = React.forwardRef(function Toggle(props, ref) {
    var size = props.size === "md" ? "md" : "sm";
    var type = props.type === "slim" ? "slim" : "default";
    var inp = React.useRef(null);
    var setInp = function (el) { inp.current = el; var r = props.inputRef; if (typeof r === "function") r(el); else if (r) r.current = el; };
    React.useEffect(function () { if (inp.current) inp.current.indeterminate = !!props.indeterminate; }, [props.indeterminate]);
    var labelled = props.label != null || props.hint != null;
    var cls = ["jsk-toggle", "jsk-toggle--" + size, "jsk-toggle--" + type];
    if (labelled) cls.push("jsk-toggle--labelled");
    if (props.disabled) cls.push("is-disabled");
    if (props.indeterminate) cls.push("is-mixed");
    if (props.className) cls.push(props.className);
    var ind = !!props.indeterminate;
    return h("label", { ref: ref, className: cls.join(" "), style: props.style, "data-state": props.state || undefined },
      h("input", Object.assign(omit(props, TG_OWN), { ref: setInp, type: "checkbox", className: "jsk-toggle__input",
        role: ind ? undefined : "switch", "aria-checked": ind ? "mixed" : undefined })),
      h("span", { className: "jsk-toggle__ctrl" }, h("span", { className: "jsk-toggle__track", "aria-hidden": "true" }, h("span", { className: "jsk-toggle__knob" }))),
      labelled ? h("span", { className: "jsk-toggle__text" },
        props.label != null ? h("span", { className: "jsk-toggle__label" }, props.label) : null,
        props.hint != null ? h("span", { className: "jsk-toggle__hint" }, props.hint) : null) : null);
  });
  Toggle.displayName = "Toggle";


  /* ---------- Tooltip ---------- */
  function helpProps(t) { return t && typeof t === "object" && !React.isValidElement(t) ? t : { title: t }; }
  /** HelpIcon — 16px help-circle that shows a Tooltip on hover / focus. */
  function HelpIcon(props) {
    var p = props || {};
    return h(Tooltip, { title: p.title, description: p.description, placement: p.placement || "top", arrow: p.arrow, className: p.className },
      h("span", { className: "jsk-input__help jsk-help", tabIndex: 0, role: "img", "aria-label": p.label || (typeof p.title === "string" ? p.title : "More information"),
        onClick: function (e) { e.preventDefault(); } }, Ico("0 0 16 16", P.help, 1.33)));
  }
  var TT_PLACE = ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "right"];
  /** TooltipBubble — the visual tooltip (no trigger logic). */
  function TooltipBubble(p) {
    var place = TT_PLACE.indexOf(p.placement) >= 0 ? p.placement : "top";
    var cls = ["jsk-tt", "jsk-tt--" + place];
    if (p.description != null) cls.push("jsk-tt--rich");
    if (p.arrow === false) cls.push("jsk-tt--noarrow");
    if (p.className) cls.push(p.className);
    return h("div", { id: p.id, role: "tooltip", className: cls.join(" "), style: p.style },
      h("div", { className: "jsk-tt__box" },
        h("div", { className: "jsk-tt__title" }, p.title),
        p.description != null ? h("div", { className: "jsk-tt__desc" }, p.description) : null),
      p.arrow === false ? null : h("span", { className: "jsk-tt__arrow", "aria-hidden": "true" }));
  }
  var TT_OWN = ["title", "description", "placement", "arrow", "open", "defaultOpen", "delay", "children", "className", "style", "disabled", "id"];
  /** Tooltip — wraps a trigger; shows on hover and keyboard focus, hides on Escape / blur / leave. */
  function Tooltip(props) {
    var uid = useFieldId(props.id);
    var st = React.useState(!!props.defaultOpen);
    var timer = React.useRef(null);
    var open = props.open !== undefined ? props.open : st[0];
    var delay = props.delay != null ? props.delay : 150;
    function show() { if (props.disabled) return; clearTimeout(timer.current); timer.current = setTimeout(function () { st[1](true); }, delay); }
    function hide() { clearTimeout(timer.current); st[1](false); }
    React.useEffect(function () {
      if (!open) return;
      function key(e) { if (e.key === "Escape") hide(); }
      document.addEventListener("keydown", key);
      return function () { document.removeEventListener("keydown", key); };
    }, [open]);
    React.useEffect(function () { return function () { clearTimeout(timer.current); }; }, []);
    var child = props.children;
    var trigger = React.isValidElement(child)
      ? React.cloneElement(child, { "aria-describedby": [child.props["aria-describedby"], open ? uid : null].filter(Boolean).join(" ") || undefined })
      : h("span", { tabIndex: 0, className: "jsk-tt-trigger", "aria-describedby": open ? uid : undefined }, child);
    return h("span", Object.assign(omit(props, TT_OWN), { className: "jsk-tt-wrap" + (props.className ? " " + props.className : ""), style: props.style,
        onMouseEnter: show, onMouseLeave: hide, onFocus: function (e) { if (!e.target.matches || e.target.matches(":focus-visible")) show(); }, onBlur: hide }),
      trigger,
      open ? h(TooltipBubble, { id: uid, title: props.title, description: props.description, placement: props.placement, arrow: props.arrow }) : null);
  }


  /* ---------- VideoPlayer ---------- */
  var VP_ICON = {
    play: "M4.5 2.8c0-.8.86-1.3 1.55-.9l7.6 4.4c.69.4.69 1.4 0 1.8l-7.6 4.4A1.04 1.04 0 0 1 4.5 11.6V2.8Z",
    pause: "M3 2.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v11c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-11Zm6 0c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v11c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-11Z",
    vol: "M7.2 2.2a.6.6 0 0 1 1 .45v10.7a.6.6 0 0 1-1 .45L4.1 11H2.2c-.66 0-1.2-.54-1.2-1.2V6.2C1 5.54 1.54 5 2.2 5h1.9l3.1-2.8Zm4.05 1.6a.67.67 0 0 1 .94.06A6.3 6.3 0 0 1 13.67 8a6.3 6.3 0 0 1-1.48 4.14.67.67 0 1 1-1-.88A4.97 4.97 0 0 0 12.33 8c0-1.25-.43-2.4-1.14-3.26a.67.67 0 0 1 .06-.94Zm-1.6 1.83a.67.67 0 0 1 .93.13c.47.62.75 1.39.75 2.24 0 .85-.28 1.62-.75 2.24a.67.67 0 1 1-1.06-.8c.3-.4.48-.9.48-1.44 0-.54-.18-1.04-.48-1.44a.67.67 0 0 1 .13-.93Z",
    mute: "M7.2 2.2a.6.6 0 0 1 1 .45v10.7a.6.6 0 0 1-1 .45L4.1 11H2.2c-.66 0-1.2-.54-1.2-1.2V6.2C1 5.54 1.54 5 2.2 5h1.9l3.1-2.8Zm3.33 3.33a.67.67 0 0 1 .94 0L12.67 6.7l1.19-1.18a.67.67 0 1 1 .94.94L13.6 7.67l1.2 1.19a.67.67 0 1 1-.95.94l-1.19-1.19-1.19 1.19a.67.67 0 1 1-.94-.94l1.19-1.19-1.19-1.19a.67.67 0 0 1 0-.95Z",
    max: "M2 2.67C2 2.3 2.3 2 2.67 2H6a.67.67 0 0 1 0 1.33H3.33V6A.67.67 0 0 1 2 6V2.67Zm7.33 0c0-.37.3-.67.67-.67h3.33c.37 0 .67.3.67.67V6a.67.67 0 0 1-1.33 0V3.33H10a.67.67 0 0 1-.67-.66ZM2.67 9.33c.37 0 .66.3.66.67v2.67H6A.67.67 0 0 1 6 14H2.67A.67.67 0 0 1 2 13.33V10c0-.37.3-.67.67-.67Zm10.66 0c.37 0 .67.3.67.67v3.33c0 .37-.3.67-.67.67H10a.67.67 0 0 1 0-1.33h2.67V10c0-.37.3-.67.66-.67Z",
    cast: "M2.67 2h10.66C14.07 2 14.67 2.6 14.67 3.33v7.34c0 .73-.6 1.33-1.34 1.33h-2a.67.67 0 0 1 0-1.33h2V3.33H2.67v7.34h2a.67.67 0 0 1 0 1.33h-2c-.74 0-1.34-.6-1.34-1.33V3.33C1.33 2.6 1.93 2 2.67 2Zm4.8 7.28a.67.67 0 0 1 1.06 0l2.67 3.34a.67.67 0 0 1-.53 1.08H5.33a.67.67 0 0 1-.52-1.08l2.66-3.34Z"
  };
  function vpIco(k, size) { return h("svg", { viewBox: "0 0 16 16", width: size || 16, height: size || 16, "aria-hidden": "true" }, h("path", { d: VP_ICON[k], fill: "currentColor", fillRule: "evenodd" })); }
  function vpTime(s) { s = Math.max(0, Math.floor(s || 0)); var m = Math.floor(s / 60), x = s % 60; return (m < 10 ? "0" : "") + m + ":" + (x < 10 ? "0" : "") + x; }
  var VP_SPEEDS = [1, 1.25, 1.5, 2, 0.5, 0.75];
  var VP_OWN = ["src", "poster", "size", "vertical", "title", "autoPlay", "loop", "muted", "playsInline", "getPreviewImage", "className", "style",
    "state", "onPlay", "onPause", "onEnded", "captions", "children"];
  /** VideoPlayer — <video> with Jobseeker controls. size sm | md | lg, horizontal (16:9) or vertical (9:16). */
  var VideoPlayer = React.forwardRef(function VideoPlayer(props, ref) {
    var size = props.size === "sm" || props.size === "lg" ? props.size : "md";
    var vid = React.useRef(null), root = React.useRef(null), bar = React.useRef(null);
    var demo = props.state || {};
    var s = React.useState({ playing: false, t: 0, d: 0, buf: 0, muted: !!props.muted, vol: 1, rate: 1, started: false });
    var st = s[0];
    var hov = React.useState(null);
    var setRoot = function (el) { root.current = el; if (typeof ref === "function") ref(el); else if (ref) ref.current = el; };
    function upd(o) { s[1](function (p) { return Object.assign({}, p, o); }); }
    React.useEffect(function () {
      var v = vid.current; if (!v) return;
      function sync() {
        var b = 0; try { if (v.buffered.length) b = v.buffered.end(v.buffered.length - 1); } catch (e) {}
        upd({ playing: !v.paused, t: v.currentTime, d: isFinite(v.duration) ? v.duration : 0, buf: b, muted: v.muted, vol: v.volume, rate: v.playbackRate });
      }
      var evs = ["play", "pause", "timeupdate", "durationchange", "progress", "volumechange", "ratechange", "loadedmetadata", "ended"];
      evs.forEach(function (e) { v.addEventListener(e, sync); });
      return function () { evs.forEach(function (e) { v.removeEventListener(e, sync); }); };
    }, [props.src]);
    var playing = demo.playing != null ? demo.playing : st.playing;
    var dur = demo.duration != null ? demo.duration : st.d;
    var cur = demo.currentTime != null ? demo.currentTime : st.t;
    var buf = demo.buffered != null ? demo.buffered : st.buf;
    var muted = st.muted, vol = demo.volume != null ? demo.volume : (muted ? 0 : st.vol);
    var hover = demo.previewTime != null ? demo.previewTime : hov[0];
    function toggle() {
      var v = vid.current; if (!v || !props.src) return;
      upd({ started: true });
      if (v.paused) { var p = v.play(); if (p && p.catch) p.catch(function () {}); } else v.pause();
    }
    function seekTo(t) { var v = vid.current; if (v && dur) { v.currentTime = Math.max(0, Math.min(dur, t)); upd({ t: v.currentTime }); } }
    function ratio(e, el) { var r = el.getBoundingClientRect(); return Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)); }
    function scrub(e) {
      if (!dur) return;
      var el = bar.current; seekTo(ratio(e, el) * dur);
      el.setPointerCapture && el.setPointerCapture(e.pointerId);
      function move(ev) { seekTo(ratio(ev, el) * dur); hov[1](ratio(ev, el) * dur); }
      function up() { el.removeEventListener("pointermove", move); el.removeEventListener("pointerup", up); }
      el.addEventListener("pointermove", move); el.addEventListener("pointerup", up);
    }
    function seekKey(e) {
      var k = e.key, step = e.shiftKey ? 10 : 5;
      if (k === "ArrowRight" || k === "ArrowUp") seekTo(cur + step); else if (k === "ArrowLeft" || k === "ArrowDown") seekTo(cur - step);
      else if (k === "Home") seekTo(0); else if (k === "End") seekTo(dur); else return;
      e.preventDefault();
    }
    function setVol(x) { var v = vid.current; if (!v) return; v.volume = x; v.muted = x === 0; }
    function volDown(e) {
      var el = e.currentTarget; setVol(ratio(e, el));
      el.setPointerCapture && el.setPointerCapture(e.pointerId);
      function move(ev) { setVol(ratio(ev, el)); }
      function up() { el.removeEventListener("pointermove", move); el.removeEventListener("pointerup", up); }
      el.addEventListener("pointermove", move); el.addEventListener("pointerup", up);
    }
    function volKey(e) {
      var d = e.key === "ArrowRight" || e.key === "ArrowUp" ? .1 : e.key === "ArrowLeft" || e.key === "ArrowDown" ? -.1 : 0;
      if (!d) return; e.preventDefault(); setVol(Math.max(0, Math.min(1, Math.round((vol + d) * 10) / 10)));
    }
    function mute() { var v = vid.current; if (v) { v.muted = !v.muted; if (!v.muted && v.volume === 0) v.volume = .5; } }
    function speed() { var v = vid.current; if (!v) return; var i = VP_SPEEDS.indexOf(v.playbackRate); v.playbackRate = VP_SPEEDS[(i + 1) % VP_SPEEDS.length]; }
    function full() {
      var el = root.current; if (!el) return;
      if (document.fullscreenElement) document.exitFullscreen(); else if (el.requestFullscreen) el.requestFullscreen();
      else if (vid.current && vid.current.webkitEnterFullscreen) vid.current.webkitEnterFullscreen();
    }
    function cast() {
      var v = vid.current; if (!v) return;
      if (v.remote && v.remote.prompt) { v.remote.prompt().catch(function () {}); return; }
      if (document.pictureInPictureEnabled) { if (document.pictureInPictureElement) document.exitPictureInPicture(); else v.requestPictureInPicture().catch(function () {}); }
    }
    function btn(icon, label, on, extra) {
      return h("button", Object.assign({ type: "button", className: "jsk-vp__btn", "aria-label": label, title: label, onClick: on }, extra), icon);
    }
    var rate = demo.rate || st.rate;
    var pct = dur ? cur / dur : 0, bpct = dur ? Math.max(pct, buf / dur) : 0;
    var showOverlay = !playing;
    var rateLabel = (rate % 1 ? String(rate).replace(/^0/, "") : String(rate));
    var preview = hover != null && dur ? h("div", { className: "jsk-vp__preview" + (props.vertical ? " is-vertical" : ""), style: { left: "clamp(var(--vp-pw) / 2 - 8px, " + (hover / dur * 100) + "%, 100% - var(--vp-pw) / 2 + 8px)" }, "aria-hidden": "true" },
      h("div", { className: "jsk-vp__thumb" }, props.getPreviewImage ? h("img", { src: props.getPreviewImage(hover), alt: "" }) : (props.poster ? h("img", { src: props.poster, alt: "" }) : null)),
      h("div", { className: "jsk-vp__ptime" }, h("span", null, vpTime(hover)), h("span", { className: "jsk-vp__ptotal" }, vpTime(dur)))) : null;
    var timeline = size === "sm" ? null : h("div", { className: "jsk-vp__timeline" },
      h("span", { className: "jsk-vp__time" }, vpTime(cur)),
      h("div", { ref: bar, className: "jsk-vp__seek", role: "slider", tabIndex: 0, "aria-label": "Seek", "aria-valuemin": 0, "aria-valuemax": Math.round(dur), "aria-valuenow": Math.round(cur),
          "aria-valuetext": vpTime(cur) + " of " + vpTime(dur), onPointerDown: scrub, onKeyDown: seekKey,
          onPointerMove: function (e) { if (dur) hov[1](ratio(e, e.currentTarget) * dur); }, onPointerLeave: function () { hov[1](null); } },
        h("span", { className: "jsk-vp__buf", style: { width: (bpct * 100) + "%" } }),
        h("span", { className: "jsk-vp__prog", style: { width: "max(8px, " + (pct * 100) + "%)" } }), preview),
      h("span", { className: "jsk-vp__time jsk-vp__time--rem" }, "-" + vpTime(dur - cur)));
    var volume = size === "lg"
      ? h("div", { className: "jsk-vp__vol" }, btn(vpIco(muted || vol === 0 ? "mute" : "vol"), muted ? "Unmute" : "Mute", mute),
          h("div", { className: "jsk-vp__vtrack", role: "slider", tabIndex: 0, "aria-label": "Volume", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": Math.round(vol * 100),
              onPointerDown: volDown, onKeyDown: volKey },
            h("span", { className: "jsk-vp__vfill", style: { width: "calc(" + vol + " * (100% - 12px) + 12px)" } })))
      : btn(vpIco(muted || vol === 0 ? "mute" : "vol"), muted ? "Unmute" : "Mute", mute);
    var cls = ["jsk-vp", "jsk-vp--" + size, props.vertical ? "jsk-vp--vertical" : "jsk-vp--horizontal"];
    if (playing) cls.push("is-playing");
    if (props.className) cls.push(props.className);
    return h("div", Object.assign(omit(props, VP_OWN), { ref: setRoot, className: cls.join(" "), style: props.style, role: "region", "aria-label": props.title || "Video player" }),
      props.src ? h("video", { ref: vid, className: "jsk-vp__media", src: props.src, poster: props.poster, autoPlay: props.autoPlay, loop: props.loop, muted: props.muted,
        playsInline: props.playsInline !== false, preload: "metadata", onClick: toggle, onEnded: props.onEnded, onPlay: props.onPlay, onPause: props.onPause }, props.children)
        : (props.poster ? h("img", { className: "jsk-vp__media", src: props.poster, alt: "" }) : h("div", { className: "jsk-vp__media" })),
      showOverlay ? h("div", { className: "jsk-vp__overlay", onClick: toggle },
        h("button", { type: "button", className: "jsk-vp__big", "aria-label": "Play" + (props.title ? " " + props.title : ""), onClick: function (e) { e.stopPropagation(); toggle(); } }, vpIco("play", 20))) : null,
      h("div", { className: "jsk-vp__controls" },
        size === "sm" ? h("div", { className: "jsk-vp__left" }, btn(vpIco(playing ? "pause" : "play"), playing ? "Pause" : "Play", toggle), volume)
          : [h(React.Fragment, { key: "a" }, btn(vpIco(playing ? "pause" : "play"), playing ? "Pause" : "Play", toggle), volume)],
        timeline,
        size === "lg" ? btn(h("span", { className: "jsk-vp__rate" }, rateLabel, h("svg", { viewBox: "0 0 8 8", width: 8, height: 8, "aria-hidden": "true" }, h("path", { d: "M2.5 2.5l3 3m0-3l-3 3", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" }))), "Playback speed " + rate + "x", speed) : null,
        size === "lg" ? btn(vpIco("cast"), "Cast or picture-in-picture", cast) : null,
        btn(vpIco("max"), "Full screen", full)));
  });
  VideoPlayer.displayName = "VideoPlayer";


  /* ---------- FileIcon ---------- */
  var FI_COLORS = {
    img: "brand", jpg: "brand", jpeg: "brand", png: "brand", webp: "brand", tiff: "brand", tif: "brand", gif: "brand", svg: "brand", eps: "brand", file: "brand", fig: "brand",
    pdf: "error", doc: "blue", docx: "blue", psd: "blue", mp4: "blue", avi: "blue", mkv: "blue", mpeg: "blue", mov: "blue",
    txt: "gray", zip: "gray-dark", rar: "gray-dark", csv: "success", xls: "success", xlsx: "success", ppt: "orange-dark", pptx: "orange-dark",
    ai: "orange", indd: "fuchsia", aep: "purple", mp3: "pink", wav: "pink",
    html: "indigo", css: "indigo", rss: "indigo", sql: "indigo", js: "indigo", json: "indigo", java: "indigo", xml: "indigo", exe: "indigo", dmg: "indigo"
  };
  var FI_PAGE = "M8 .75h16.19L35.25 11.81V35.25a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V4.75a4 4 0 0 1 4-4Z";
  var FI_FOLD = "M24.25.75v7a4 4 0 0 0 4 4h7";
  var FI_PAGE_FILL = "M8 0h16l12 12v24a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4Z";
  var FI_FOLD_FILL = "M24 0l12 12h-8a4 4 0 0 1-4-4V0Z";
  /**
   * FileIcon — 40×40 file-type icon. variant: default (outlined page + coloured tag) | gray (filled gray page) | solid (filled colour page).
   * type = extension (pdf, docx, xlsx, mp4, fig, json…) → label + colour. icon = glyph instead of the label. label={false} = blank page.
   */
  var FileIcon = React.forwardRef(function FileIcon(props, ref) {
    var ext = String(props.type || "file").replace(/^\./, "").toLowerCase();
    var variant = props.variant === "gray" || props.variant === "solid" ? props.variant : "default";
    var tone = props.color || FI_COLORS[ext] || "gray";
    var label = props.label === false || props.icon ? null : String(props.label || ext).toUpperCase().slice(0, 4);
    var tagged = variant === "default" && label;
    var page = variant === "default"
      ? h("svg", { viewBox: "0 0 40 40", fill: "none", "aria-hidden": "true", style: tagged ? { transform: "translateX(3px)" } : undefined },
          h("path", { d: FI_PAGE, stroke: "currentColor", strokeWidth: 1.5 }), h("path", { d: FI_FOLD, stroke: "currentColor", strokeWidth: 1.5 }))
      : h("svg", { viewBox: "0 0 40 40", fill: "none", "aria-hidden": "true" },
          h("path", { className: "jsk-fileicon__page", d: FI_PAGE_FILL }), h("path", { className: "jsk-fileicon__fold", d: FI_FOLD_FILL }));
    var inner = props.icon ? h("span", { className: "jsk-fileicon__glyph", "aria-hidden": "true" }, props.icon)
      : label ? h("span", { className: tagged ? "jsk-fileicon__tag" : "jsk-fileicon__label" }, label) : null;
    var a11y = props["aria-label"];
    return h("span", Object.assign(omit(props, ["type", "variant", "color", "label", "icon", "className"]), { ref: ref,
        className: "jsk-fileicon jsk-fileicon--" + variant + " jsk-fileicon--" + tone + (props.className ? " " + props.className : ""),
        "aria-hidden": a11y ? undefined : "true", role: a11y ? "img" : undefined }), page, inner);
  });
  FileIcon.displayName = "FileIcon";

  /* ---------- FeedItem / ActivityFeed ---------- */
  var FEED_OWN = ["name", "src", "alt", "initials", "status", "time", "dateTime", "unread", "file", "labels", "message", "supporting", "connector", "children", "className", "avatar"];
  /**
   * FeedItem — one activity / message entry: avatar + status, name, time, action line,
   * optional supporting item (file · labels · message bubble · any node), unread dot.
   * Wrap <a>/<strong> in the action line or message to colour it brand (mentions, project names).
   */
  var FeedItem = React.forwardRef(function FeedItem(props, ref) {
    var f = props.file, extra = null;
    if (f) {
      var fileBody = [h(FileIcon, { key: "i", type: f.type || String(f.name || "").split(".").pop() }),
        h("span", { key: "t", className: "jsk-feed__filetext" }, h("span", { className: "jsk-feed__filename" }, f.name), f.size ? h("span", { className: "jsk-feed__filesize" }, f.size) : null)];
      extra = f.href || f.onClick
        ? h(f.href ? "a" : "button", { className: "jsk-feed__file is-action", href: f.href, type: f.href ? undefined : "button", onClick: f.onClick, download: f.download }, fileBody)
        : h("div", { className: "jsk-feed__file" }, fileBody);
    } else if (props.labels && props.labels.length) {
      extra = h("div", { className: "jsk-feed__labels" }, props.labels.map(function (l, i) {
        return React.isValidElement(l) ? React.cloneElement(l, { key: i }) : h(Badge, Object.assign({ key: i, size: "sm" }, typeof l === "string" ? { children: l } : l));
      }));
    } else if (props.message != null) {
      extra = h("div", { className: "jsk-feed__msg" }, props.message);
    } else if (props.supporting) extra = props.supporting;
    var avatar = props.avatar || h(Avatar, { size: "md", src: props.src, alt: props.alt || props.name, name: props.name, initials: props.initials, status: props.status });
    return h("div", Object.assign(omit(props, FEED_OWN), { ref: ref,
        className: "jsk-feed-item" + (props.connector ? " has-connector" : "") + (props.unread ? " is-unread" : "") + (props.className ? " " + props.className : "") }),
      h("div", { className: "jsk-feed__aside" }, avatar, props.connector ? h("span", { className: "jsk-feed__line", "aria-hidden": "true" }) : null),
      h("div", { className: "jsk-feed__main" },
        h("div", { className: "jsk-feed__text" },
          h("div", { className: "jsk-feed__head" },
            h("span", { className: "jsk-feed__name" }, props.name),
            props.time ? h("time", { className: "jsk-feed__time", dateTime: props.dateTime }, props.time) : null),
          props.children != null ? h("div", { className: "jsk-feed__action" }, props.children) : null),
        extra),
      props.unread ? h("span", { className: "jsk-feed__dot", role: "img", "aria-label": "Unread" }) : null);
  });
  FeedItem.displayName = "FeedItem";

  /** ActivityFeed — a list of FeedItems. variant: divider (16px + rules) | spaced (32px) | connector (timeline line between avatars). */
  var ActivityFeed = React.forwardRef(function ActivityFeed(props, ref) {
    var variant = ["divider", "spaced", "connector"].indexOf(props.variant) >= 0 ? props.variant : "divider";
    var items = React.Children.toArray(props.children).filter(Boolean);
    return h("ul", Object.assign(omit(props, ["variant", "children", "className"]), { ref: ref,
        className: "jsk-feed jsk-feed--" + variant + (props.className ? " " + props.className : "") }),
      items.map(function (el, i) {
        var c = variant === "connector" && i < items.length - 1 && el.props.connector !== false;
        return h("li", { key: el.key != null ? el.key : i, className: "jsk-feed__li" }, React.isValidElement(el) && el.type === FeedItem ? React.cloneElement(el, { connector: c }) : el);
      }));
  });
  ActivityFeed.displayName = "ActivityFeed";


  /* ---------- Notification (toast) ---------- */
  var NT_COLORS = ["brand", "gray", "error", "warning", "success", "info"];
  var NT_ICONS = {
    success: "M6.25 10l2.5 2.5 5-5M18.33 10a8.33 8.33 0 1 1-16.66 0 8.33 8.33 0 0 1 16.66 0Z",
    error: "M10 6.67V10m0 3.33h.01M18.33 10a8.33 8.33 0 1 1-16.66 0 8.33 8.33 0 0 1 16.66 0Z",
    warning: "M10 6.67V10m0 3.33h.01M18.33 10a8.33 8.33 0 1 1-16.66 0 8.33 8.33 0 0 1 16.66 0Z",
    info: "M10 13.33V10m0-3.33h.01M18.33 10a8.33 8.33 0 1 1-16.66 0 8.33 8.33 0 0 1 16.66 0Z",
    brand: "M10 13.33V10m0-3.33h.01M18.33 10a8.33 8.33 0 1 1-16.66 0 8.33 8.33 0 0 1 16.66 0Z",
    gray: "M10 13.33V10m0-3.33h.01M18.33 10a8.33 8.33 0 1 1-16.66 0 8.33 8.33 0 0 1 16.66 0Z"
  };
  var NT_OWN = ["title", "children", "description", "color", "icon", "iconStyle", "avatar", "image", "imageAlt", "progress", "progressLabel",
    "actions", "onClose", "closeLabel", "layout", "dismissAfter", "className", "role"];
  /**
   * Notification — floating toast card. layout: desktop (icon left) | mobile (icon on top, full width).
   * Leading: color + outline icon (default) · iconStyle "modern" (40px box) · avatar {src,name,time,status} · icon={false} for none.
   * image (left on desktop, inside on mobile) · progress (0–100) · actions [{label,onClick,href}] (last = brand link) · onClose · dismissAfter (ms).
   */
  var Notification = React.forwardRef(function Notification(props, ref) {
    var color = NT_COLORS.indexOf(props.color) >= 0 ? props.color : "brand";
    var layout = props.layout === "mobile" ? "mobile" : "desktop";
    var modern = props.iconStyle === "modern";
    var av = props.avatar;
    var hover = React.useRef(false);
    var onClose = props.onClose, after = props.dismissAfter;
    var closeRef = React.useRef(onClose); closeRef.current = onClose;
    React.useEffect(function () {
      if (!after || !closeRef.current) return;
      var left = after;
      var iv = setInterval(function () {
        if (hover.current) return;
        left -= 100;
        if (left <= 0) { clearInterval(iv); closeRef.current && closeRef.current("timeout"); }
      }, 100);
      return function () { clearInterval(iv); };
    }, [after]);

    var lead = null;
    if (av) lead = h(Avatar, { size: "md", src: av.src, alt: av.alt || av.name, name: av.name, status: av.status });
    else if (props.icon !== false && !(props.icon == null && props.image)) {
      var glyph = props.icon || h("svg", { viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true" },
        h("path", { d: NT_ICONS[color], stroke: "currentColor", strokeWidth: 1.67, strokeLinecap: "round", strokeLinejoin: "round" }));
      lead = modern
        ? h("span", { className: "jsk-ntf__ficon jsk-ntf__ficon--modern", "aria-hidden": "true" }, glyph)
        : h("span", { className: "jsk-ntf__ficon jsk-ntf__ficon--" + color, "aria-hidden": "true" }, glyph);
    }
    var desc = props.description != null ? props.description : props.children;
    var head = av
      ? h("div", { className: "jsk-ntf__head" }, h("span", { className: "jsk-ntf__title" }, av.name), av.time ? h("span", { className: "jsk-ntf__time" }, av.time) : null)
      : props.title != null ? h("div", { className: "jsk-ntf__title" }, props.title) : null;
    var text = h("div", { className: "jsk-ntf__text" }, head, desc != null ? h("div", { className: "jsk-ntf__desc" }, desc) : null);
    var acts = props.actions && props.actions.length ? h("div", { className: "jsk-ntf__actions" }, props.actions.map(function (a, i) {
      var last = i === props.actions.length - 1;
      return h(Button, Object.assign({ key: i, size: "sm", hierarchy: a.hierarchy || (last ? "link-color" : "link-gray") }, omit(a, ["label", "hierarchy"])), a.label);
    })) : null;
    var prog = props.progress != null ? h(ProgressBar, { className: "jsk-ntf__progress", value: props.progress, label: "bottom",
      format: props.progressLabel ? (typeof props.progressLabel === "function" ? props.progressLabel : function () { return props.progressLabel; }) : undefined }) : null;
    var img = props.image ? h("div", { className: "jsk-ntf__img" }, h("img", { src: props.image, alt: props.imageAlt || "" })) : null;
    var sideImg = layout === "desktop" && img;
    var close = onClose ? h(CloseButton, { size: "sm", className: "jsk-ntf__close", "aria-label": props.closeLabel || "Dismiss notification", onClick: function () { onClose("close"); } }) : null;
    var stacked = layout === "mobile";
    var body = h("div", { className: "jsk-ntf__body" + (lead && !stacked ? " has-lead" : "") + (lead && !modern && !av ? " has-ring" : "") },
      lead ? h("div", { className: "jsk-ntf__lead" }, lead) : null,
      h("div", { className: "jsk-ntf__content" }, text, !sideImg ? img : null, prog, acts));
    var role = props.role || (color === "error" || color === "warning" ? "alert" : "status");
    return h("div", Object.assign(omit(props, NT_OWN), { ref: ref, role: role,
        className: "jsk-ntf jsk-ntf--" + layout + (sideImg ? " has-side-img" : "") + (close ? " has-close" : "") + (props.className ? " " + props.className : ""),
        onMouseEnter: function (e) { hover.current = true; props.onMouseEnter && props.onMouseEnter(e); },
        onMouseLeave: function (e) { hover.current = false; props.onMouseLeave && props.onMouseLeave(e); },
        onFocus: function (e) { hover.current = true; props.onFocus && props.onFocus(e); },
        onBlur: function (e) { hover.current = false; props.onBlur && props.onBlur(e); } }),
      sideImg ? img : null, body, close);
  });
  Notification.displayName = "Notification";

  /** NotificationRegion — fixed stack for toasts. placement: top-right (default) | top-left | bottom-right | bottom-left | top-center | bottom-center. */
  var NotificationRegion = React.forwardRef(function NotificationRegion(props, ref) {
    var pl = ["top-right", "top-left", "bottom-right", "bottom-left", "top-center", "bottom-center"].indexOf(props.placement) >= 0 ? props.placement : "top-right";
    return h("section", Object.assign(omit(props, ["placement", "className", "inline"]), { ref: ref, "aria-label": props["aria-label"] || "Notifications",
        className: "jsk-ntf-region jsk-ntf-region--" + pl + (props.inline ? " is-inline" : "") + (props.className ? " " + props.className : "") }), props.children);
  });
  NotificationRegion.displayName = "NotificationRegion";


  /* ---------- FeaturedIcon ---------- */
  var FIC_TYPES = ["light", "gradient", "dark", "outline", "modern", "modern-neue"];
  var FIC_SIZES = { sm: 16, md: 20, lg: 24, xl: 28 };
  /**
   * FeaturedIcon — icon in a decorative container (modals, empty states, notifications, feature lists).
   * type: light | gradient | dark | outline | modern | modern-neue · color: brand | gray | error | warning | success | info · size: sm 32 | md 40 | lg 48 | xl 56
   */
  var FeaturedIcon = React.forwardRef(function FeaturedIcon(props, ref) {
    var type = FIC_TYPES.indexOf(props.type) >= 0 ? props.type : "light";
    var color = NT_COLORS.indexOf(props.color) >= 0 ? props.color : "brand";
    if (type === "modern" || type === "modern-neue") color = "gray";
    var size = FIC_SIZES[props.size] ? props.size : "md";
    var glyphPx = type === "gradient" ? (size === "sm" || size === "md" ? 16 : 20) : FIC_SIZES[size];
    var glyph = props.icon || h("svg", { viewBox: "0 0 20 20", fill: "none" },
      h("path", { d: NT_ICONS[color], stroke: "currentColor", strokeWidth: glyphPx >= 28 ? 1.43 : 1.67, strokeLinecap: "round", strokeLinejoin: "round" }));
    var label = props["aria-label"];
    var inner = h("span", { className: "jsk-fic__glyph", style: { "--fic-g": glyphPx + "px" } }, glyph);
    if (type === "gradient" || type === "modern-neue") inner = h("span", { className: "jsk-fic__inner" }, inner);
    return h("span", Object.assign(omit(props, ["type", "color", "size", "icon", "className"]), { ref: ref,
        role: label ? "img" : undefined, "aria-hidden": label ? undefined : "true",
        className: "jsk-fic jsk-fic--" + type + " jsk-fic--" + color + " jsk-fic--" + size + (props.className ? " " + props.className : "") }), inner);
  });
  FeaturedIcon.displayName = "FeaturedIcon";


  /* ---------- FolderIcon ---------- */
  var FO_FRONT_CLOSED = "M8 13.5h32a7.5 7.5 0 0 1 7.5 7.5v16a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 37V21A7.5 7.5 0 0 1 8 13.5Z";
  var FO_FRONT_OPEN = "M8.6 13.5h36.8a7.5 7.5 0 0 1 7.3 5.8l4 17a7.5 7.5 0 0 1-7.3 9.2H4.6a7.5 7.5 0 0 1-7.3-9.2l4-17a7.5 7.5 0 0 1 7.3-5.8Z";
  /**
   * FolderIcon — folder with a sheet of paper. variant: brand | gray | glass · open (front tilts forward, 54 wide) ·
   * preview (lines on the paper) · count / name (tiny caption on the front) · size (px height, default 48).
   */
  var FolderIcon = React.forwardRef(function FolderIcon(props, ref) {
    var variant = props.variant === "gray" || props.variant === "glass" ? props.variant : "brand";
    var open = !!props.open;
    var size = props.size || 48;
    var w = open ? 54 : 48;
    var uid = (React.useId ? React.useId() : "fo").replace(/[^a-zA-Z0-9_-]/g, "");
    var front = open ? FO_FRONT_OPEN : FO_FRONT_CLOSED;
    var ox = open ? 3 : 0;
    var paper = h("rect", { x: 3 + ox, y: 10, width: 42, height: 32, rx: 4, className: "jsk-folder__paper" });
    var lines = props.preview ? h("g", { className: "jsk-folder__lines" },
      h("rect", { x: 7 + ox, y: 18, width: 34, height: 1.5, rx: 1 }), h("rect", { x: 7 + ox, y: 22.5, width: 24, height: 1, rx: 1 }),
      h("rect", { x: 7 + ox, y: 26.5, width: 32, height: 1, rx: 1 }), h("rect", { x: 7 + ox, y: 30.5, width: 22, height: 1, rx: 1 })) : null;
    var caption = props.count != null || props.name ? h("g", { className: "jsk-folder__caption" },
      props.count != null ? h("text", { x: 4 + ox, y: 21 }, h("tspan", null, String(props.count)), h("tspan", { dx: 1, opacity: .6 }, props.countLabel || "items")) : null,
      props.name ? h("g", null, h("circle", { cx: 5.5 + ox, cy: 39.5, r: 1.5 }), h("text", { x: 9 + ox, y: 41.2 }, props.name)) : null) : null;
    var a11y = props["aria-label"];
    return h("span", Object.assign(omit(props, ["variant", "open", "size", "preview", "count", "countLabel", "name", "className", "style"]), { ref: ref,
        role: a11y ? "img" : undefined, "aria-hidden": a11y ? undefined : "true",
        className: "jsk-folder jsk-folder--" + variant + (open ? " is-open" : "") + (props.preview ? " has-preview" : "") + (props.className ? " " + props.className : ""),
        style: Object.assign({ width: size * w / 48, height: size }, props.style) }),
      h("svg", { viewBox: "0 0 " + w + " 48", fill: "none", overflow: "visible", "aria-hidden": "true" },
        h("defs", null,
          h("linearGradient", { id: uid + "s", x1: "0", y1: "0", x2: "1", y2: "1" }, h("stop", { offset: "0", stopColor: "#fff" }), h("stop", { offset: "1", stopColor: "#fff", stopOpacity: 0 })),
          h("clipPath", { id: uid + "c" }, h("path", { d: front })),
          h("filter", { id: uid + "b", x: "-20%", y: "-20%", width: "140%", height: "140%" }, h("feGaussianBlur", { stdDeviation: 1.2 }))),
        paper, lines,
        variant === "glass" ? h("g", { clipPath: "url(#" + uid + "c)" }, h("g", { filter: "url(#" + uid + "b)" }, h("rect", { x: 3 + ox, y: 10, width: 42, height: 32, rx: 4, className: "jsk-folder__paper" }), lines)) : null,
        h("path", { d: front, className: "jsk-folder__front" }),
        variant === "glass" ? null : h("path", { d: front, fill: "url(#" + uid + "s)", opacity: .2, stroke: "none" }),
        variant === "glass" ? h("path", { d: front, className: "jsk-folder__hl" }) : null,
        caption));
  });
  FolderIcon.displayName = "FolderIcon";


  /* ---------- CheckIcon ---------- */
  var CK_SIZES = { sm: 20, md: 24, lg: 28, xl: 32 };
  /**
   * CheckIcon — round check mark for feature lists, pricing tables and steps.
   * type: light (tinted circle, bold check) | solid (filled circle, white check) | outline (check-circle line icon)
   * color: brand | gray | success · size: sm 20 | md 24 | lg 28 | xl 32
   */
  var CheckIcon = React.forwardRef(function CheckIcon(props, ref) {
    var type = props.type === "solid" || props.type === "outline" ? props.type : "light";
    var color = props.color === "gray" || props.color === "success" ? props.color : "brand";
    var size = CK_SIZES[props.size] ? props.size : "md";
    var sw = size === "sm" ? 2.4 : 2;
    var a11y = props["aria-label"];
    var art = type === "outline"
      ? [h("circle", { key: "c", cx: 12, cy: 12, r: 10, stroke: "currentColor", strokeWidth: sw }),
         h("path", { key: "p", d: "M7.5 12l3 3 6-6", stroke: "currentColor", strokeWidth: sw, strokeLinecap: "round", strokeLinejoin: "round" })]
      : type === "solid"
        ? [h("path", { key: "p", d: "M7.5 12l3 3 6-6", stroke: "currentColor", strokeWidth: sw, strokeLinecap: "round", strokeLinejoin: "round" })]
        : [h("path", { key: "p", d: "M7.6 12.7l3.1 3.1 6.4-6.9", stroke: "currentColor", strokeWidth: size === "sm" ? 3.1 : 2.75, strokeLinecap: "round", strokeLinejoin: "round" })];
    return h("span", Object.assign(omit(props, ["type", "color", "size", "className"]), { ref: ref,
        role: a11y ? "img" : undefined, "aria-hidden": a11y ? undefined : "true",
        className: "jsk-check-ic jsk-check-ic--" + type + " jsk-check-ic--" + color + " jsk-check-ic--" + size + (props.className ? " " + props.className : "") }),
      h("svg", { viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true" }, art));
  });
  CheckIcon.displayName = "CheckIcon";


  /* ---------- CheckItem / CheckList ---------- */
  var CI_ICON = { sm: "md", md: "lg", lg: "xl" };
  /**
   * CheckItem — check icon + text row for feature lists.
   * size: sm (icon 24) | md (28) | lg (32) · textSize: md 16/24 | lg 18/28 · type: light | outline | solid · color: brand | success | gray
   */
  var CheckItem = React.forwardRef(function CheckItem(props, ref) {
    var size = CI_ICON[props.size] ? props.size : "sm";
    var textSize = props.textSize === "lg" ? "lg" : "md";
    var Tag = props.as || "li";
    return h(Tag, Object.assign(omit(props, ["size", "textSize", "type", "color", "icon", "as", "children", "className"]), { ref: ref,
        className: "jsk-checkitem jsk-checkitem--" + size + " jsk-checkitem--t" + textSize + (props.className ? " " + props.className : "") }),
      props.icon || h(CheckIcon, { type: props.type, color: props.color, size: CI_ICON[size] }),
      h("span", { className: "jsk-checkitem__text" }, props.children));
  });
  CheckItem.displayName = "CheckItem";

  /** CheckList — <ul> of CheckItems; passes size / textSize / type / color down. */
  var CheckList = React.forwardRef(function CheckList(props, ref) {
    var shared = { size: props.size, textSize: props.textSize, type: props.type, color: props.color };
    return h("ul", Object.assign(omit(props, ["size", "textSize", "type", "color", "children", "className"]), { ref: ref,
        className: "jsk-checklist" + (props.textSize === "lg" ? " jsk-checklist--lg" : "") + (props.className ? " " + props.className : "") }),
      React.Children.map(props.children, function (c) {
        if (!React.isValidElement(c)) return c ? h(CheckItem, shared, c) : c;
        if (c.type !== CheckItem) return c;
        var p = {}; for (var k in shared) if (shared[k] != null && c.props[k] == null) p[k] = shared[k];
        return React.cloneElement(c, p);
      }));
  });
  CheckList.displayName = "CheckList";


  /* ---------- RatingStar / RatingStars ---------- */
  var RT_STAR = "M9.07 1.95a1 1 0 0 1 1.86 0l1.95 4.38 4.77.5a1 1 0 0 1 .57 1.77l-3.56 3.21 1 4.69a1 1 0 0 1-1.5 1.09L10 15.18l-4.16 2.4a1 1 0 0 1-1.5-1.09l1-4.69L1.78 8.6a1 1 0 0 1 .57-1.77l4.77-.5 1.95-4.38Z";
  var RT_HEART = "M10 17.2c-.3 0-.6-.1-.8-.3C5.3 13.6 1.7 10.6 1.7 6.9c0-2.4 1.9-4.3 4.2-4.3 1.6 0 3 .8 4.1 2.1 1.1-1.3 2.5-2.1 4.1-2.1 2.3 0 4.2 1.9 4.2 4.3 0 3.7-3.6 6.7-7.5 10-.2.2-.5.3-.8.3Z";
  var RT_SIZES = { sm: 16, md: 20, lg: 24 };
  /** RatingStar — one star (or heart) filled 0–1, clipped left-to-right across the shape. */
  var RatingStar = React.forwardRef(function RatingStar(props, ref) {
    var f = Math.max(0, Math.min(1, Number(props.fill != null ? props.fill : 1) || 0));
    var x = f <= 0 ? 0 : f >= 1 ? 20 : 1 + f * 18;
    var uid = (React.useId ? React.useId() : "rt").replace(/[^a-zA-Z0-9_-]/g, "");
    var d = props.shape === "heart" ? RT_HEART : RT_STAR;
    var px = RT_SIZES[props.size] || props.size || 20;
    return h("span", Object.assign(omit(props, ["fill", "shape", "size", "className", "style"]), { ref: ref, "aria-hidden": props["aria-label"] ? undefined : "true",
        role: props["aria-label"] ? "img" : undefined,
        className: "jsk-star" + (props.shape === "heart" ? " jsk-star--heart" : "") + (props.className ? " " + props.className : ""),
        style: Object.assign({ width: px, height: px }, props.style) }),
      h("svg", { viewBox: "0 0 20 20", "aria-hidden": "true" },
        h("defs", null, h("clipPath", { id: uid }, h("rect", { x: 0, y: 0, width: x, height: 20 }))),
        h("path", { d: d, className: "jsk-star__bg" }),
        x > 0 ? h("path", { d: d, className: "jsk-star__fg", clipPath: "url(#" + uid + ")" }) : null));
  });
  RatingStar.displayName = "RatingStar";

  /**
   * RatingStars — row of stars for a score. value (0–max, fractions OK) · max 5 · size sm 16 | md 20 | lg 24 · shape star | heart.
   * Pass onChange to make it an input (whole steps, hover preview, arrow keys, Home/End).
   */
  var RatingStars = React.forwardRef(function RatingStars(props, ref) {
    var max = props.max > 0 ? props.max : 5;
    var value = Math.max(0, Math.min(max, Number(props.value) || 0));
    var hov = React.useState(null), hover = hov[0], setHover = hov[1];
    var interactive = typeof props.onChange === "function" && !props.disabled;
    var shown = interactive && hover != null ? hover : value;
    var size = RT_SIZES[props.size] ? props.size : "md";
    var label = props["aria-label"] || ("Rating: " + (Math.round(value * 10) / 10) + " out of " + max);
    var stars = [];
    for (var i = 0; i < max; i++) stars.push(h(RatingStar, { key: i, size: size, shape: props.shape, fill: shown - i,
      onMouseEnter: interactive ? (function (n) { return function () { setHover(n); }; })(i + 1) : undefined,
      onClick: interactive ? (function (n) { return function () { props.onChange(n === value && props.clearable ? 0 : n); }; })(i + 1) : undefined }));
    function onKey(e) {
      var v = Math.round(value), n = null;
      if (e.key === "ArrowRight" || e.key === "ArrowUp") n = Math.min(max, v + 1);
      else if (e.key === "ArrowLeft" || e.key === "ArrowDown") n = Math.max(props.clearable ? 0 : 1, v - 1);
      else if (e.key === "Home") n = props.clearable ? 0 : 1; else if (e.key === "End") n = max;
      if (n != null) { e.preventDefault(); props.onChange(n); }
    }
    var common = omit(props, ["value", "max", "size", "shape", "onChange", "clearable", "disabled", "className", "aria-label"]);
    var cls = "jsk-stars jsk-stars--" + size + (interactive ? " is-interactive" : "") + (props.disabled ? " is-disabled" : "") + (props.className ? " " + props.className : "");
    if (!interactive) return h("span", Object.assign(common, { ref: ref, className: cls, role: "img", "aria-label": label }), stars);
    return h("span", Object.assign(common, { ref: ref, className: cls, role: "slider", tabIndex: 0,
        "aria-label": props["aria-label"] || "Rating", "aria-valuemin": props.clearable ? 0 : 1, "aria-valuemax": max, "aria-valuenow": Math.round(value),
        "aria-valuetext": Math.round(value) + " out of " + max, onKeyDown: onKey, onMouseLeave: function () { setHover(null); } }), stars);
  });
  RatingStars.displayName = "RatingStars";

  var MB_COLORS = ["gray", "brand", "success", "error", "warning", "info"];
  var MB_WARN = "M10 7.5v3.33m0 3.34h.01M8.58 3.24 1.73 15.08c-.38.66-.57.99-.54 1.26.02.24.15.45.34.6.22.16.6.16 1.36.16h13.7c.76 0 1.14 0 1.36-.16.2-.15.32-.36.34-.6.03-.27-.16-.6-.54-1.26L11.42 3.24c-.38-.65-.57-.98-.82-1.09a.83.83 0 0 0-.7 0c-.25.11-.44.44-.82 1.09Z";
  var MB_OWN = ["children", "color", "variant", "size", "icon", "onClose", "closeLabel", "action", "className", "role"];
  /**
   * MessageBar — compact one-line message strip (status, confirmation, warning) with optional close.
   * color: gray | brand | success | error | warning | info · variant: solid | light (gray is always outlined white)
   * size: md (desktop, 14px) | sm (mobile, 12px) · icon: custom node or false · action: trailing node · onClose
   */
  var MessageBar = React.forwardRef(function MessageBar(props, ref) {
    var color = MB_COLORS.indexOf(props.color) >= 0 ? props.color : "gray";
    var variant = color === "gray" ? "outline" : (props.variant === "light" ? "light" : "solid");
    var size = props.size === "sm" ? "sm" : "md";
    var rest = omit(props, MB_OWN);
    var role = props.role || (color === "error" || color === "warning" ? "alert" : "status");
    var icon = props.icon === false ? null : (props.icon || h("svg", { viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true", className: "jsk-mb__icon" },
      h("path", { d: color === "warning" ? MB_WARN : NT_ICONS[color], stroke: "currentColor", strokeWidth: 1.67, strokeLinecap: "round", strokeLinejoin: "round" })));
    var cls = ["jsk-mb", "jsk-mb--" + size, "jsk-mb--" + variant, "jsk-mb--" + color];
    if (props.className) cls.push(props.className);
    return h("div", Object.assign({}, rest, { ref: ref, role: role, className: cls.join(" ") }),
      h("div", { className: "jsk-mb__body" },
        icon ? h("span", { className: "jsk-mb__lead" }, icon) : null,
        h("div", { className: "jsk-mb__text" }, props.children)),
      props.action ? h("div", { className: "jsk-mb__action" }, props.action) : null,
      props.onClose ? h(CloseButton, { size: "sm", onDark: variant === "solid", className: "jsk-mb__close",
        "aria-label": props.closeLabel || "Dismiss", onClick: props.onClose }) : null);
  });
  MessageBar.displayName = "MessageBar";

  /* ---------- Alert & Banner ---------- */
  function alGlyph(color) {
    return h("svg", { viewBox: "0 0 20 20", fill: "none" },
      h("path", { d: color === "warning" ? MB_WARN : NT_ICONS[color], stroke: "currentColor", strokeWidth: 1.67, strokeLinecap: "round", strokeLinejoin: "round" }));
  }
  function alLead(props, color) {
    if (props.icon === false) return null;
    if (props.iconStyle === "modern") return h(FeaturedIcon, { type: "modern", size: "md", icon: props.icon || alGlyph("gray") });
    return h(FeaturedIcon, { type: "outline", color: color, size: "md", icon: props.icon || alGlyph(color) });
  }
  function alActions(list, style, size, reverse) {
    if (!list || !list.length) return null;
    var out = list.map(function (a, i) {
      var last = i === list.length - 1 && list.length > 1;
      var hier = style === "button" ? (last ? "primary" : "secondary") : (last ? "link-color" : "link-gray");
      return h(Button, { key: i, hierarchy: hier, size: size || (style === "button" ? "md" : "sm"), href: a.href, onClick: a.onClick, disabled: a.disabled }, a.label);
    });
    return reverse ? out.reverse() : out;
  }
  var AL_OWN = ["title", "children", "description", "color", "variant", "icon", "iconStyle", "actions", "actionStyle", "onClose", "closeLabel", "layout", "className", "role"];
  /**
   * Alert — inline callout card with title, supporting text, actions and close.
   * color: gray | brand | error | warning | success | info · variant: default (white, bordered) | filled (tinted)
   * layout: desktop (icon left) | mobile (icon on top) · icon / iconStyle "modern" / icon={false}
   * actions [{label, onClick, href}] — rendered as link buttons, the last one in brand colour · onClose
   */
  var Alert = React.forwardRef(function Alert(props, ref) {
    var color = NT_COLORS.indexOf(props.color) >= 0 ? props.color : "gray";
    var variant = props.variant === "filled" ? "filled" : "default";
    var layout = props.layout === "mobile" ? "mobile" : "desktop";
    var role = props.role || (color === "error" || color === "warning" ? "alert" : "status");
    var desc = props.description != null ? props.description : props.children;
    var acts = alActions(props.actions, "link");
    var cls = ["jsk-al", "jsk-al--" + variant, "jsk-al--" + color, "jsk-al--" + layout];
    if (props.onClose) cls.push("has-close");
    if (props.className) cls.push(props.className);
    var lead = alLead(props, color);
    return h("div", Object.assign(omit(props, AL_OWN), { ref: ref, role: role, className: cls.join(" ") }),
      lead ? h("span", { className: "jsk-al__lead" }, lead) : null,
      h("div", { className: "jsk-al__content" },
        h("div", { className: "jsk-al__text" },
          props.title ? h("div", { className: "jsk-al__title" }, props.title) : null,
          desc ? h("div", { className: "jsk-al__desc" }, desc) : null),
        acts ? h("div", { className: "jsk-al__actions" }, acts) : null),
      props.onClose ? h(CloseButton, { size: "sm", className: "jsk-al__close", "aria-label": props.closeLabel || "Dismiss", onClick: props.onClose }) : null);
  });
  Alert.displayName = "Alert";

  var BN_OWN = AL_OWN.concat(["position"]);
  /**
   * Banner — full-width bar for page- or app-level announcements (top of page on desktop, bottom sheet style on mobile).
   * color · variant: default | filled · layout: desktop | mobile · icon / iconStyle "modern" (desktop only)
   * actions [{label, onClick, href}] · actionStyle: button (secondary + primary) | link · onClose · position: top | bottom
   */
  var Banner = React.forwardRef(function Banner(props, ref) {
    var color = NT_COLORS.indexOf(props.color) >= 0 ? props.color : "gray";
    var variant = props.variant === "filled" ? "filled" : "default";
    var layout = props.layout === "mobile" ? "mobile" : "desktop";
    var position = props.position || (layout === "mobile" ? "bottom" : "top");
    var aStyle = props.actionStyle === "link" ? "link" : "button";
    var role = props.role || (color === "error" || color === "warning" ? "alert" : "region");
    var desc = props.description != null ? props.description : props.children;
    var acts = alActions(props.actions, aStyle, null, layout === "mobile" && aStyle === "button");
    var cls = ["jsk-bn", "jsk-bn--" + variant, "jsk-bn--" + color, "jsk-bn--" + layout, "jsk-bn--" + position, "jsk-bn--act-" + aStyle];
    if (props.className) cls.push(props.className);
    var lead = layout === "desktop" ? alLead(props, color) : null;
    var close = props.onClose ? h(CloseButton, { size: "sm", className: "jsk-bn__close", "aria-label": props.closeLabel || "Dismiss", onClick: props.onClose }) : null;
    return h("div", Object.assign(omit(props, BN_OWN), { ref: ref, role: role, "aria-label": role === "region" ? (props["aria-label"] || "Announcement") : props["aria-label"], className: cls.join(" ") }),
      h("div", { className: "jsk-bn__inner" },
        lead ? h("span", { className: "jsk-bn__lead" }, lead) : null,
        h("div", { className: "jsk-bn__text" },
          props.title ? h("span", { className: "jsk-bn__title" }, props.title) : null,
          desc ? h("span", { className: "jsk-bn__desc" }, desc) : null),
        acts || (layout === "desktop" && close) ? h("div", { className: "jsk-bn__side" },
          acts ? h("div", { className: "jsk-bn__actions" }, acts) : null,
          layout === "desktop" ? close : null) : null,
        layout === "mobile" ? close : null));
  });
  Banner.displayName = "Banner";

  /* ---------- Breadcrumbs ---------- */
  var BC_HOME = "M6.67 14.17h6.66M9.18 2.3 3.53 6.7c-.38.3-.57.44-.7.62-.12.17-.21.35-.26.55-.07.21-.07.45-.07.93v6.03c0 .93 0 1.4.18 1.76.16.31.42.57.73.73.36.18.83.18 1.76.18h9.66c.93 0 1.4 0 1.76-.18.31-.16.57-.42.73-.73.18-.36.18-.83.18-1.76V8.8c0-.48 0-.72-.06-.93a1.67 1.67 0 0 0-.26-.55c-.13-.18-.32-.33-.7-.62l-5.65-4.4c-.3-.23-.44-.34-.6-.39a.83.83 0 0 0-.44 0c-.16.05-.3.16-.6.39Z";
  function bcSep(divider, small) {
    if (divider === "slash") return small
      ? h("svg", { className: "jsk-bc__sep", viewBox: "0 0 16 16", width: 16, height: 16, fill: "none", "aria-hidden": "true" }, h("path", { d: "M11.33 1.33 4.67 14.67", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" }))
      : h("svg", { className: "jsk-bc__sep", viewBox: "0 0 20 20", width: 20, height: 20, fill: "none", "aria-hidden": "true" }, h("path", { d: "M14.17 1.67 5.83 18.33", stroke: "currentColor", strokeWidth: 1.67, strokeLinecap: "round" }));
    return h("svg", { className: "jsk-bc__sep", viewBox: "0 0 16 16", width: 16, height: 16, fill: "none", "aria-hidden": "true" }, h("path", { d: "m6 12 4-4-4-4", stroke: "currentColor", strokeWidth: 1.33, strokeLinecap: "round", strokeLinejoin: "round" }));
  }
  function bcAvatar(av, size) {
    var name = av.name || "";
    var ini = name.split(/\s+/).filter(Boolean).slice(0, 2).map(function (w) { return w[0]; }).join("").toUpperCase();
    return h("span", { className: "jsk-bc__av jsk-bc__av--" + size, "aria-hidden": "true" },
      h("span", { className: "jsk-bc__av-img" }, av.src ? h("img", { src: av.src, alt: "" }) : ini));
  }
  function BcAccountMenu(props) {
    var it = props.item, menu = it.menu;
    var _o = React.useState(false), open = _o[0], setOpen = _o[1];
    var ref = React.useRef(null), listRef = React.useRef(null);
    var uid = (React.useId ? React.useId() : "bc").replace(/[^a-zA-Z0-9_-]/g, "");
    React.useEffect(function () {
      if (!open) return;
      function onDoc(e) { if (ref.current && !ref.current.contains(e.target)) setOpen(false); }
      document.addEventListener("mousedown", onDoc);
      var first = listRef.current && (listRef.current.querySelector('[aria-checked="true"]') || listRef.current.querySelector('[role="menuitemradio"]'));
      if (first) first.focus();
      return function () { document.removeEventListener("mousedown", onDoc); };
    }, [open]);
    function onKey(e) {
      var items = listRef.current ? Array.prototype.slice.call(listRef.current.querySelectorAll('[role="menuitemradio"]')) : [];
      var i = items.indexOf(document.activeElement);
      if (e.key === "Escape") { e.preventDefault(); setOpen(false); ref.current && ref.current.querySelector(".jsk-bc__acct").focus(); }
      else if (e.key === "ArrowDown") { e.preventDefault(); items[(i + 1) % items.length].focus(); }
      else if (e.key === "ArrowUp") { e.preventDefault(); items[(i - 1 + items.length) % items.length].focus(); }
      else if (e.key === "Home") { e.preventDefault(); items[0].focus(); }
      else if (e.key === "End") { e.preventDefault(); items[items.length - 1].focus(); }
      else if (e.key === "Tab") setOpen(false);
    }
    function pick(opt) {
      menu.onChange && menu.onChange(opt.value != null ? opt.value : opt.name, opt);
      setOpen(false);
      ref.current && ref.current.querySelector(".jsk-bc__acct").focus();
    }
    return h("span", { ref: ref, className: "jsk-bc__menuwrap" },
      h("button", { type: "button", className: "jsk-bc__acct jsk-bc__acct--btn", "aria-haspopup": "menu", "aria-expanded": open, "aria-controls": uid,
          onClick: function () { setOpen(!open); },
          onKeyDown: function (e) { if (e.key === "ArrowDown") { e.preventDefault(); setOpen(true); } } },
        it.avatar ? bcAvatar(it.avatar, "xs") : null,
        it.label != null ? h("span", { className: "jsk-bc__acct-name" }, it.label) : null,
        h("svg", { className: "jsk-bc__caret", viewBox: "0 0 12 12", width: 12, height: 12, fill: "none", "aria-hidden": "true" },
          h("path", { d: "m3 4.5 3 3 3-3", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }))),
      open ? h("div", { id: uid, ref: listRef, role: "menu", "aria-label": menu.label || "Switch account", className: "jsk-bc__menu", onKeyDown: onKey },
        (menu.items || []).map(function (opt, i) {
          var val = opt.value != null ? opt.value : opt.name;
          var on = val === menu.value;
          return h("div", { key: i, role: "menuitemradio", "aria-checked": on, tabIndex: -1, className: "jsk-bc__opt" + (on ? " is-on" : ""),
              onClick: function () { pick(opt); },
              onKeyDown: function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(opt); } } },
            bcAvatar(opt, "sm"),
            h("span", { className: "jsk-bc__opt-text" },
              h("span", { className: "jsk-bc__opt-name" }, opt.name),
              opt.email ? h("span", { className: "jsk-bc__opt-sub" }, opt.email) : null),
            h("span", { className: "jsk-bc__radio" + (on ? " is-on" : ""), "aria-hidden": "true" }));
        })) : null);
  }
  var BC_OWN = ["items", "type", "divider", "size", "bordered", "maxItems", "label", "className"];
  /**
   * Breadcrumbs — trail of links to the current page (last item = current).
   * items [{label, href, onClick, icon:"home"|node, avatar:{src,name}, menu:{items:[{name,email,src,value}], value, onChange}}]
   * type: text | button · divider: chevron | slash · size: md (gap 8/4) | sm (6/2) · bordered (rules above/below) · maxItems → collapses the middle into "…"
   */
  var Breadcrumbs = React.forwardRef(function Breadcrumbs(props, ref) {
    var type = props.type === "button" ? "button" : "text";
    var divider = props.divider === "slash" ? "slash" : "chevron";
    var size = props.size === "sm" ? "sm" : "md";
    var items = props.items || [];
    var _e = React.useState(false), expanded = _e[0], setExpanded = _e[1];
    var hasAcct = items.some(function (it) { return it.avatar || it.menu; });
    var view = items.map(function (it, i) { return { it: it, i: i }; });
    var max = props.maxItems;
    if (max && !expanded && items.length > max && max >= 2) {
      view = [view[0], { ellipsis: true }].concat(view.slice(items.length - (max - 1)));
    }
    var last = items.length - 1;
    var children = [];
    view.forEach(function (v, k) {
      if (k > 0) children.push(h("li", { key: "s" + k, className: "jsk-bc__sepli", "aria-hidden": "true" }, bcSep(divider, hasAcct)));
      var node;
      if (v.ellipsis) {
        node = h("button", { type: "button", className: "jsk-bc__link jsk-bc__more", "aria-label": "Show all " + items.length + " levels", onClick: function () { setExpanded(true); } }, "…");
      } else {
        var it = v.it, cur = v.i === last;
        if (it.menu) node = h(BcAccountMenu, { item: it });
        else if (it.avatar) {
          var inner = [bcAvatar(it.avatar, "xs"), it.label != null ? h("span", { key: "n", className: "jsk-bc__acct-name" }, it.label) : null];
          node = it.href || it.onClick
            ? h(it.href ? "a" : "button", { className: "jsk-bc__acct jsk-bc__acct--btn", href: it.href, type: it.href ? undefined : "button", onClick: it.onClick, "aria-label": it.label == null ? it.avatar.name : undefined }, inner)
            : h("span", { className: "jsk-bc__acct", "aria-label": it.label == null ? it.avatar.name : undefined }, inner);
        } else {
          var isIcon = it.icon != null;
          var content = isIcon
            ? (it.icon === "home" || it.icon === true
                ? h("svg", { viewBox: "0 0 20 20", width: 20, height: 20, fill: "none", "aria-hidden": "true" }, h("path", { d: BC_HOME, stroke: "currentColor", strokeWidth: 1.67, strokeLinecap: "round", strokeLinejoin: "round" }))
                : it.icon)
            : it.label;
          var cls = "jsk-bc__link" + (isIcon ? " jsk-bc__link--icon" : "") + (cur ? " is-current" : "");
          var a = { className: cls, "aria-current": cur ? "page" : undefined, "aria-label": isIcon ? (it.label || "Home") : undefined };
          if (cur && !it.onClick) node = h("span", a, content);
          else if (it.href) node = h("a", Object.assign(a, { href: it.href, onClick: it.onClick }), content);
          else node = h("button", Object.assign(a, { type: "button", onClick: it.onClick }), content);
        }
      }
      children.push(h("li", { key: "i" + k, className: "jsk-bc__item" }, node));
    });
    var cls = ["jsk-bc", "jsk-bc--" + type, "jsk-bc--" + size];
    if (props.bordered) cls.push("jsk-bc--bordered");
    if (hasAcct) cls.push("jsk-bc--account");
    if (props.className) cls.push(props.className);
    return h("nav", Object.assign(omit(props, BC_OWN), { ref: ref, "aria-label": props.label || "Breadcrumb", className: cls.join(" ") }),
      h("ol", { className: "jsk-bc__list" }, children));
  });
  Breadcrumbs.displayName = "Breadcrumbs";

  /* ---------- Chart ---------- */
  var CH_LINE = ["--utility-brand-600", "--utility-brand-400", "--utility-brand-700", "--utility-brand-300", "--utility-brand-500", "--utility-brand-200"];
  var CH_BAR = ["--utility-brand-700", "--utility-brand-500", "--utility-gray-200", "--utility-brand-300", "--utility-brand-600", "--utility-brand-200"];
  function chColor(c, i, type) {
    var p = type === "bar" ? CH_BAR : CH_LINE;
    c = c || p[i % p.length];
    return c.indexOf("--") === 0 ? "var(" + c + ")" : c;
  }
  function chNiceMax(v, ticks) {
    if (!(v > 0)) return ticks;
    var raw = v / ticks, mag = Math.pow(10, Math.floor(Math.log10(raw))), f = raw / mag;
    var step = (f <= 1 ? 1 : f <= 2 ? 2 : f <= 2.5 ? 2.5 : f <= 5 ? 5 : 10) * mag;
    return step * ticks;
  }
  /* monotone cubic (no overshoot) */
  function chPath(pts) {
    var n = pts.length;
    if (!n) return "";
    if (n === 1) return "M" + pts[0][0] + "," + pts[0][1];
    var dx = [], m = [], t = [], i;
    for (i = 0; i < n - 1; i++) { dx[i] = pts[i + 1][0] - pts[i][0]; m[i] = (pts[i + 1][1] - pts[i][1]) / dx[i]; }
    t[0] = m[0]; t[n - 1] = m[n - 2];
    for (i = 1; i < n - 1; i++) t[i] = m[i - 1] * m[i] <= 0 ? 0 : (3 * (dx[i - 1] + dx[i])) / ((2 * dx[i] + dx[i - 1]) / m[i - 1] + (dx[i] + 2 * dx[i - 1]) / m[i]);
    var d = "M" + pts[0][0].toFixed(2) + "," + pts[0][1].toFixed(2);
    for (i = 0; i < n - 1; i++) {
      var h3 = dx[i] / 3;
      d += "C" + (pts[i][0] + h3).toFixed(2) + "," + (pts[i][1] + t[i] * h3).toFixed(2) + " " + (pts[i + 1][0] - h3).toFixed(2) + "," + (pts[i + 1][1] - t[i + 1] * h3).toFixed(2) + " " + pts[i + 1][0].toFixed(2) + "," + pts[i + 1][1].toFixed(2);
    }
    return d;
  }
  function chLegend(series, type, pos) {
    return h("ul", { className: "jsk-ch__legend jsk-ch__legend--" + pos, "aria-hidden": "true" },
      series.map(function (s, i) {
        return h("li", { key: s.key, className: "jsk-ch__legend-item" },
          h("span", { className: "jsk-ch__dot-wrap" }, h("span", { className: "jsk-ch__dot", style: { background: chColor(s.color, i, type) } })),
          h("span", null, s.name || s.key));
      }));
  }
  var Chart = React.forwardRef(function Chart(props, ref) {
    var type = props.type || "line", size = props.size || "md", sm = size === "sm";
    var data = props.data || [], series = props.series || [], xKey = props.xKey || "label";
    var legend = props.legend || false, axisLabels = !!props.axisLabels, stacked = props.stacked !== false;
    var ticks = props.yTicks || 5, height = props.height || 240;
    var locale = props.locale || "id-ID";
    var fmt = props.formatValue || function (v) { return new Intl.NumberFormat(locale).format(v); };
    var every = props.xLabelEvery || (sm && data.length > 7 ? 2 : 1);
    var rest = omit(props, ["type", "size", "data", "series", "xKey", "legend", "axisLabels", "stacked", "yTicks", "yMax", "height", "locale", "formatValue", "xLabelEvery", "xLabel", "yLabel", "label", "className", "style", "marker", "guide", "tooltipLabel", "area", "defaultActive"]);
    var marker = props.marker || "ring", showGuide = props.guide !== false;
    var tipLabel = props.tooltipLabel === false ? null : (props.tooltipLabel || function (d) { return String(d[xKey]); });
    var plotRef = React.useRef(null), touched = React.useRef(false);
    var _w = React.useState(0), W = _w[0], setW = _w[1];
    var _a = React.useState(props.defaultActive != null ? props.defaultActive : null), active = _a[0], setActive = _a[1];
    var uid = (React.useId ? React.useId() : "ch").replace(/[^a-zA-Z0-9_-]/g, "");
    var _h = React.useState(0), H = _h[0], setH = _h[1];
    React.useLayoutEffect(function () {
      var el = plotRef.current; if (!el) return;
      function m() { setW(el.clientWidth); setH(el.clientHeight); }
      m();
      if (typeof ResizeObserver === "undefined") return;
      var ro = new ResizeObserver(m); ro.observe(el);
      return function () { ro.disconnect(); };
    }, []);

    var n = data.length;
    function val(d, s) { var v = Number(d[s.key]); return isFinite(v) ? v : 0; }
    var maxV = 0;
    data.forEach(function (d) {
      if (type === "bar" && stacked) { var sum = 0; series.forEach(function (s) { sum += val(d, s); }); maxV = Math.max(maxV, sum); }
      else series.forEach(function (s) { maxV = Math.max(maxV, val(d, s)); });
    });
    var yMax = props.yMax || chNiceMax(maxV, ticks);

    var left = axisLabels ? 48 : 0, top = 9, bottom = Math.max(top + 1, H - 27);
    var padX = sm ? 12 : 20, barW = sm ? 16 : 32;
    if (type === "bar" && !stacked && series.length > 1) barW = Math.max(4, Math.floor(barW / series.length));
    var groupW = type === "bar" && !stacked ? barW * series.length + 2 * (series.length - 1) : barW;
    if (n > 1 && W > 0) {
      var room = (W - left - 2 * padX) / n;
      if (groupW > room * 0.6) { var sc = Math.max(0.15, (room * 0.6) / groupW); barW = Math.max(2, Math.floor(barW * sc)); groupW = type === "bar" && !stacked ? barW * series.length + 2 * (series.length - 1) : barW; }
    }
    var x0 = left + padX + groupW / 2, x1 = W - padX - groupW / 2;
    if (n > 1 && W > 0 && !props.xLabelEvery) { var ml = 0; data.forEach(function (d) { ml = Math.max(ml, String(d[xKey]).length); }); every = Math.max(every, Math.ceil(Math.max(40, ml * 6.5 + 12) / ((x1 - x0) / (n - 1)))); }
    function cx(i) { return n <= 1 ? (left + W) / 2 : x0 + (i * (x1 - x0)) / (n - 1); }
    function cy(v) { return bottom - (v / yMax) * (bottom - top); }

    var svgKids = [];
    if (W > 0 && H > 0) {
      var grid = [];
      for (var k = 0; k <= ticks; k++) {
        var gy = Math.round(top + (k * (bottom - top)) / ticks) + 0.5;
        grid.push(h("line", { key: "g" + k, className: "jsk-ch__grid", x1: left, x2: W, y1: gy, y2: gy }));
        if (axisLabels) grid.push(h("text", { key: "t" + k, className: "jsk-ch__tick", x: 40, y: gy + 4, textAnchor: "end" }, fmt(yMax * (1 - k / ticks))));
      }
      svgKids.push(h("g", { key: "grid" }, grid));
      if (active != null && showGuide && type !== "bar") {
        var gTop = bottom; series.forEach(function (s) { gTop = Math.min(gTop, cy(val(data[active], s))); });
        var gCol = chColor(series[0] && series[0].color, 0, "line");
        svgKids.push(h("defs", { key: "gd" }, h("linearGradient", { id: uid + "-band", x1: 0, y1: 0, x2: 0, y2: 1 },
          h("stop", { offset: "0%", style: { stopColor: gCol, stopOpacity: 0.14 } }),
          h("stop", { offset: "20%", style: { stopColor: gCol, stopOpacity: 0.14 } }),
          h("stop", { offset: "100%", style: { stopColor: gCol, stopOpacity: 0 } }))),
          h("rect", { key: "guide", className: "jsk-ch__band", x: cx(active) - 6, y: gTop - 6, width: 12, height: Math.max(0, bottom - gTop + 6), rx: 6, style: { fill: "url(#" + uid + "-band)" } }));
      }

      if (type === "bar") {
        var r = sm ? 4 : 0;
        svgKids.push(h("g", { key: "bars" }, data.map(function (d, i) {
          var acc = 0, segs = [];
          series.forEach(function (s, j) {
            var v = val(d, s), bx, by, bh;
            if (stacked) { by = cy(acc + v); bh = cy(acc) - by; bx = cx(i) - barW / 2; acc += v; }
            else { by = cy(v); bh = bottom - by; bx = cx(i) - groupW / 2 + j * (barW + 2); }
            if (bh > 0) segs.push(h("rect", { key: s.key, x: bx, y: by, width: barW, height: bh, style: { fill: chColor(s.color, j, "bar") } }));
          });
          var clip = r ? "url(#" + uid + "-c" + i + ")" : undefined;
          var tot = stacked ? acc : 0;
          return h("g", { key: i, className: "jsk-ch__bar" + (active != null && active !== i ? " is-dim" : "") },
            r && stacked ? h("clipPath", { id: uid + "-c" + i }, h("rect", { x: cx(i) - barW / 2, y: cy(tot), width: barW, height: bottom - cy(tot) + r, rx: r })) : null,
            h("g", { clipPath: r && stacked ? clip : undefined }, segs));
        })));
      } else {
        var defs = [], areas = [], lines = [], dots = [];
        series.forEach(function (s, j) {
          var col = chColor(s.color, j, "line");
          var pts = data.map(function (d, i) { return [cx(i), cy(val(d, s))]; });
          var p = chPath(pts);
          if (props.area !== false && pts.length > 1) {
            defs.push(h("linearGradient", { key: s.key, id: uid + "-g" + j, x1: 0, y1: 0, x2: 0, y2: 1 },
              h("stop", { offset: "0%", style: { stopColor: col, stopOpacity: 0.16 } }),
              h("stop", { offset: "100%", style: { stopColor: col, stopOpacity: 0 } })));
            areas.push(h("path", { key: s.key, d: p + "L" + pts[pts.length - 1][0] + "," + bottom + "L" + pts[0][0] + "," + bottom + "Z", style: { fill: "url(#" + uid + "-g" + j + ")" } }));
          }
          lines.push(h("path", { key: s.key, className: "jsk-ch__line", d: p, style: { stroke: col } }));
          if (active != null && pts[active] && marker !== "none") dots.push(marker === "dot"
            ? h("circle", { key: s.key, className: "jsk-ch__pt jsk-ch__pt--dot", cx: pts[active][0], cy: pts[active][1], r: 3, style: { fill: col } })
            : h("circle", { key: s.key, className: "jsk-ch__pt", cx: pts[active][0], cy: pts[active][1], r: 5, style: { stroke: col } }));
        });
        svgKids.push(h("defs", { key: "defs" }, defs), h("g", { key: "areas" }, areas), h("g", { key: "lines" }, lines), h("g", { key: "dots" }, dots));
      }
      svgKids.push(h("g", { key: "x" }, data.map(function (d, i) {
        if (i % every !== 0 && i !== n - 1) return null;
        if (i === n - 1 && i % every !== 0 && n > 1 && cx(i) - cx(i - (i % every)) < Math.max(32, Math.max(String(d[xKey]).length, String(data[i - (i % every)][xKey]).length) * 6.5 + 8)) return null;
        return h("text", { key: i, className: "jsk-ch__tick" + (active === i ? " is-active" : ""), x: cx(i), y: H - 5, textAnchor: "middle" }, String(d[xKey]));
      })));
    }

    function idxAt(clientX) {
      var rect = plotRef.current.getBoundingClientRect(), x = clientX - rect.left, best = 0, bd = Infinity;
      for (var i = 0; i < n; i++) { var dd = Math.abs(cx(i) - x); if (dd < bd) { bd = dd; best = i; } }
      return best;
    }
    function onKey(e) {
      if (!n) return;
      var i = active == null ? -1 : active;
      if (e.key === "ArrowRight") i = Math.min(n - 1, i + 1);
      else if (e.key === "ArrowLeft") i = i < 0 ? n - 1 : Math.max(0, i - 1);
      else if (e.key === "Home") i = 0;
      else if (e.key === "End") i = n - 1;
      else if (e.key === "Escape") { setActive(null); return; }
      else return;
      e.preventDefault(); touched.current = true; setActive(i);
    }

    var tip = null;
    if (active != null && data[active] && W > 0) {
      var d = data[active], topV = 0;
      series.forEach(function (s) { topV = type === "bar" && stacked ? topV + val(d, s) : Math.max(topV, val(d, s)); });
      var single = series.length === 1, sub = tipLabel ? tipLabel(d, active) : null;
      var half = single ? 48 : 80, tx = Math.max(half, Math.min(W - half, cx(active)));
      var tipH = single ? (sub ? 54 : 34) : 30 + 18 * series.length, py = cy(topV), room = py - 12 + (plotRef.current ? plotRef.current.getBoundingClientRect().top : 0), below = room < tipH;
      tip = h("div", { className: "jsk-ch__tip" + (single ? " is-compact" : "") + (below ? " is-below" : ""), style: { left: tx, top: below ? py + 12 : py - 12 }, "aria-hidden": "true" },
        single
          ? [h("div", { key: "v", className: "jsk-ch__tip-title" }, fmt(val(d, series[0]))), sub ? h("div", { key: "s", className: "jsk-ch__tip-sub" }, sub) : null]
          : [sub ? h("div", { key: "t", className: "jsk-ch__tip-title" }, sub) : null].concat(series.map(function (s, j) {
            return h("div", { key: s.key, className: "jsk-ch__tip-row" },
              h("span", { className: "jsk-ch__dot", style: { background: chColor(s.color, j, type) } }),
              h("span", { className: "jsk-ch__tip-name" }, s.name || s.key),
              h("span", { className: "jsk-ch__tip-val" }, fmt(val(d, s))));
          })));
    }
    var live = touched.current && active != null && data[active] ? String(data[active][xKey]) + ": " + series.map(function (s) { return (s.name || s.key) + " " + fmt(val(data[active], s)); }).join(", ") : "";

    var cls = "jsk-ch jsk-ch--" + type + " jsk-ch--" + size + (legend === "right" ? " jsk-ch--legend-right" : "") + (props.className ? " " + props.className : "");
    return h("figure", Object.assign({ ref: ref, className: cls, style: Object.assign({ height: height }, props.style) }, rest),
      props.yLabel ? h("div", { className: "jsk-ch__ytitle", "aria-hidden": "true" }, h("span", null, props.yLabel)) : null,
      h("div", { className: "jsk-ch__main" },
        legend === "top" ? chLegend(series, type, "top") : null,
        h("div", { className: "jsk-ch__plot", ref: plotRef },
          h("svg", {
            className: "jsk-ch__svg", width: W, height: H, role: "img", tabIndex: 0,
            "aria-label": (props.label || (type === "bar" ? "Bar chart" : "Line chart")) + ". Use left and right arrow keys to read values.",
            onMouseMove: function (e) { touched.current = true; setActive(idxAt(e.clientX)); },
            onMouseLeave: function () { setActive(null); },
            onKeyDown: onKey, onBlur: function () { setActive(null); }
          }, svgKids),
          tip,
          h("span", { className: "jsk-ch__sr", "aria-live": "polite" }, live)),
        props.xLabel ? h("div", { className: "jsk-ch__xtitle", "aria-hidden": "true" }, props.xLabel) : null),
      legend === "right" ? chLegend(series, type, "right") : null,
      h("table", { className: "jsk-ch__sr" },
        props.label ? h("caption", null, props.label) : null,
        h("thead", null, h("tr", null, h("th", { scope: "col" }, props.xLabel || xKey), series.map(function (s) { return h("th", { key: s.key, scope: "col" }, s.name || s.key); }))),
        h("tbody", null, data.map(function (d, i) {
          return h("tr", { key: i }, h("th", { scope: "row" }, String(d[xKey])), series.map(function (s) { return h("td", { key: s.key }, fmt(val(d, s))); }));
        }))));
  });

  /* ---------- RadialChart ---------- */
  var RC_SIZES = { xs: { d: 160, w: 8, g: 4 }, sm: { d: 200, w: 12, g: 4 }, md: { d: 240, w: 16, g: 4 }, lg: { d: 280, w: 18, g: 6 } };
  var RC_COLORS = ["--utility-brand-700", "--utility-brand-600", "--utility-brand-400", "--utility-brand-300", "--utility-brand-200"];
  var RadialChart = React.forwardRef(function RadialChart(props, ref) {
    var size = RC_SIZES[props.size] ? props.size : "md", S = RC_SIZES[size];
    var data = props.data || [], legend = props.legend || false;
    var locale = props.locale || "id-ID";
    var fmt = props.formatValue || function (v) { return new Intl.NumberFormat(locale).format(v); };
    var rest = omit(props, ["size", "data", "legend", "locale", "formatValue", "label", "value", "max", "className", "style", "ariaLabel"]);
    var _a = React.useState(null), active = _a[0], setActive = _a[1];
    var touched = React.useRef(false);
    function col(it, i) { var c = it.color || RC_COLORS[i % RC_COLORS.length]; return c.indexOf("--") === 0 ? "var(" + c + ")" : c; }
    function maxOf(it) { return it.max != null ? it.max : (props.max != null ? props.max : 100); }
    var c = S.d / 2;
    var rings = data.map(function (it, i) {
      var r = c - S.w / 2 - i * (S.w + S.g);
      if (r <= S.w / 2) return null;
      var C = 2 * Math.PI * r, pct = Math.max(0, Math.min(1, (Number(it.value) || 0) / maxOf(it)));
      return h("g", { key: it.key || i, className: "jsk-rc__ring" + (active != null && active !== i ? " is-dim" : ""),
          onMouseEnter: function () { touched.current = true; setActive(i); } },
        h("circle", { className: "jsk-rc__track", cx: c, cy: c, r: r, strokeWidth: S.w }),
        pct > 0 ? h("circle", { className: "jsk-rc__arc", cx: c, cy: c, r: r, strokeWidth: S.w, transform: "rotate(-90 " + c + " " + c + ")",
          strokeDasharray: (pct * C).toFixed(2) + " " + C.toFixed(2), style: { stroke: col(it, i) } }) : null);
    });
    function onKey(e) {
      var n = data.length; if (!n) return;
      var i = active == null ? -1 : active;
      if (e.key === "ArrowDown" || e.key === "ArrowRight") i = (i + 1) % n;
      else if (e.key === "ArrowUp" || e.key === "ArrowLeft") i = i <= 0 ? n - 1 : i - 1;
      else if (e.key === "Escape") { setActive(null); return; }
      else return;
      e.preventDefault(); touched.current = true; setActive(i);
    }
    var cur = active != null ? data[active] : null;
    var tip = cur ? h("div", { className: "jsk-ch__tip is-compact jsk-rc__tip", "aria-hidden": "true" },
      h("div", { className: "jsk-ch__tip-title" }, fmt(cur.value) + (cur.max != null || props.max != null ? " / " + fmt(maxOf(cur)) : "")),
      h("div", { className: "jsk-ch__tip-sub" }, cur.name || cur.key)) : null;
    var summary = data.map(function (it) { return (it.name || it.key) + " " + fmt(it.value) + " / " + fmt(maxOf(it)); }).join(", ");
    var center = (props.label != null || props.value != null) ? h("div", { className: "jsk-rc__center", "aria-hidden": "true" },
      props.label != null ? h("div", { className: "jsk-rc__label" }, props.label) : null,
      props.value != null ? h("div", { className: "jsk-rc__value" }, typeof props.value === "number" ? fmt(props.value) : props.value) : null) : null;
    var leg = legend ? h("ul", { className: "jsk-ch__legend jsk-ch__legend--" + (legend === "right" ? "right" : "bottom"), "aria-hidden": "true" },
      data.map(function (it, i) {
        return h("li", { key: it.key || i, className: "jsk-ch__legend-item" },
          h("span", { className: "jsk-ch__dot-wrap" }, h("span", { className: "jsk-ch__dot", style: { background: col(it, i) } })),
          h("span", null, it.name || it.key));
      })) : null;
    var cls = "jsk-rc jsk-rc--" + size + (legend === "right" ? " jsk-rc--legend-right" : "") + (props.className ? " " + props.className : "");
    return h("figure", Object.assign({ ref: ref, className: cls, style: props.style }, rest),
      h("div", { className: "jsk-rc__chart", style: { width: S.d, height: S.d }, onMouseLeave: function () { setActive(null); } },
        h("svg", { className: "jsk-rc__svg", width: S.d, height: S.d, viewBox: "0 0 " + S.d + " " + S.d, role: "img", tabIndex: 0,
          "aria-label": (props.ariaLabel || props.label || "Radial chart") + (props.value != null ? " " + (typeof props.value === "number" ? fmt(props.value) : props.value) : "") + ". " + summary,
          onKeyDown: onKey, onBlur: function () { setActive(null); } }, rings),
        center, tip,
        h("span", { className: "jsk-ch__sr", "aria-live": "polite" }, touched.current && cur ? (cur.name || cur.key) + " " + fmt(cur.value) + " / " + fmt(maxOf(cur)) : "")),
      leg);
  });

  /* ---------- PieChart ---------- */
  var PC_SIZES = { xxs: 120, xs: 160, sm: 200, md: 240, lg: 280 };
  var PC_COLORS = ["--utility-brand-600", "--utility-brand-500", "--utility-brand-400", "--utility-brand-300", "--utility-brand-200", "--utility-gray-200"];
  function pcArc(c, ro, ri, a0, a1) {
    function pt(r, a) { return [(c + r * Math.sin(a)).toFixed(2), (c - r * Math.cos(a)).toFixed(2)]; }
    var large = a1 - a0 > Math.PI ? 1 : 0, p0 = pt(ro, a0), p1 = pt(ro, a1);
    var d = "M" + p0 + "A" + ro + "," + ro + " 0 " + large + " 1 " + p1;
    if (ri > 0) { var q1 = pt(ri, a1), q0 = pt(ri, a0); d += "L" + q1 + "A" + ri + "," + ri + " 0 " + large + " 0 " + q0; }
    else d += "L" + c + "," + c;
    return d + "Z";
  }
  var PieChart = React.forwardRef(function PieChart(props, ref) {
    var size = PC_SIZES[props.size] ? props.size : "md", D = PC_SIZES[size], c = D / 2;
    var data = props.data || [], legend = props.legend || false;
    var hole = props.hole != null ? Math.max(0, Math.min(0.9, props.hole)) : 0.5;
    var locale = props.locale || "id-ID";
    var fmt = props.formatValue || function (v) { return new Intl.NumberFormat(locale).format(v); };
    var rest = omit(props, ["size", "data", "legend", "hole", "locale", "formatValue", "label", "value", "className", "style", "ariaLabel"]);
    var _a = React.useState(null), active = _a[0], setActive = _a[1];
    var touched = React.useRef(false);
    function col(it, i) { var cc = it.color || PC_COLORS[i % PC_COLORS.length]; return cc.indexOf("--") === 0 ? "var(" + cc + ")" : cc; }
    var total = 0; data.forEach(function (it) { total += Math.max(0, Number(it.value) || 0); });
    function pctOf(it) { return total ? (Math.max(0, Number(it.value) || 0) / total) : 0; }
    function pctTxt(it) { return new Intl.NumberFormat(locale, { style: "percent", maximumFractionDigits: 1 }).format(pctOf(it)); }
    var ro = c, ri = c * hole, acc = 0;
    var slices = data.map(function (it, i) {
      var p = pctOf(it); if (!(p > 0)) { return null; }
      var a0 = acc * 2 * Math.PI, a1 = (acc + p) * 2 * Math.PI; acc += p;
      var dim = active != null && active !== i ? " is-dim" : "";
      var ev = { onMouseEnter: function () { touched.current = true; setActive(i); } };
      if (p >= 0.9999) return h("g", Object.assign({ key: it.key || i, className: "jsk-pc__slice" + dim }, ev),
        h("path", { d: pcArc(c, ro, ri, 0, Math.PI) + pcArc(c, ro, ri, Math.PI, 2 * Math.PI), style: { fill: col(it, i) } }));
      return h("path", Object.assign({ key: it.key || i, className: "jsk-pc__slice" + dim, d: pcArc(c, ro, ri, a0, a1), style: { fill: col(it, i) } }, ev));
    });
    function onKey(e) {
      var n = data.length; if (!n) return;
      var i = active == null ? -1 : active;
      if (e.key === "ArrowDown" || e.key === "ArrowRight") i = (i + 1) % n;
      else if (e.key === "ArrowUp" || e.key === "ArrowLeft") i = i <= 0 ? n - 1 : i - 1;
      else if (e.key === "Escape") { setActive(null); return; }
      else return;
      e.preventDefault(); touched.current = true; setActive(i);
    }
    var cur = active != null ? data[active] : null;
    var tip = cur ? h("div", { className: "jsk-ch__tip is-compact jsk-pc__tip", "aria-hidden": "true" },
      h("div", { className: "jsk-ch__tip-title" }, fmt(cur.value) + " · " + pctTxt(cur)),
      h("div", { className: "jsk-ch__tip-sub" }, cur.name || cur.key)) : null;
    var summary = data.map(function (it) { return (it.name || it.key) + " " + fmt(it.value) + " (" + pctTxt(it) + ")"; }).join(", ");
    var center = hole > 0 && (props.label != null || props.value != null) ? h("div", { className: "jsk-pc__center", "aria-hidden": "true", style: { padding: c - ri + 6 } },
      props.label != null ? h("div", { className: "jsk-rc__label" }, props.label) : null,
      props.value != null ? h("div", { className: "jsk-rc__value" }, typeof props.value === "number" ? fmt(props.value) : props.value) : null) : null;
    var leg = legend ? h("ul", { className: "jsk-ch__legend jsk-ch__legend--" + (legend === "bottom" ? "bottom" : "right"), "aria-hidden": "true" },
      data.map(function (it, i) {
        return h("li", { key: it.key || i, className: "jsk-ch__legend-item" },
          h("span", { className: "jsk-ch__dot-wrap" }, h("span", { className: "jsk-ch__dot", style: { background: col(it, i) } })),
          h("span", null, it.name || it.key));
      })) : null;
    var cls = "jsk-pc jsk-rc--" + (size === "xxs" ? "xs" : size) + (legend === "bottom" ? " jsk-pc--legend-bottom" : "") + (props.className ? " " + props.className : "");
    return h("figure", Object.assign({ ref: ref, className: cls, style: props.style }, rest),
      h("div", { className: "jsk-pc__chart", style: { width: D, height: D }, onMouseLeave: function () { setActive(null); } },
        h("svg", { className: "jsk-pc__svg", width: D, height: D, viewBox: "0 0 " + D + " " + D, role: "img", tabIndex: 0,
          "aria-label": (props.ariaLabel || props.label || (hole > 0 ? "Donut chart" : "Pie chart")) + ". " + summary,
          onKeyDown: onKey, onBlur: function () { setActive(null); } },
          h("circle", { className: "jsk-pc__empty", cx: c, cy: c, r: (ro + ri) / 2, strokeWidth: ro - ri || 0.01, style: ri === 0 ? { strokeWidth: 0, fill: "var(--utility-gray-200)" } : null }),
          slices),
        center, tip,
        h("span", { className: "jsk-ch__sr", "aria-live": "polite" }, touched.current && cur ? (cur.name || cur.key) + " " + fmt(cur.value) + ", " + pctTxt(cur) : "")),
      leg);
  });

  /* ---------- RadarChart ---------- */
  var RD_COLORS = ["--utility-brand-600", "--utility-pink-500", "--utility-blue-light-500", "--utility-brand-300", "--utility-gray-500"];
  var RadarChart = React.forwardRef(function RadarChart(props, ref) {
    var data = props.data || [], series = props.series || [], xKey = props.xKey || "label";
    var legend = props.legend || false, ticks = props.ticks || 5;
    var R = props.radius || 160, padX = 36, padTop = 41.5, padBottom = 30;
    var W = 2 * R + 2 * padX, H = padTop + R + R * Math.cos(Math.PI / Math.max(3, data.length)) + padBottom;
    var cx = W / 2, cy = padTop + R, n = data.length;
    var locale = props.locale || "id-ID";
    var fmt = props.formatValue || function (v) { return new Intl.NumberFormat(locale).format(v); };
    var rest = omit(props, ["data", "series", "xKey", "legend", "ticks", "radius", "max", "locale", "formatValue", "label", "className", "style", "defaultActive"]);
    var _a = React.useState(props.defaultActive != null ? props.defaultActive : null), active = _a[0], setActive = _a[1];
    var touched = React.useRef(false), svgRef = React.useRef(null);
    function col(s, i) { var c = s.color || RD_COLORS[i % RD_COLORS.length]; return c.indexOf("--") === 0 ? "var(" + c + ")" : c; }
    function val(d, s) { var v = Number(d[s.key]); return isFinite(v) && v > 0 ? v : 0; }
    var maxV = 0; data.forEach(function (d) { series.forEach(function (s) { maxV = Math.max(maxV, val(d, s)); }); });
    var max = props.max || chNiceMax(maxV, ticks);
    function ang(i) { return -Math.PI / 2 + (i * 2 * Math.PI) / n; }
    function pt(i, r) { return [cx + r * Math.cos(ang(i)), cy + r * Math.sin(ang(i))]; }
    function poly(r) { var p = []; for (var i = 0; i < n; i++) p.push(pt(i, r).map(function (v) { return v.toFixed(2); }).join(",")); return p.join(" "); }
    var kids = [];
    if (n >= 3) {
      var grid = [];
      for (var k = 1; k <= ticks; k++) grid.push(h("polygon", { key: "r" + k, className: "jsk-rd__grid" + (k === ticks ? " is-outer" : ""), points: poly((R * k) / ticks) }));
      for (var i = 0; i < n; i++) { var e = pt(i, R); grid.push(h("line", { key: "s" + i, className: "jsk-rd__grid" + (active === i ? " is-active" : ""), x1: cx, y1: cy, x2: e[0], y2: e[1] })); }
      kids.push(h("g", { key: "grid" }, grid));
      kids.push(h("g", { key: "series" }, series.map(function (s, j) {
        var p = data.map(function (d, i) { return pt(i, (val(d, s) / max) * R).map(function (v) { return v.toFixed(2); }).join(","); }).join(" ");
        return h("polygon", { key: s.key, className: "jsk-rd__area", points: p, style: { fill: col(s, j), stroke: col(s, j) } });
      })));
      if (active != null) kids.push(h("g", { key: "pts" }, series.map(function (s, j) {
        var q = pt(active, (val(data[active], s) / max) * R);
        return h("circle", { key: s.key, className: "jsk-ch__pt", cx: q[0], cy: q[1], r: 4, style: { stroke: col(s, j) } });
      })));
      kids.push(h("g", { key: "labels" }, data.map(function (d, i) {
        var a = ang(i), q = pt(i, R + 18), c = Math.cos(a);
        var anchor = Math.abs(c) < 0.2 ? "middle" : c > 0 ? "start" : "end";
        var dy = Math.sin(a) < -0.9 ? -4 : Math.sin(a) > 0.5 ? 12 : 5;
        return h("text", { key: i, className: "jsk-rd__axis" + (active === i ? " is-active" : ""), x: q[0], y: q[1] + dy, textAnchor: anchor }, String(d[xKey]));
      })));
    }
    function onMove(e) {
      var r = svgRef.current.getBoundingClientRect(), x = e.clientX - r.left - cx, y = e.clientY - r.top - cy;
      if (Math.sqrt(x * x + y * y) > R + 30) { setActive(null); return; }
      var a = Math.atan2(y, x) + Math.PI / 2; if (a < 0) a += 2 * Math.PI;
      touched.current = true; setActive(Math.round(a / (2 * Math.PI / n)) % n);
    }
    function onKey(e) {
      if (!n) return;
      var i = active == null ? -1 : active;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") i = (i + 1) % n;
      else if (e.key === "ArrowLeft" || e.key === "ArrowUp") i = i <= 0 ? n - 1 : i - 1;
      else if (e.key === "Escape") { setActive(null); return; }
      else return;
      e.preventDefault(); touched.current = true; setActive(i);
    }
    var tickEls = [];
    for (var t = 1; t <= ticks; t++) tickEls.push(h("span", { key: t, className: "jsk-rd__tick", style: { left: cx, top: cy - (R * t) / ticks } }, fmt((max * t) / ticks)));
    var tip = null;
    if (active != null && data[active]) {
      var far = 0; series.forEach(function (s) { far = Math.max(far, val(data[active], s)); });
      var tp = pt(active, (far / max) * R), right = tp[0] < cx;
      tip = h("div", { className: "jsk-ch__tip jsk-rd__tip", style: { left: tp[0] + (right ? 12 : -12), top: tp[1], transform: right ? "translate(0,-50%)" : "translate(-100%,-50%)" }, "aria-hidden": "true" },
        h("div", { className: "jsk-ch__tip-title" }, String(data[active][xKey])),
        series.map(function (s, j) {
          return h("div", { key: s.key, className: "jsk-ch__tip-row" },
            h("span", { className: "jsk-ch__dot", style: { background: col(s, j) } }),
            h("span", { className: "jsk-ch__tip-name" }, s.name || s.key),
            h("span", { className: "jsk-ch__tip-val" }, fmt(val(data[active], s))));
        }));
    }
    var live = touched.current && active != null && data[active] ? String(data[active][xKey]) + ": " + series.map(function (s) { return (s.name || s.key) + " " + fmt(val(data[active], s)); }).join(", ") : "";
    var leg = legend ? h("ul", { className: "jsk-ch__legend jsk-ch__legend--" + (legend === "bottom" ? "bottom" : "right"), "aria-hidden": "true" },
      series.map(function (s, j) {
        return h("li", { key: s.key, className: "jsk-ch__legend-item" },
          h("span", { className: "jsk-ch__dot-wrap" }, h("span", { className: "jsk-ch__dot", style: { background: col(s, j) } })),
          h("span", null, s.name || s.key));
      })) : null;
    var cls = "jsk-rd" + (legend === "bottom" ? " jsk-pc--legend-bottom" : "") + (props.className ? " " + props.className : "");
    return h("figure", Object.assign({ ref: ref, className: cls + " jsk-pc", style: props.style }, rest),
      h("div", { className: "jsk-rd__chart", style: { width: W, height: H } },
        h("svg", { ref: svgRef, className: "jsk-rd__svg", width: W, height: H, viewBox: "0 0 " + W + " " + H, role: "img", tabIndex: 0,
          "aria-label": (props.label || "Radar chart") + ". Use the arrow keys to read each axis.",
          onMouseMove: onMove, onMouseLeave: function () { setActive(null); }, onKeyDown: onKey, onBlur: function () { setActive(null); } }, kids),
        h("div", { className: "jsk-rd__ticks", "aria-hidden": "true" }, tickEls),
        tip,
        h("span", { className: "jsk-ch__sr", "aria-live": "polite" }, live)),
      leg,
      h("table", { className: "jsk-ch__sr" },
        props.label ? h("caption", null, props.label) : null,
        h("thead", null, h("tr", null, h("th", { scope: "col" }, xKey), series.map(function (s) { return h("th", { key: s.key, scope: "col" }, s.name || s.key); }))),
        h("tbody", null, data.map(function (d, i) {
          return h("tr", { key: i }, h("th", { scope: "row" }, String(d[xKey])), series.map(function (s) { return h("td", { key: s.key }, fmt(val(d, s))); }));
        }))));
  });

  /* ---------- CodeSnippet ---------- */
  var CS_KW = "import export default from as const let var function return if else for while do switch case break continue new class extends super this typeof instanceof in of await async try catch finally throw yield null undefined true false void delete interface type enum implements public private protected readonly static get set".split(" ");
  var CS_COPY = "M5.33 5.33V3.47c0-.75 0-1.12.15-1.4.12-.25.33-.46.58-.58.28-.15.65-.15 1.4-.15h5.07c.75 0 1.12 0 1.4.15.25.12.46.33.58.58.15.28.15.65.15 1.4v5.07c0 .75 0 1.12-.15 1.4-.12.25-.33.46-.58.58-.28.15-.65.15-1.4.15h-1.86M3.47 14.67h5.06c.75 0 1.12 0 1.4-.15.25-.12.46-.33.58-.58.15-.28.15-.65.15-1.4V7.47c0-.75 0-1.12-.15-1.4a1.33 1.33 0 0 0-.58-.58c-.28-.15-.65-.15-1.4-.15H3.47c-.75 0-1.12 0-1.4.15-.25.12-.46.33-.58.58-.15.28-.15.65-.15 1.4v5.06c0 .75 0 1.12.15 1.4.12.25.33.46.58.58.28.15.65.15 1.4.15Z";
  var CS_CHECK = "M13.33 4 6 11.33 2.67 8";
  function csTokens(code, lang) {
    lang = lang || "js";
    if (lang === "plain" || lang === "text") return [{ t: "", v: code }];
    var out = [], re, m;
    if (lang === "bash" || lang === "sh" || lang === "shell") {
      code.split("\n").forEach(function (line, li) {
        if (li) out.push({ t: "", v: "\n" });
        var c = line.indexOf("#");
        var body = c >= 0 && (c === 0 || /\s/.test(line[c - 1])) ? line.slice(0, c) : line, com = body.length < line.length ? line.slice(body.length) : "";
        var mm = /^(\s*)(\$\s+)?(\S+)/.exec(body);
        if (mm) { out.push({ t: "", v: mm[1] + (mm[2] || "") }); out.push({ t: "k", v: mm[3] }); body = body.slice(mm[0].length); }
        body.split(/(\s--?[\w-]+)/).forEach(function (p) { if (p) out.push({ t: /^\s--?[\w-]+$/.test(p) ? "p" : "", v: p }); });
        if (com) out.push({ t: "c", v: com });
      });
      return out;
    }
    re = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|("(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*'|`(?:\\.|[^`\\])*`)|(\b\d+(?:\.\d+)?\b)|([A-Za-z_$][\w$]*)|([\s\S])/g;
    var prevWord = "";
    while ((m = re.exec(code))) {
      var v = m[0], t = "";
      if (m[1]) t = "c";
      else if (m[2]) { t = lang === "json" && /^\s*:/.test(code.slice(re.lastIndex)) ? "p" : "s"; }
      else if (m[3]) t = "n";
      else if (m[4]) {
        if (v !== "case" && v !== "default" && /^\s*:(?!:)/.test(code.slice(re.lastIndex)) && !/[?]\s*[\w$.]*$/.test(code.slice(Math.max(0, m.index - 40), m.index))) t = "p";
        else if (lang !== "json" && CS_KW.indexOf(v) >= 0) t = "k";
        else if (/^(const|let|var|function|class|import|interface|type|enum)$/.test(prevWord) || /^\s*[,}]/.test(code.slice(re.lastIndex)) && /\{[^}]*$/.test(code.slice(0, m.index)) && /\bimport\b[^;\n]*$/.test(code.slice(0, m.index))) t = "v";
        else if (/^import$/.test(prevWord)) t = "v";
        prevWord = v;
      }
      if (m[4] == null && !/\s/.test(v)) { if (v !== "," && v !== "{") prevWord = ""; }
      var last = out[out.length - 1];
      if (last && last.t === t && t === "") last.v += v; else out.push({ t: t, v: v });
    }
    return out;
  }
  function csIcon(d) { return h("svg", { viewBox: "0 0 16 16", width: 16, height: 16, fill: "none", "aria-hidden": "true" }, h("path", { d: d, stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })); }
  function CsCopy(props) {
    var _c = React.useState(false), done = _c[0], setDone = _c[1];
    var tm = React.useRef(null);
    React.useEffect(function () { return function () { clearTimeout(tm.current); }; }, []);
    function copy() {
      var text = props.text;
      var p = navigator.clipboard && navigator.clipboard.writeText ? navigator.clipboard.writeText(text) : Promise.reject();
      p.catch(function () {
        var ta = document.createElement("textarea"); ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
        document.body.appendChild(ta); ta.select(); try { document.execCommand("copy"); } catch (e) {} document.body.removeChild(ta);
      }).then(function () {}, function () {});
      setDone(true); if (props.onCopy) props.onCopy(text);
      clearTimeout(tm.current); tm.current = setTimeout(function () { setDone(false); }, 2000);
    }
    return h(React.Fragment, null,
      h("button", { type: "button", className: "jsk-cs__act" + (done ? " is-done" : ""), onClick: copy, "aria-label": done ? "Copied" : (props.label || "Copy code"), title: done ? "Copied" : "Copy" }, csIcon(done ? CS_CHECK : CS_COPY)),
      h("span", { className: "jsk-ch__sr", "aria-live": "polite" }, done ? "Copied to clipboard" : ""));
  }
  var CodeSnippet = React.forwardRef(function CodeSnippet(props, ref) {
    var variant = props.variant === "framed" ? "framed" : "simple";
    var tabs = props.tabs && props.tabs.length ? props.tabs : null;
    var _t = React.useState(props.defaultTab != null ? props.defaultTab : (tabs ? (tabs[0].value != null ? tabs[0].value : 0) : 0)), tabInner = _t[0], setTabInner = _t[1];
    var tabVal = props.tab != null ? props.tab : tabInner;
    var tabIdx = 0;
    if (tabs) tabs.forEach(function (t, i) { if ((t.value != null ? t.value : i) === tabVal) tabIdx = i; });
    var cur = tabs ? tabs[tabIdx] : { code: props.code, language: props.language };
    var code = String(cur.code == null ? "" : cur.code).replace(/\n$/, "");
    var lang = cur.language || props.language || "js";
    var lineNumbers = props.lineNumbers != null ? props.lineNumbers : variant === "simple";
    var copyable = props.copyable !== false;
    var collapsedHeight = props.collapsedHeight != null ? props.collapsedHeight : (props.collapsible ? 400 : null);
    var _e = React.useState(!!props.defaultExpanded), expanded = _e[0], setExpanded = _e[1];
    var _o = React.useState(false), overflow = _o[0], setOverflow = _o[1];
    var codeRef = React.useRef(null);
    var uid = (React.useId ? React.useId() : "cs").replace(/[^a-zA-Z0-9_-]/g, "");
    React.useLayoutEffect(function () {
      if (!collapsedHeight || !codeRef.current) { setOverflow(false); return; }
      setOverflow(codeRef.current.scrollHeight > collapsedHeight + 8);
    }, [code, collapsedHeight, props.wrap]);
    var rest = omit(props, ["variant", "tabs", "tab", "defaultTab", "onTabChange", "code", "language", "lineNumbers", "copyable", "collapsible", "collapsedHeight", "defaultExpanded", "wrap", "actions", "label", "onCopy", "className", "style", "showMoreLabel", "showLessLabel"]);
    var lines = code.split("\n");
    var toks = csTokens(code, lang);
    var clipped = overflow && !expanded;
    var codeBox = h("div", { className: "jsk-cs__code", ref: codeRef, style: clipped ? { maxHeight: collapsedHeight } : null },
      lineNumbers ? h("div", { className: "jsk-cs__gutter", "aria-hidden": "true" }, lines.map(function (_, i) { return h("div", { key: i }, i + 1); })) : null,
      h("pre", { className: "jsk-cs__pre" + (props.wrap ? " is-wrap" : ""), tabIndex: 0, "aria-label": props.label ? props.label + " (code)" : undefined },
        h("code", { "data-lang": lang }, toks.map(function (tk, i) { return tk.t ? h("span", { key: i, className: "jsk-cs__t-" + tk.t }, tk.v) : tk.v; }))));
    var acts = (props.actions && props.actions.length) || (copyable && !tabs) ? h("div", { className: "jsk-cs__acts" },
      (props.actions || []).map(function (a, i) {
        return h("button", { key: i, type: "button", className: "jsk-cs__act", onClick: a.onClick, "aria-label": a.label, title: a.label }, a.icon);
      }),
      copyable && !tabs ? h(CsCopy, { text: code, onCopy: props.onCopy }) : null) : null;
    var more = overflow ? h("div", { className: "jsk-cs__more" + (expanded ? " is-open" : "") },
      h(Button, { hierarchy: "secondary", size: "sm", onClick: function () { setExpanded(!expanded); }, "aria-expanded": expanded, "aria-controls": uid + "-panel" },
        expanded ? (props.showLessLabel || "Show less") : (props.showMoreLabel || "Show more"))) : null;
    function onTabKey(e) {
      if (!tabs) return;
      var i = tabIdx;
      if (e.key === "ArrowRight") i = (i + 1) % tabs.length; else if (e.key === "ArrowLeft") i = (i - 1 + tabs.length) % tabs.length;
      else if (e.key === "Home") i = 0; else if (e.key === "End") i = tabs.length - 1; else return;
      e.preventDefault(); pick(i);
      var el = document.getElementById(uid + "-tab-" + i); if (el) el.focus();
    }
    function pick(i) {
      var v = tabs[i].value != null ? tabs[i].value : i;
      if (props.tab == null) setTabInner(v);
      if (props.onTabChange) props.onTabChange(v);
      setExpanded(!!props.defaultExpanded);
    }
    var header = tabs ? h("div", { className: "jsk-cs__head" },
      h("div", { className: "jsk-cs__tabs", role: "tablist", "aria-label": props.label || "Code examples", onKeyDown: onTabKey },
        tabs.map(function (t, i) {
          var on = i === tabIdx;
          return h("button", { key: i, id: uid + "-tab-" + i, type: "button", role: "tab", "aria-selected": on, "aria-controls": uid + "-panel", tabIndex: on ? 0 : -1,
            className: "jsk-cs__tab" + (on ? " is-current" : ""), onClick: function () { pick(i); } }, t.label);
        })),
      copyable ? h(CsCopy, { text: code, onCopy: props.onCopy }) : null) : null;
    var panelProps = { id: uid + "-panel", className: "jsk-cs__panel" + (clipped ? " is-clipped" : "") };
    if (tabs) { panelProps.role = "tabpanel"; panelProps["aria-labelledby"] = uid + "-tab-" + tabIdx; }
    var cls = "jsk-cs jsk-cs--" + variant + (tabs ? " jsk-cs--tabs" : "") + (props.className ? " " + props.className : "");
    if (variant === "simple") return h("div", Object.assign({ ref: ref, className: cls, style: props.style }, rest),
      header, h("div", panelProps, codeBox, acts, clipped ? h("div", { className: "jsk-cs__fade", "aria-hidden": "true" }) : null, more));
    return h("div", Object.assign({ ref: ref, className: cls, style: props.style }, rest),
      header,
      h("div", { className: "jsk-cs__body" },
        h("div", panelProps, codeBox, acts, clipped ? h("div", { className: "jsk-cs__fade", "aria-hidden": "true" }) : null, more)));
  });

  /* ---------- Color pickers ---------- */
  function cpClamp(v, a, b) { return Math.min(b, Math.max(a, v)); }
  function cpHex2(n) { var s = Math.round(cpClamp(n, 0, 255)).toString(16); return s.length < 2 ? "0" + s : s; }
  function cpParseHex(str) {
    if (str == null) return null;
    var s = String(str).trim().replace(/^#/, "");
    if (/^[0-9a-f]{3,4}$/i.test(s)) s = s.split("").map(function (c) { return c + c; }).join("");
    if (!/^[0-9a-f]{6}([0-9a-f]{2})?$/i.test(s)) return null;
    return { r: parseInt(s.slice(0, 2), 16), g: parseInt(s.slice(2, 4), 16), b: parseInt(s.slice(4, 6), 16), a: s.length === 8 ? parseInt(s.slice(6, 8), 16) / 255 : 1 };
  }
  function cpRgb2Hsv(c) {
    var r = c.r / 255, g = c.g / 255, b = c.b / 255, mx = Math.max(r, g, b), mn = Math.min(r, g, b), d = mx - mn, hh = 0;
    if (d) { hh = mx === r ? ((g - b) / d) % 6 : mx === g ? (b - r) / d + 2 : (r - g) / d + 4; hh *= 60; if (hh < 0) hh += 360; }
    return { h: hh, s: mx ? d / mx : 0, v: mx, a: c.a == null ? 1 : c.a };
  }
  function cpHsv2Rgb(c) {
    var f = function (n) { var k = (n + c.h / 60) % 6; return c.v - c.v * c.s * Math.max(0, Math.min(k, 4 - k, 1)); };
    return { r: f(5) * 255, g: f(3) * 255, b: f(1) * 255, a: c.a == null ? 1 : c.a };
  }
  function cpRgb2Hsl(c) {
    var r = c.r / 255, g = c.g / 255, b = c.b / 255, mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2, d = mx - mn, hv = cpRgb2Hsv(c).h;
    return { h: hv, s: d ? d / (1 - Math.abs(2 * l - 1)) : 0, l: l };
  }
  function cpHsl2Rgb(hh, s, l) {
    var k = function (n) { return (n + hh / 30) % 12; }, a = s * Math.min(l, 1 - l);
    var f = function (n) { return l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1)); };
    return { r: f(0) * 255, g: f(8) * 255, b: f(4) * 255 };
  }
  function cpToHex(c, withHash) {
    var rgb = c.r != null ? c : cpHsv2Rgb(c);
    var s = cpHex2(rgb.r) + cpHex2(rgb.g) + cpHex2(rgb.b) + (rgb.a != null && rgb.a < 0.999 ? cpHex2(rgb.a * 255) : "");
    return (withHash === false ? "" : "#") + s.toUpperCase();
  }
  function cpRgbCss(c, a) { var rgb = c.r != null ? c : cpHsv2Rgb(c); return "rgba(" + Math.round(rgb.r) + "," + Math.round(rgb.g) + "," + Math.round(rgb.b) + "," + (a == null ? (rgb.a == null ? 1 : rgb.a) : a) + ")"; }
  function cpIsLight(c) { var rgb = c.r != null ? c : cpHsv2Rgb(c); return (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255 > 0.62; }
  function cpFormat(hsva, fmt) {
    var rgb = cpHsv2Rgb(hsva);
    if (fmt === "rgb") return Math.round(rgb.r) + ", " + Math.round(rgb.g) + ", " + Math.round(rgb.b);
    if (fmt === "hsl") { var l = cpRgb2Hsl(rgb); return Math.round(l.h) + ", " + Math.round(l.s * 100) + "%, " + Math.round(l.l * 100) + "%"; }
    return cpToHex({ r: rgb.r, g: rgb.g, b: rgb.b, a: 1 }, false);
  }
  function cpParse(text, fmt, a) {
    var t = String(text).trim();
    if (fmt === "rgb" || fmt === "hsl") {
      var n = t.replace(/^(rgba?|hsla?)\(|\)$/gi, "").split(/[\s,/]+/).filter(Boolean).map(function (x) { return parseFloat(x); });
      if (n.length < 3 || n.slice(0, 3).some(isNaN)) return null;
      var rgb = fmt === "rgb" ? { r: n[0], g: n[1], b: n[2] } : cpHsl2Rgb(n[0], cpClamp(n[1], 0, 100) / 100, cpClamp(n[2], 0, 100) / 100);
      var o = cpRgb2Hsv({ r: cpClamp(rgb.r, 0, 255), g: cpClamp(rgb.g, 0, 255), b: cpClamp(rgb.b, 0, 255), a: a });
      return o;
    }
    var c = cpParseHex(t); if (!c) return null;
    var hsv = cpRgb2Hsv(c); if (t.replace("#", "").length <= 6) hsv.a = a; return hsv;
  }
  var CP_CHECKER = "conic-gradient(#d5d7da 25%, #fff 0 50%, #d5d7da 0 75%, #fff 0) 0 0 / 8px 8px";
  var CP_HUE = "linear-gradient(90deg,#f00 0%,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,#f00 100%)";
  function cpIcon(d, sz, sw) { sz = sz || 20; return h("svg", { viewBox: "0 0 " + sz + " " + sz, width: sz, height: sz, fill: "none", "aria-hidden": "true" }, h("path", { d: d, stroke: "currentColor", strokeWidth: sw || (sz === 20 ? 1.67 : 1.5), strokeLinecap: "round", strokeLinejoin: "round" })); }
  var CP_PLUS = "M8 3.33v9.34M3.33 8h9.34";
  var CP_PLUS20 = "M10 4.17v11.66M4.17 10h11.66";
  var CP_MINUS = "M3.33 8h9.34";
  var CP_DROP = "m11.67 5.83 2.5 2.5M2.5 17.5l1.25-.42c.38-.12.57-.19.75-.29.15-.08.3-.18.43-.3.15-.14.29-.28.57-.57L11.67 9.75M11.67 5.83l2.43-2.43a1.77 1.77 0 0 1 2.5 2.5l-2.43 2.43m-2.5-2.5-6.18 6.17c-.28.29-.43.43-.57.58a1.67 1.67 0 0 0-.3.43c-.1.18-.16.37-.29.75L2.5 17.5m11.67-9.17L15 9.17m-4.17-4.17.84.83";
  var CP_SWAP = "M14.17 2.5 17.5 5.83l-3.33 3.34M17.5 5.83H5.83M5.83 17.5 2.5 14.17l3.33-3.34M2.5 14.17h11.67";
  var CP_UPLOAD = "M6.67 13.33 10 10m0 0 3.33 3.33M10 10v7.5m6.67-3.55a4.17 4.17 0 0 0-2.5-7.5h-.75a6.67 6.67 0 1 0-11.17 6.06";
  var CP_CHEV = "m3 4.5 3 3 3-3";

  function cpDrag(el, onPoint) {
    return function (e) {
      if (e.button != null && e.button !== 0) return;
      var node = el.current; if (!node) return;
      e.preventDefault();
      function at(ev) { var r = node.getBoundingClientRect(); onPoint(cpClamp((ev.clientX - r.left) / r.width, 0, 1), cpClamp((ev.clientY - r.top) / r.height, 0, 1), r, ev); }
      at(e);
      function mv(ev) { at(ev); }
      function up() { window.removeEventListener("pointermove", mv); window.removeEventListener("pointerup", up); window.removeEventListener("pointercancel", up); }
      window.addEventListener("pointermove", mv); window.addEventListener("pointerup", up); window.addEventListener("pointercancel", up);
      var f = node.querySelector("[tabindex]"); if (f && f.focus) f.focus({ preventScroll: true });
    };
  }
  function cpUseColor(props, key, dflt) {
    var ctrl = props[key] != null;
    var initial = cpParseHex(ctrl ? props[key] : (props["default" + key[0].toUpperCase() + key.slice(1)] || dflt));
    var _s = React.useState(cpRgb2Hsv(initial || cpParseHex(dflt))), hsva = _s[0], setHsva = _s[1];
    var last = React.useRef(null);
    React.useEffect(function () {
      if (!ctrl) return;
      if (last.current && last.current.toUpperCase() === String(props[key]).toUpperCase()) return;
      var c = cpParseHex(props[key]); if (!c) return;
      var n = cpRgb2Hsv(c); if (n.s === 0 || n.v === 0) n.h = hsva.h;
      setHsva(n);
    }, [props[key]]);
    function set(n) { setHsva(n); var hex = cpToHex(n); last.current = hex; var cb = props["on" + key[0].toUpperCase() + key.slice(1) + "Change"] || (key === "value" ? props.onChange : null); if (cb) cb(hex); }
    return [hsva, set];
  }

  var ColorSwatch = React.forwardRef(function ColorSwatch(props, ref) {
    var size = props.size === "sm" ? "sm" : props.size === "lg" ? "lg" : "md";
    var c = cpParseHex(props.color);
    var bg = c ? (c.a < 1 ? "linear-gradient(" + cpRgbCss(c) + "," + cpRgbCss(c) + ")," + CP_CHECKER : props.color) : props.color;
    var rest = omit(props, ["color", "size", "selected", "label", "className", "style"]);
    var cls = "jsk-cw jsk-cw--" + size + (props.selected ? " is-selected" : "") + (props.className ? " " + props.className : "");
    var style = Object.assign({ background: bg, "--cw-ring": c ? cpRgbCss(c, 1) : "var(--fg-quaternary)" }, props.style);
    if (props.onClick || props.role) return h("button", Object.assign({ ref: ref, type: "button", className: cls, style: style, "aria-label": props.label || props.color, title: props.label || props.color }, rest));
    return h("span", Object.assign({ ref: ref, className: cls, style: style, role: props.label ? "img" : undefined, "aria-label": props.label, "aria-hidden": props.label ? undefined : "true" }, rest));
  });

  var ColorSwatches = React.forwardRef(function ColorSwatches(props, ref) {
    var colors = (props.colors || []).map(function (c) { return typeof c === "string" ? { value: c } : c; });
    var size = props.size === "sm" ? "sm" : "md";
    var val = props.value != null ? String(props.value).toUpperCase() : null;
    var sel = -1; colors.forEach(function (c, i) { if (sel < 0 && val != null && String(c.value).toUpperCase() === val) sel = i; });
    var refs = React.useRef([]);
    function onKey(e) {
      var i = refs.current.indexOf(document.activeElement); if (i < 0) return;
      var n = colors.length, j = i;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") j = (i + 1) % n; else if (e.key === "ArrowLeft" || e.key === "ArrowUp") j = (i - 1 + n) % n;
      else if (e.key === "Home") j = 0; else if (e.key === "End") j = n - 1; else return;
      e.preventDefault(); refs.current[j].focus(); if (props.onChange) props.onChange(colors[j].value);
    }
    var rest = omit(props, ["colors", "size", "value", "onChange", "label", "onAdd", "addLabel", "className"]);
    return h("div", Object.assign({ ref: ref, className: "jsk-cws jsk-cws--" + size + (props.className ? " " + props.className : ""), role: "radiogroup", "aria-label": props.label || "Colours", onKeyDown: onKey }, rest),
      colors.map(function (c, i) {
        return h(ColorSwatch, { key: i, ref: function (el) { refs.current[i] = el; }, role: "radio", "aria-checked": i === sel, tabIndex: i === sel || (sel < 0 && i === 0) ? 0 : -1,
          color: c.color || c.value, size: size, selected: i === sel, label: c.label || c.value, onClick: function () { if (props.onChange) props.onChange(c.value); } });
      }),
      props.onAdd ? h("button", { type: "button", className: "jsk-cw jsk-cw--" + size + " jsk-cw--action", onClick: props.onAdd, "aria-label": props.addLabel || "Add colour", title: props.addLabel || "Add colour" }, cpIcon(CP_PLUS20, 20)) : null);
  });

  var ColorSlider = React.forwardRef(function ColorSlider(props, ref) {
    var type = props.type === "alpha" ? "alpha" : "hue";
    var max = type === "hue" ? 360 : 1, v = cpClamp(Number(props.value) || 0, 0, max);
    var track = React.useRef(null);
    function set(n) { if (props.onChange) props.onChange(cpClamp(type === "hue" ? n : Math.round(n * 100) / 100, 0, max)); }
    var down = cpDrag(track, function (x) { set(x * max); });
    function onKey(e) {
      var step = type === "hue" ? (e.shiftKey ? 10 : 1) : (e.shiftKey ? 0.1 : 0.01), n = v;
      if (e.key === "ArrowRight" || e.key === "ArrowUp") n = v + step; else if (e.key === "ArrowLeft" || e.key === "ArrowDown") n = v - step;
      else if (e.key === "PageUp") n = v + step * 10; else if (e.key === "PageDown") n = v - step * 10;
      else if (e.key === "Home") n = 0; else if (e.key === "End") n = max; else return;
      e.preventDefault(); set(n);
    }
    var base = cpParseHex(props.color) || { r: 4, g: 6, b: 104, a: 1 };
    var bg = type === "hue" ? CP_HUE : "linear-gradient(90deg," + cpRgbCss(base, 0) + "," + cpRgbCss(base, 1) + ")," + CP_CHECKER;
    var thumbColor = type === "hue" ? cpRgbCss(cpHsv2Rgb({ h: v, s: 1, v: 1 }), 1) : cpRgbCss(base, v);
    var rest = omit(props, ["type", "value", "onChange", "color", "label", "className", "style"]);
    return h("div", Object.assign({ ref: ref, className: "jsk-csl" + (props.className ? " " + props.className : ""), style: props.style }, rest),
      h("div", { className: "jsk-csl__track", ref: track, style: { background: bg }, onPointerDown: down },
        h("div", { className: "jsk-csl__thumb", style: { left: "calc(" + (v / max) * 100 + "% - " + (v / max) * 20 + "px)" }, role: "slider", tabIndex: 0,
          "aria-label": props.label || (type === "hue" ? "Hue" : "Opacity"), "aria-valuemin": 0, "aria-valuemax": type === "hue" ? 360 : 100,
          "aria-valuenow": type === "hue" ? Math.round(v) : Math.round(v * 100), "aria-valuetext": type === "hue" ? Math.round(v) + "°" : Math.round(v * 100) + "%", onKeyDown: onKey },
          h("span", { className: "jsk-csl__dot", style: { background: type === "alpha" ? "linear-gradient(" + thumbColor + "," + thumbColor + ")," + CP_CHECKER : thumbColor } }))));
  });

  var ColorArea = React.forwardRef(function ColorArea(props, ref) {
    var hue = props.hue || 0, s = cpClamp(props.saturation != null ? props.saturation : 1, 0, 1), v = cpClamp(props.brightness != null ? props.brightness : 1, 0, 1);
    var box = React.useRef(null);
    function set(ns, nv) { if (props.onChange) props.onChange({ saturation: cpClamp(ns, 0, 1), brightness: cpClamp(nv, 0, 1) }); }
    var down = cpDrag(box, function (x, y) { set(x, 1 - y); });
    function onKey(e) {
      var st = e.shiftKey ? 0.1 : 0.01;
      if (e.key === "ArrowRight") set(s + st, v); else if (e.key === "ArrowLeft") set(s - st, v);
      else if (e.key === "ArrowUp") set(s, v + st); else if (e.key === "ArrowDown") set(s, v - st); else return;
      e.preventDefault();
    }
    var hc = cpRgbCss(cpHsv2Rgb({ h: hue, s: 1, v: 1 }), 1), cur = cpRgbCss(cpHsv2Rgb({ h: hue, s: s, v: v }), 1);
    var rest = omit(props, ["hue", "saturation", "brightness", "onChange", "label", "height", "className", "style"]);
    return h("div", Object.assign({ ref: function (el) { box.current = el; if (typeof ref === "function") ref(el); else if (ref) ref.current = el; },
        className: "jsk-car" + (props.className ? " " + props.className : ""),
        style: Object.assign({ height: props.height || 280, background: "linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff," + hc + ")" }, props.style), onPointerDown: down }, rest),
      h("div", { className: "jsk-car__thumb", style: { left: "calc(" + s * 100 + "% - 10px)", top: "calc(" + (1 - v) * 100 + "% - 10px)" }, role: "slider", tabIndex: 0,
        "aria-label": props.label || "Saturation and brightness", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": Math.round(s * 100),
        "aria-valuetext": "Saturation " + Math.round(s * 100) + "%, brightness " + Math.round(v * 100) + "%", onKeyDown: onKey },
        h("span", { className: "jsk-csl__dot", style: { background: cur } })));
  });

  function CpText(props) {
    var _t = React.useState(props.value), t = _t[0], setT = _t[1], focused = React.useRef(false), dirty = React.useRef(false);
    React.useEffect(function () { if (!dirty.current) setT(props.value); }, [props.value]);
    function commit() { var ok = dirty.current ? props.onCommit(t) : true; dirty.current = false; if (!ok) setT(props.value); }
    return h("input", { className: props.className, disabled: props.disabled, value: focused.current ? t : props.value, "aria-label": props.label, spellCheck: false, autoComplete: "off", inputMode: props.inputMode,
      onFocus: function (e) { focused.current = true; dirty.current = false; setT(props.value); e.target.select(); }, onBlur: function () { commit(); focused.current = false; },
      onChange: function (e) { dirty.current = true; setT(e.target.value); }, onKeyDown: function (e) { if (e.key === "Enter") { commit(); e.target.select(); } if (e.key === "Escape") { dirty.current = false; setT(props.value); } } });
  }
  var CP_FORMATS = [{ value: "hex", label: "Hex" }, { value: "rgb", label: "RGB" }, { value: "hsl", label: "HSL" }];
  var ColorInput = React.forwardRef(function ColorInput(props, ref) {
    var st = cpUseColor(props, "value", "#040668"), hsva = st[0], set = st[1];
    var _f = React.useState(props.defaultFormat || "hex"), fmtInner = _f[0], setFmtInner = _f[1];
    var fmt = props.format || fmtInner;
    var showAlpha = props.alpha !== false;
    var rest = omit(props, ["value", "defaultValue", "onChange", "format", "defaultFormat", "onFormatChange", "showFormat", "alpha", "swatch", "label", "className", "onSwatchClick", "swatchLabel", "swatchExpanded", "disabled"]);
    var field = h("div", { className: "jsk-cin__box" },
      h("label", { className: "jsk-cin__main" },
        props.swatch !== false ? h(ColorSwatch, props.onSwatchClick ? { color: cpToHex(Object.assign({}, hsva, { a: 1 })), size: "sm", onClick: function (e) { e.preventDefault(); props.onSwatchClick(e); }, label: props.swatchLabel || "Open colour picker", "aria-haspopup": "dialog", "aria-expanded": !!props.swatchExpanded, disabled: props.disabled } : { color: cpToHex(Object.assign({}, hsva, { a: 1 })), size: "sm" }) : null,
        h(CpText, { disabled: props.disabled, className: "jsk-cin__text", value: cpFormat(hsva, fmt), label: (props.label || "Colour") + " (" + fmt.toUpperCase() + ")",
          onCommit: function (t) { var n = cpParse(t, fmt, hsva.a); if (!n) return false; if (n.s === 0 || n.v === 0) n.h = hsva.h; set(n); return true; } })),
      showAlpha ? h(CpText, { disabled: props.disabled, className: "jsk-cin__alpha", value: Math.round(hsva.a * 100) + "%", label: (props.label || "Colour") + " opacity", inputMode: "numeric",
        onCommit: function (t) { var n = parseFloat(String(t).replace("%", "")); if (isNaN(n)) return false; set(Object.assign({}, hsva, { a: cpClamp(n, 0, 100) / 100 })); return true; } }) : null);
    return h("div", Object.assign({ ref: ref, className: "jsk-cin" + (props.disabled ? " is-disabled" : "") + (props.className ? " " + props.className : "") }, rest),
      props.showFormat ? h("div", { className: "jsk-cin__fmt" },
        h("select", { value: fmt, "aria-label": "Colour format", onChange: function (e) { if (!props.format) setFmtInner(e.target.value); if (props.onFormatChange) props.onFormatChange(e.target.value); } },
          CP_FORMATS.map(function (f) { return h("option", { key: f.value, value: f.value }, f.label); })),
        cpIcon(CP_CHEV.replace(/(\d+(\.\d+)?)/g, function (m) { return String(+m * 16 / 12); }), 16, 1.5)) : null,
      field);
  });

  var ColorPreview = React.forwardRef(function ColorPreview(props, ref) {
    var c = cpParseHex(props.color) || { r: 4, g: 6, b: 104, a: 1 };
    var light = c.a < 0.5 || cpIsLight(c);
    var rest = omit(props, ["color", "className", "style", "height"]);
    return h("div", Object.assign({ ref: ref, className: "jsk-cpv" + (light ? " is-light" : "") + (props.className ? " " + props.className : ""),
      style: Object.assign({ height: props.height || 128, background: "linear-gradient(" + cpRgbCss(c) + "," + cpRgbCss(c) + ")," + CP_CHECKER }, props.style) }, rest),
      h("span", { className: "jsk-cpv__hash", "aria-hidden": "true" }, "#"), h("span", null, cpToHex(c, false)));
  });

  var ColorPanel = React.forwardRef(function ColorPanel(props, ref) {
    var rest = omit(props, ["size", "onClose", "closeLabel", "children", "className", "padding"]);
    return h("div", Object.assign({ ref: ref, className: "jsk-cpn jsk-cpn--" + (props.size === "lg" ? "lg" : "md") + (props.className ? " " + props.className : "") }, rest),
      props.children,
      props.onClose ? h("div", { className: "jsk-cpn__close" }, h(CloseButton, { size: "sm", onClick: props.onClose, "aria-label": props.closeLabel || "Close colour picker" })) : null);
  });

  function cpGradientCss(g) {
    var stops = (g.stops || []).slice().sort(function (a, b) { return a.position - b.position; }).map(function (s) { var c = cpParseHex(s.color) || { r: 0, g: 0, b: 0, a: 1 }; return cpRgbCss(c) + " " + Math.round(s.position) + "%"; }).join(", ");
    if (g.type === "radial") return "radial-gradient(circle, " + stops + ")";
    if (g.type === "conic") return "conic-gradient(from " + Math.round(g.angle || 0) + "deg, " + stops + ")";
    return "linear-gradient(" + Math.round(g.angle != null ? g.angle : 135) + "deg, " + stops + ")";
  }
  var CP_ADJ = [["exposure", "Exposure"], ["contrast", "Contrast"], ["saturation", "Saturation"], ["temperature", "Temperature"], ["tint", "Tint"], ["highlights", "Highlights"], ["shadows", "Shadows"]];
  function cpFilterCss(a) {
    a = a || {};
    var f = function (k) { return (a[k] || 0) / 100; };
    return "brightness(" + (1 + f("exposure") * 0.6 + f("highlights") * 0.15 + f("shadows") * 0.1).toFixed(3) + ") contrast(" + (1 + f("contrast") * 0.6 - f("shadows") * 0.1).toFixed(3) + ") saturate(" + (1 + f("saturation")).toFixed(3) + ") sepia(" + Math.max(0, f("temperature") * 0.4).toFixed(3) + ") hue-rotate(" + Math.round(f("tint") * 30 - Math.min(0, f("temperature")) * 20) + "deg)";
  }
  function CpAdjust(props) {
    var track = React.useRef(null), v = props.value || 0;
    var down = cpDrag(track, function (x) { props.onChange(Math.round(x * 200 - 100)); });
    function onKey(e) {
      var st = e.shiftKey ? 10 : 1, n = v;
      if (e.key === "ArrowRight" || e.key === "ArrowUp") n += st; else if (e.key === "ArrowLeft" || e.key === "ArrowDown") n -= st;
      else if (e.key === "Home") n = -100; else if (e.key === "End") n = 100; else if (e.key === "Delete" || e.key === "Backspace") n = 0; else return;
      e.preventDefault(); props.onChange(cpClamp(n, -100, 100));
    }
    return h("div", { className: "jsk-cadj" },
      h("span", { className: "jsk-cadj__label", id: props.id }, props.label),
      h("div", { className: "jsk-cadj__track", ref: track, onPointerDown: down, onDoubleClick: function () { props.onChange(0); } },
        h("div", { className: "jsk-cadj__thumb", style: { left: "calc(" + (v + 100) / 2 + "% - " + (v + 100) / 200 * 16 + "px)" }, role: "slider", tabIndex: 0, "aria-labelledby": props.id,
          "aria-valuemin": -100, "aria-valuemax": 100, "aria-valuenow": v, onKeyDown: onKey })));
  }
  function CpSaved(props) {
    return h("div", { className: "jsk-cpk__sec" },
      h("div", { className: "jsk-cpk__sechead" },
        h("span", { className: "jsk-cpk__title" }, props.title),
        props.onAdd ? h(Button, { hierarchy: "link-gray", size: "xs", iconLeading: cpIcon(CP_PLUS, 16), onClick: props.onAdd }, props.addLabel || "Add") : null),
      props.children);
  }
  function cpUseList(props, key, dflt) {
    var _l = React.useState(props["default" + key[0].toUpperCase() + key.slice(1)] || dflt), inner = _l[0], setInner = _l[1];
    var list = props[key] != null ? props[key] : inner;
    function set(n) { if (props[key] == null) setInner(n); var cb = props["on" + key[0].toUpperCase() + key.slice(1) + "Change"]; if (cb) cb(n); }
    return [list, set];
  }
  var CP_PALETTES = [["Lime","F7FEE7 ECFCCB D9F99D BEF264 A3E635 84CC16 65A30D 4D7C0F 3F6212 365314 1A2E05"],["Green","F0FDF4 DCFCE7 BBF7D0 86EFAC 4ADE80 22C55E 16A34A 15803D 166534 14532D 052E16"],["Emerald","ECFDF5 D1FAE5 A7F3D0 6EE7B7 34D399 10B981 059669 047857 065F46 064E3B 022C22"],["Teal","F0FDFA CCFBF1 99F6E4 5EEAD4 2DD4BF 14B8A6 0D9488 0F766E 115E59 134E4A 042F2E"],["Cyan","ECFEFF CFFAFE A5F3FC 67E8F9 22D3EE 06B6D4 0891B2 0E7490 155E75 164E63 083344"],["Sky","F0F9FF E0F2FE BAE6FD 7DD3FC 38BDF8 0EA5E9 0284C7 0369A1 075985 0C4A6E 082F49"],["Blue","EFF6FF DBEAFE BFDBFE 93C5FD 60A5FA 3B82F6 2563EB 1D4ED8 1E40AF 1E3A8A 172554"],["Indigo","EEF2FF E0E7FF C7D2FE A5B4FC 818CF8 6366F1 4F46E5 4338CA 3730A3 312E81 1E1B4B"],["Violet","F5F3FF EDE9FE DDD6FE C4B5FD A78BFA 8B5CF6 7C3AED 6D28D9 5B21B6 4C1D95 2E1065"],["Purple","FAF5FF F3E8FF E9D5FF D8B4FE C084FC A855F7 9333EA 7E22CE 6B21A8 581C87 3B0764"],["Fuchsia","FDF4FF FAE8FF F5D0FE F0ABFC E879F9 D946EF C026D3 A21CAF 86198F 701A75 4A044E"],["Pink","FDF2F8 FCE7F3 FBCFE8 F9A8D4 F472B6 EC4899 DB2777 BE185D 9D174D 831843 500724"],["Rose","FFF1F2 FFE4E6 FECDD3 FDA4AF FB7185 F43F5E E11D48 BE123C 9F1239 881337 4C0519"],["Red","FEF2F2 FEE2E2 FECACA FCA5A5 F87171 EF4444 DC2626 B91C1C 991B1B 7F1D1D 450A0A"],["Orange","FFF7ED FFEDD5 FED7AA FDBA74 FB923C F97316 EA580C C2410C 9A3412 7C2D12 431407"],["Amber","FFFBEB FEF3C7 FDE68A FCD34D FBBF24 F59E0B D97706 B45309 92400E 78350F 451A03"],["Yellow","FEFCE8 FEF9C3 FEF08A FDE047 FACC15 EAB308 CA8A04 A16207 854D0E 713F12 422006"]].map(function (p) { return { name: p[0], shades: p[1].split(" ").map(function (x) { return "#" + x; }) }; });
  var CP_DEFAULT_SAVED = ["#16A34A", "#2563EB", "#4F46E5", "#9333EA", "#C026D3", "#DB2777", "#DC2626", "#EA580C", "#040668"];
  var CP_DEFAULT_GRAD = { type: "linear", angle: 135, stops: [{ color: "#040668", position: 0 }, { color: "#020334", position: 100 }] };

  function CpGradient(props) {
    var g = props.gradient, set = props.onChange;
    var _s = React.useState(0), sel = _s[0], setSel = _s[1];
    if (sel >= g.stops.length) sel = 0;
    var prev = React.useRef(null), bar = React.useRef(null), uid = props.uid;
    var css = cpGradientCss(g);
    function upd(patch) { set(Object.assign({}, g, patch)); }
    function updStop(i, patch) { var s = g.stops.slice(); s[i] = Object.assign({}, s[i], patch); upd({ stops: s }); }
    var ang = g.angle != null ? g.angle : 135;
    function knob(which) {
      return cpDrag(prev, function (x, y, r) {
        var dx = x - 0.5, dy = y - 0.5, a = Math.atan2(dx, -dy) * 180 / Math.PI; if (which === "start") a += 180;
        upd({ angle: Math.round(((a % 360) + 360) % 360) });
      });
    }
    function knobKey(e) {
      var d = e.key === "ArrowRight" || e.key === "ArrowUp" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowDown" ? -1 : 0; if (!d) return;
      e.preventDefault(); upd({ angle: ((ang + d * (e.shiftKey ? 15 : 1)) % 360 + 360) % 360 });
    }
    var rad = ang * Math.PI / 180, kx = Math.sin(rad), ky = -Math.cos(rad);
    function stopDrag(i) {
      return function (e) {
        setSel(i); e.stopPropagation();
        cpDrag(bar, function (x) { updStop(i, { position: Math.round(x * 100) }); })(e);
      };
    }
    function stopKey(i) {
      return function (e) {
        var p = g.stops[i].position, d = e.key === "ArrowRight" || e.key === "ArrowUp" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowDown" ? -1 : 0;
        if (e.key === "Delete" && g.stops.length > 2) { e.preventDefault(); remove(i); return; }
        if (!d) return; e.preventDefault(); updStop(i, { position: cpClamp(p + d * (e.shiftKey ? 10 : 1), 0, 100) });
      };
    }
    function remove(i) { var s = g.stops.slice(); s.splice(i, 1); upd({ stops: s }); setSel(0); }
    function add() {
      var s = g.stops.slice().sort(function (a, b) { return a.position - b.position; });
      var gap = 0, at = 50; for (var i = 0; i < s.length - 1; i++) if (s[i + 1].position - s[i].position > gap) { gap = s[i + 1].position - s[i].position; at = Math.round((s[i].position + s[i + 1].position) / 2); }
      var n = g.stops.concat([{ color: g.stops[sel] ? g.stops[sel].color : "#040668", position: at }]); upd({ stops: n }); setSel(n.length - 1);
    }
    var cur = g.stops[sel] ? cpRgb2Hsv(cpParseHex(g.stops[sel].color) || { r: 0, g: 0, b: 0, a: 1 }) : null;
    var hueRef = React.useRef(cur ? cur.h : 0); if (cur && cur.s > 0 && cur.v > 0) hueRef.current = cur.h;
    return h(React.Fragment, null,
      h("div", { className: "jsk-cpk__preview", ref: prev, style: { background: css + "," + CP_CHECKER } },
        g.type !== "radial" ? h(React.Fragment, null,
          h("div", { className: "jsk-cpk__axis", style: { transform: "translate(-50%,-50%) rotate(" + ang + "deg)" } }),
          [["start", -1], ["end", 1]].map(function (k) {
            var col = g.stops.slice().sort(function (a, b) { return a.position - b.position; })[k[1] < 0 ? 0 : g.stops.length - 1];
            return h("div", { key: k[0], className: "jsk-cpk__knob", style: { left: "calc(50% + " + (k[1] * kx * 38) + "%)", top: "calc(50% + " + (k[1] * ky * 38) + "%)" },
              onPointerDown: knob(k[0]), onKeyDown: knobKey, role: "slider", tabIndex: 0, "aria-label": "Gradient angle", "aria-valuemin": 0, "aria-valuemax": 359, "aria-valuenow": ang, "aria-valuetext": ang + "°" },
              h("span", { className: "jsk-csl__dot", style: { background: col ? col.color : "#000" } }));
          })) : null),
      h("div", { className: "jsk-cpk__sec" },
        h("div", { className: "jsk-cpk__sechead" },
          h("label", { className: "jsk-cpk__menu" },
            h("select", { value: g.type || "linear", "aria-label": "Gradient type", onChange: function (e) { upd({ type: e.target.value }); } },
              h("option", { value: "linear" }, "Linear"), h("option", { value: "radial" }, "Radial"), h("option", { value: "conic" }, "Conic")),
            cpIcon(CP_CHEV, 12, 1.5)),
          h(IconButton, { hierarchy: "tertiary", size: "sm", icon: cpIcon(CP_SWAP), "aria-label": "Reverse gradient", title: "Reverse gradient", className: "jsk-cpk__ib",
            onClick: function () { upd({ stops: g.stops.map(function (s) { return Object.assign({}, s, { position: 100 - s.position }); }) }); } })),
        h("div", { className: "jsk-csl__track jsk-cpk__gbar", ref: bar, style: { background: cpGradientCss({ type: "linear", angle: 90, stops: g.stops }) + "," + CP_CHECKER } },
          g.stops.map(function (s, i) {
            return h("div", { key: i, className: "jsk-csl__thumb" + (i === sel ? " is-sel" : ""), style: { left: "calc(" + s.position + "% - " + s.position / 100 * 20 + "px)" },
              onPointerDown: stopDrag(i), onFocus: function () { setSel(i); }, onKeyDown: stopKey(i), role: "slider", tabIndex: 0,
              "aria-label": "Stop " + (i + 1) + " position", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": s.position, "aria-valuetext": s.position + "%, " + s.color },
              h("span", { className: "jsk-csl__dot", style: { background: s.color } }));
          })),
        cur ? h("div", { className: "jsk-cpk__stopedit" },
          h(ColorArea, { height: 120, hue: hueRef.current, saturation: cur.s, brightness: cur.v, label: "Stop " + (sel + 1) + " saturation and brightness",
            onChange: function (o) { updStop(sel, { color: cpToHex({ h: hueRef.current, s: o.saturation, v: o.brightness, a: cur.a }) }); } }),
          h(ColorSlider, { type: "hue", value: hueRef.current, label: "Stop " + (sel + 1) + " hue",
            onChange: function (hh) { hueRef.current = hh; updStop(sel, { color: cpToHex({ h: hh, s: cur.s, v: cur.v, a: cur.a }) }); } })) : null),
      h(CpSaved, { title: "Stops", onAdd: add, addLabel: "Add" },
        h("div", { className: "jsk-cpk__stops" }, g.stops.map(function (s, i) {
          return h("div", { key: i, className: "jsk-cpk__stop" + (i === sel ? " is-sel" : ""), onFocus: function () { setSel(i); } },
            h("div", { className: "jsk-cin__box jsk-cpk__pos" }, h(CpText, { className: "jsk-cin__text", value: Math.round(s.position) + "%", label: "Stop " + (i + 1) + " position", inputMode: "numeric",
              onCommit: function (t) { var n = parseFloat(String(t).replace("%", "")); if (isNaN(n)) return false; updStop(i, { position: cpClamp(n, 0, 100) }); return true; } })),
            h(ColorInput, { value: s.color, label: "Stop " + (i + 1), onChange: function (hex) { updStop(i, { color: hex }); } }),
            h("button", { type: "button", className: "jsk-cs__act", disabled: g.stops.length <= 2, onClick: function () { remove(i); }, "aria-label": "Remove stop " + (i + 1), title: "Remove stop" }, cpIcon(CP_MINUS, 16)));
        }))),
      props.saved ? h(CpSaved, { title: "Saved", onAdd: props.onSave },
        h(ColorSwatches, { label: "Saved gradients", colors: props.saved.map(function (sg, i) { return { value: "g" + i, color: cpGradientCss(sg), label: "Saved gradient " + (i + 1) }; }),
          value: null, onChange: function (v) { var sg = props.saved[+String(v).slice(1)]; if (sg) set(JSON.parse(JSON.stringify(sg))); } })) : null);
  }

  function CpImage(props) {
    var img = props.image, set = props.onChange, file = React.useRef(null);
    var _d = React.useState(false), drag = _d[0], setDrag = _d[1];
    function upd(p) { set(Object.assign({}, img, p)); }
    function pick(f) { if (!f || !/^image\//.test(f.type)) return; upd({ src: URL.createObjectURL(f), name: f.name }); }
    var fitCss = { fill: "center / cover no-repeat", fit: "center / contain no-repeat", tile: "0 0 / 64px repeat", stretch: "center / 100% 100% no-repeat" }[img.fit || "fill"];
    return h(React.Fragment, null,
      h("div", { className: "jsk-cpk__preview jsk-cpk__img" + (drag ? " is-drag" : ""),
        onDragOver: function (e) { e.preventDefault(); setDrag(true); }, onDragLeave: function () { setDrag(false); },
        onDrop: function (e) { e.preventDefault(); setDrag(false); pick(e.dataTransfer.files[0]); } },
        img.src ? h("div", { className: "jsk-cpk__imgfill", style: { background: "url(\"" + img.src + "\") " + fitCss, filter: cpFilterCss(img.adjustments) } }) : null,
        h("div", { className: "jsk-cpk__drop" },
          h(Button, { hierarchy: "secondary", size: "sm", iconLeading: cpIcon(CP_UPLOAD), onClick: function () { file.current.click(); } }, img.src ? "Replace image" : "Click to upload"),
          h("span", null, "or drag and drop")),
        h("input", { ref: file, type: "file", accept: "image/*", hidden: true, onChange: function (e) { pick(e.target.files[0]); e.target.value = ""; } })),
      h("div", { className: "jsk-cpk__sec" },
        h("div", { className: "jsk-cpk__sechead" },
          h("label", { className: "jsk-cpk__menu" },
            h("select", { value: img.fit || "fill", "aria-label": "Image fit", onChange: function (e) { upd({ fit: e.target.value }); } },
              h("option", { value: "fill" }, "Fill"), h("option", { value: "fit" }, "Fit"), h("option", { value: "tile" }, "Tile"), h("option", { value: "stretch" }, "Stretch")),
            cpIcon(CP_CHEV, 12, 1.5)),
          h(IconButton, { hierarchy: "tertiary", size: "sm", className: "jsk-cpk__ib", "aria-label": "Reset adjustments", title: "Reset adjustments",
            icon: cpIcon("M1.67 8.33S3.34 6.06 4.69 4.7a7.5 7.5 0 1 1-1.9 7.38M1.67 8.33v-5m0 5h5"), onClick: function () { upd({ adjustments: {} }); } })),
        h("div", { className: "jsk-cpk__adjs" }, CP_ADJ.map(function (a) {
          return h(CpAdjust, { key: a[0], id: props.uid + "-adj-" + a[0], label: a[1], value: (img.adjustments || {})[a[0]] || 0,
            onChange: function (v) { var n = Object.assign({}, img.adjustments); n[a[0]] = v; upd({ adjustments: n }); } });
        }))));
  }

  var ColorPicker = React.forwardRef(function ColorPicker(props, ref) {
    var modes = props.modes || ["solid", "gradient", "image"];
    var _m = React.useState(props.defaultMode || modes[0]), modeInner = _m[0], setModeInner = _m[1];
    var mode = props.mode || modeInner;
    var st = cpUseColor(props, "value", "#040668"), hsva = st[0], set = st[1];
    var saved = cpUseList(props, "savedColors", CP_DEFAULT_SAVED), savedC = saved[0], setSavedC = saved[1];
    var gl = cpUseList(props, "gradient", CP_DEFAULT_GRAD), grad = gl[0], setGradRaw = gl[1];
    var sg = cpUseList(props, "savedGradients", null), savedG = sg[0], setSavedG = sg[1];
    var il = cpUseList(props, "image", { fit: "fill", adjustments: {} }), image = il[0], setImage = il[1];
    var uid = (React.useId ? React.useId() : "cp").replace(/[^a-zA-Z0-9_-]/g, "");
    var _e = React.useState(typeof window !== "undefined" && "EyeDropper" in window), canDrop = _e[0];
    function setGrad(g) { setGradRaw(g); if (props.onGradientCssChange) props.onGradientCssChange(cpGradientCss(g)); }
    function eyedrop() { try { new window.EyeDropper().open().then(function (r) { var c = cpParseHex(r.sRGBHex); if (c) { var n = cpRgb2Hsv(c); n.a = hsva.a; set(n); } }, function () {}); } catch (e) {} }
    var hex = cpToHex(hsva), hexOpaque = cpToHex(Object.assign({}, hsva, { a: 1 }));
    function onTabKey(e) {
      var i = modes.indexOf(mode), j = e.key === "ArrowRight" ? (i + 1) % modes.length : e.key === "ArrowLeft" ? (i - 1 + modes.length) % modes.length : -1;
      if (j < 0) return; e.preventDefault(); pickMode(modes[j]); var el = document.getElementById(uid + "-t-" + modes[j]); if (el) el.focus();
    }
    function pickMode(m) { if (!props.mode) setModeInner(m); if (props.onModeChange) props.onModeChange(m); }
    var labels = { solid: "Solid", gradient: "Gradient", image: "Image", palette: "Palette" };
    var tabs = modes.length > 1 ? h("div", { className: "jsk-cpk__tabs", role: "tablist", "aria-label": "Fill type", onKeyDown: onTabKey },
      modes.map(function (m) {
        return h("button", { key: m, id: uid + "-t-" + m, type: "button", role: "tab", "aria-selected": m === mode, "aria-controls": uid + "-p", tabIndex: m === mode ? 0 : -1,
          className: "jsk-cpk__tab" + (m === mode ? " is-current" : ""), onClick: function () { pickMode(m); } }, labels[m] || m);
      })) : null;
    var body;
    function onInput(v) { var c = cpRgb2Hsv(cpParseHex(v)); if (c.s === 0 || c.v === 0) c.h = hsva.h; set(c); }
    var savedSec = props.savedColors === false ? null : h(CpSaved, { title: "Saved", onAdd: function () { if (savedC.map(function (x) { return x.toUpperCase(); }).indexOf(hex) < 0) setSavedC(savedC.concat([hex])); } },
      h(ColorSwatches, { colors: savedC, value: hex, label: "Saved colours", onChange: function (v) { var c = cpRgb2Hsv(cpParseHex(v)); set(c); } }));
    if (mode === "palette") body = h(React.Fragment, null,
      h(ColorPalette, { palettes: props.palettes || CP_PALETTES, value: hexOpaque, label: "Colour palette",
        onChange: function (v) { var c = cpRgb2Hsv(cpParseHex(v)); c.a = hsva.a; set(c); } }),
      props.alpha !== false ? h("div", { className: "jsk-cpk__opacity" },
        h("span", { className: "jsk-cpk__title", "aria-hidden": "true" }, "Opacity"),
        h(ColorSlider, { type: "alpha", value: hsva.a, color: hexOpaque, label: "Opacity", onChange: function (a) { set(Object.assign({}, hsva, { a: a })); } })) : null,
      h(ColorInput, { value: hex, onChange: onInput, showFormat: true, alpha: props.alpha !== false, format: props.format, defaultFormat: props.defaultFormat, onFormatChange: props.onFormatChange }),
      savedSec);
    else if (mode === "gradient") body = h(CpGradient, { uid: uid, gradient: grad, onChange: setGrad, saved: savedG, onSave: savedG ? function () { setSavedG(savedG.concat([JSON.parse(JSON.stringify(grad))])); } : null });
    else if (mode === "image") body = h(CpImage, { uid: uid, image: image, onChange: setImage });
    else body = h(React.Fragment, null,
      h(ColorArea, { hue: hsva.h, saturation: hsva.s, brightness: hsva.v, onChange: function (o) { set(Object.assign({}, hsva, { s: o.saturation, v: o.brightness })); } }),
      h("div", { className: "jsk-cpk__sec" },
        h("div", { className: "jsk-cpk__sliders" },
          h(Button, { hierarchy: "secondary", size: "sm", iconOnly: true, iconLeading: cpIcon(CP_DROP), onClick: eyedrop, disabled: !canDrop, "aria-label": "Pick colour from screen", title: canDrop ? "Pick colour from screen" : "Eyedropper isn't supported in this browser" }),
          h("div", { className: "jsk-cpk__sliderstack" },
            h(ColorSlider, { type: "hue", value: hsva.h, onChange: function (hh) { set(Object.assign({}, hsva, { h: hh })); } }),
            props.alpha !== false ? h(ColorSlider, { type: "alpha", value: hsva.a, color: hexOpaque, onChange: function (a) { set(Object.assign({}, hsva, { a: a })); } }) : null)),
        h(ColorInput, { value: hex, onChange: function (v) { var c = cpRgb2Hsv(cpParseHex(v)); if (c.s === 0 || c.v === 0) c.h = hsva.h; set(c); }, showFormat: true, alpha: props.alpha !== false, format: props.format, defaultFormat: props.defaultFormat, onFormatChange: props.onFormatChange })),
      props.savedColors === false ? null : h(CpSaved, { title: "Saved", onAdd: function () { if (savedC.map(function (x) { return x.toUpperCase(); }).indexOf(hex) < 0) setSavedC(savedC.concat([hex])); } },
        h(ColorSwatches, { colors: savedC, value: hex, label: "Saved colours", onChange: function (v) { var c = cpRgb2Hsv(cpParseHex(v)); set(c); } })));
    var rest = omit(props, ["value", "defaultValue", "onChange", "modes", "mode", "defaultMode", "onModeChange", "savedColors", "defaultSavedColors", "onSavedColorsChange", "gradient", "defaultGradient", "onGradientChange", "onGradientCssChange", "savedGradients", "defaultSavedGradients", "onSavedGradientsChange", "image", "defaultImage", "onImageChange", "alpha", "format", "defaultFormat", "onFormatChange", "onClose", "className", "palettes"]);
    return h(ColorPanel, Object.assign({ ref: ref, size: "lg", onClose: props.onClose, className: "jsk-cpk" + (props.className ? " " + props.className : ""), role: "group", "aria-label": props["aria-label"] || "Colour picker" }, rest),
      h("div", { className: "jsk-cpk__body" },
        h("div", { className: "jsk-cpk__top" }, tabs),
        h("div", { id: uid + "-p", className: "jsk-cpk__content", role: modes.length > 1 ? "tabpanel" : undefined, "aria-labelledby": modes.length > 1 ? uid + "-t-" + mode : undefined }, body)));
  });

  var CP_SHADES = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"];
  var ColorPalette = React.forwardRef(function ColorPalette(props, ref) {
    var pals = props.palettes || CP_PALETTES, shades = props.shadeLabels || CP_SHADES;
    var val = props.value != null ? String(props.value).toUpperCase() : null;
    var selC = -1, selR = -1;
    pals.forEach(function (p, ci) { (p.shades || []).forEach(function (s, ri) { if (selC < 0 && val && String(s).toUpperCase() === val) { selC = ci; selR = ri; } }); });
    var _f = React.useState(null), focus = _f[0], setFocus = _f[1];
    var cells = React.useRef({});
    var fc = focus || (selC >= 0 ? [selC, selR] : [0, 0]);
    function move(ci, ri) {
      ci = cpClamp(ci, 0, pals.length - 1); ri = cpClamp(ri, 0, (pals[ci].shades || []).length - 1);
      setFocus([ci, ri]); var el = cells.current[ci + "-" + ri]; if (el) el.focus();
    }
    function onKey(e) {
      var d = { ArrowRight: [1, 0], ArrowLeft: [-1, 0], ArrowDown: [0, 1], ArrowUp: [0, -1] }[e.key];
      if (d) { e.preventDefault(); move(fc[0] + d[0], fc[1] + d[1]); return; }
      if (e.key === "Home") { e.preventDefault(); move(0, fc[1]); } else if (e.key === "End") { e.preventDefault(); move(pals.length - 1, fc[1]); }
      else if (e.key === "Enter" || e.key === " ") { e.preventDefault(); if (props.onChange) props.onChange(pals[fc[0]].shades[fc[1]]); }
    }
    var rest = omit(props, ["palettes", "shadeLabels", "value", "onChange", "label", "className", "cellHeight"]);
    return h("div", Object.assign({ ref: ref, className: "jsk-cpal" + (props.className ? " " + props.className : ""), role: "grid", "aria-label": props.label || "Colour palette", onKeyDown: onKey }, rest),
      pals.map(function (p, ci) {
        return h("div", { key: ci, className: "jsk-cpal__col", role: "row" }, (p.shades || []).map(function (s, ri) {
          var on = ci === selC && ri === selR, isF = fc[0] === ci && fc[1] === ri;
          return h("div", { key: ri, role: "gridcell", "aria-selected": on },
            h("button", { type: "button", ref: function (el) { cells.current[ci + "-" + ri] = el; }, className: "jsk-cpal__cell" + (on ? " is-selected" : ""), tabIndex: isF ? 0 : -1,
              style: { background: s, height: props.cellHeight || 20 }, "aria-label": p.name + " " + (shades[ri] || ri + 1) + " " + String(s).toUpperCase(), title: p.name + " " + (shades[ri] || "") ,
              onFocus: function () { setFocus([ci, ri]); }, onClick: function () { if (props.onChange) props.onChange(s); } }));
        }));
      }));
  });

  /* ---------- ColorPickerPopover ---------- */
  var ColorPickerPopover = React.forwardRef(function ColorPickerPopover(props, ref) {
    var trigger = props.trigger || "swatch";
    var _o = React.useState(!!props.defaultOpen), openInner = _o[0], setOpenInner = _o[1];
    var open = props.open != null ? props.open : openInner;
    var st = cpUseColor(props, "value", "#040668"), hsva = st[0], set = st[1];
    var hex = cpToHex(hsva), hex6 = cpToHex(Object.assign({}, hsva, { a: 1 }));
    var wrap = React.useRef(null), pop = React.useRef(null), trig = React.useRef(null);
    var uid = (React.useId ? React.useId() : "cpp").replace(/[^a-zA-Z0-9_-]/g, "");
    var _p = React.useState({ v: "bottom", h: props.align || (trigger === "select" ? "start" : "end") }), place = _p[0], setPlace = _p[1];
    function setOpen(v, refocus) {
      if (props.disabled && v) return;
      if (props.open == null) setOpenInner(v);
      if (props.onOpenChange) props.onOpenChange(v);
      if (!v && refocus !== false) setTimeout(function () { var t = trig.current && (trig.current.querySelector && trig.current.matches && !trig.current.matches("button") ? trig.current.querySelector("button") : trig.current); if (t && t.focus) t.focus(); }, 0);
    }
    React.useEffect(function () {
      if (!open) return;
      function onDoc(e) { if (wrap.current && !wrap.current.contains(e.target)) setOpen(false, false); }
      function onKey(e) { if (e.key === "Escape") { e.stopPropagation(); setOpen(false); } }
      document.addEventListener("mousedown", onDoc); document.addEventListener("keydown", onKey);
      var f = pop.current && pop.current.querySelector('[role="tab"][aria-selected="true"], [role="slider"], input, button');
      if (f && f.focus) f.focus({ preventScroll: true });
      return function () { document.removeEventListener("mousedown", onDoc); document.removeEventListener("keydown", onKey); };
    }, [open]);
    React.useLayoutEffect(function () {
      if (!open || !pop.current || !wrap.current) return;
      var w = wrap.current.getBoundingClientRect(), pw = pop.current.offsetWidth, ph = pop.current.offsetHeight;
      var hAlign = props.align || (trigger === "select" ? "start" : "end");
      if (hAlign === "end" && w.right - pw < 8) hAlign = "start"; else if (hAlign === "start" && w.left + pw > window.innerWidth - 8 && w.right - pw >= 8) hAlign = "end";
      var vAlign = window.innerHeight - w.bottom < ph + 16 && w.top > ph + 16 ? "top" : "bottom";
      if (vAlign !== place.v || hAlign !== place.h) setPlace({ v: vAlign, h: hAlign });
    }, [open]);
    var lbl = props.label || "Colour";
    var expanded = { "aria-haspopup": "dialog", "aria-expanded": open, "aria-controls": open ? uid + "-pop" : undefined };
    var swatchNode = h(ColorSwatch, { color: hex, size: "sm" });
    var chev16 = cpIcon("m4 6 4 4 4-4", 16, 1.5), chev12 = cpIcon(CP_CHEV, 12, 1.5);
    var trig$;
    if (trigger === "button") trig$ = h("button", Object.assign({ ref: trig, type: "button", className: "jsk-cpp__btn", disabled: props.disabled, onClick: function () { setOpen(!open); } }, expanded),
      swatchNode, h("span", { className: "jsk-cpp__txt" }, props.triggerLabel || lbl), h("span", { className: "jsk-cpp__chev" }, chev16));
    else if (trigger === "link") trig$ = h("button", Object.assign({ ref: trig, type: "button", className: "jsk-cpp__link", disabled: props.disabled, onClick: function () { setOpen(!open); } }, expanded),
      h(ColorSwatch, { color: hex, size: "sm", selected: open }), h("span", { className: "jsk-cpp__txt" }, props.triggerLabel || lbl, h("span", { className: "jsk-cpp__chev" }, chev12)));
    else if (trigger === "input") trig$ = h("div", { ref: trig, className: "jsk-cpp__input" },
      h(ColorInput, { value: hex, onChange: function (v) { set(cpRgb2Hsv(cpParseHex(v))); }, label: lbl, disabled: props.disabled, alpha: props.alpha !== false,
        onSwatchClick: function () { setOpen(!open); }, swatchExpanded: open, swatchLabel: "Open " + lbl.toLowerCase() + " picker" }));
    else if (trigger === "select") trig$ = h("div", { className: "jsk-field jsk-cpp__field" },
      props.label ? h("label", { className: "jsk-field__label", htmlFor: uid + "-sel" }, props.label) : null,
      h("button", Object.assign({ ref: trig, id: uid + "-sel", type: "button", className: "jsk-cpp__select" + (open ? " is-open" : ""), disabled: props.disabled, onClick: function () { setOpen(!open); } }, expanded),
        props.showSwatch !== false ? swatchNode : null, h("span", { className: "jsk-cpp__val" }, hex), h("span", { className: "jsk-cpp__chev" }, chev16)),
      props.hint ? h("span", { className: "jsk-field__hint" }, props.hint) : null);
    else trig$ = h(ColorSwatch, Object.assign({ ref: trig, color: hex, size: props.size === "lg" ? "lg" : "md", selected: open, onClick: function () { setOpen(!open); }, label: (props.label || "Colour") + " " + hex, disabled: props.disabled, className: "jsk-cpp__sw" }, expanded));
    var pickerProps = omit(props, ["trigger", "open", "defaultOpen", "onOpenChange", "align", "label", "triggerLabel", "hint", "showSwatch", "disabled", "size", "className", "style", "value", "defaultValue", "onChange"]);
    var rest = { className: "jsk-cpp jsk-cpp--" + trigger + (open ? " is-open" : "") + (props.disabled ? " is-disabled" : "") + (props.className ? " " + props.className : ""), style: props.style };
    return h("div", Object.assign({ ref: function (el) { wrap.current = el; if (typeof ref === "function") ref(el); else if (ref) ref.current = el; } }, rest),
      trig$,
      open ? h("div", { ref: pop, id: uid + "-pop", role: "dialog", "aria-label": lbl + " picker", className: "jsk-cpp__pop is-" + place.v + " is-" + place.h },
        h(ColorPicker, Object.assign({}, pickerProps, { value: hex, onChange: function (v) { var c = cpRgb2Hsv(cpParseHex(v)); if (c.s === 0 || c.v === 0) c.h = hsva.h; set(c); }, onClose: function () { setOpen(false); } }))) : null);
  });

  /* ---------- ColorPickerModal ---------- */
  var ColorPickerModal = React.forwardRef(function ColorPickerModal(props, ref) {
    var _o = React.useState(!!props.defaultOpen), openInner = _o[0], setOpenInner = _o[1];
    var open = props.open != null ? props.open : openInner;
    var dlg = React.useRef(null), last = React.useRef(null);
    var portal = props.portal !== false;
    function setOpen(v) { if (props.open == null) setOpenInner(v); if (props.onOpenChange) props.onOpenChange(v); }
    React.useEffect(function () {
      if (!open) return;
      last.current = document.activeElement;
      var el = dlg.current;
      if (el) {
        var first = el.querySelector(".jsk-cpal__cell[tabindex='0']") || el.querySelector("button:not([disabled]), [tabindex='0'], input, select");
        if (first && props.autoFocus !== false) first.focus({ preventScroll: true });
      }
      var prevOverflow = document.body.style.overflow;
      if (portal) document.body.style.overflow = "hidden";
      function key(e) {
        if (e.key === "Escape" && props.closeOnEscape !== false) { e.preventDefault(); setOpen(false); return; }
        if (e.key !== "Tab" || !dlg.current) return;
        var f = Array.prototype.filter.call(dlg.current.querySelectorAll("button:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex='-1'])"), function (n) { return n.offsetParent !== null; });
        if (!f.length) return;
        var a = f[0], z = f[f.length - 1];
        if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
        else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
        else if (!dlg.current.contains(document.activeElement)) { e.preventDefault(); a.focus(); }
      }
      document.addEventListener("keydown", key);
      return function () {
        document.removeEventListener("keydown", key);
        if (portal) document.body.style.overflow = prevOverflow;
        var t = last.current; if (t && t.focus && document.contains(t)) setTimeout(function () { t.focus({ preventScroll: true }); }, 0);
      };
    }, [open]);
    if (!open) return null;
    var place = props.placement || "auto";
    var rest = omit(props, ["open", "defaultOpen", "onOpenChange", "portal", "placement", "label", "closeOnEscape", "closeOnOverlayClick", "showClose", "width", "autoFocus", "className", "style", "modes"]);
    var node = h("div", { className: "jsk-cpm jsk-cpm--" + place + (portal ? "" : " is-contained") + (props.className ? " " + props.className : ""), style: props.style,
        onMouseDown: function (e) { if (e.target === e.currentTarget && props.closeOnOverlayClick !== false) setOpen(false); } },
      h("div", { ref: dlg, className: "jsk-cpm__dialog", role: "dialog", "aria-modal": "true", "aria-label": props.label || "Choose colour", style: props.width ? { width: props.width } : undefined },
        h(ColorPicker, Object.assign({ ref: ref, modes: props.modes || ["palette"], onClose: props.showClose ? function () { setOpen(false); } : undefined }, rest))));
    return portal && typeof document !== "undefined" && ReactDOM.createPortal ? ReactDOM.createPortal(node, document.body) : node;
  });

  /* ---------- ContentDivider ---------- */
  var ContentDivider = React.forwardRef(function ContentDivider(props, ref) {
    var variant = props.variant === "border" || props.variant === "background" ? props.variant : "line";
    var align = props.align === "start" || props.align === "end" ? props.align : "center";
    var content = props.children != null && props.children !== false ? props.children
      : props.label != null ? h(props.as || "span", { className: "jsk-cdiv__label jsk-cdiv__label--" + (props.labelStyle === "heading" ? "heading" : "text") }, props.label) : null;
    var rest = omit(props, ["variant", "align", "label", "labelStyle", "as", "children", "className", "gap"]);
    var cls = "jsk-cdiv jsk-cdiv--" + variant + " jsk-cdiv--" + align + (props.className ? " " + props.className : "");
    var style = props.gap != null ? Object.assign({ gap: props.gap }, props.style) : props.style;
    if (content == null) {
      if (variant === "line") return h("div", Object.assign({ ref: ref, role: "separator", className: cls + " is-empty" }, rest, { style: style }), h("span", { className: "jsk-cdiv__line", "aria-hidden": "true" }));
      return h("div", Object.assign({ ref: ref, role: "separator", className: cls + " is-empty" }, rest, { style: style }));
    }
    var line = function (k) { return h("span", { key: k, className: "jsk-cdiv__line", "aria-hidden": "true" }); };
    return h("div", Object.assign({ ref: ref, className: cls }, rest, { style: style }),
      variant === "line" && align !== "start" ? line("a") : null,
      h("div", { className: "jsk-cdiv__content" }, content),
      variant === "line" && align !== "end" ? line("b") : null);
  });

  /* ---------- Calendar / DatePicker ---------- */
  var DP_CAL = "M17.5 8.33h-15M13.33 1.67V5M6.67 1.67V5M6.5 18.33h7c1.4 0 2.1 0 2.64-.27a2.5 2.5 0 0 0 1.09-1.1c.27-.53.27-1.23.27-2.63v-7c0-1.4 0-2.1-.27-2.64a2.5 2.5 0 0 0-1.09-1.09c-.54-.27-1.24-.27-2.64-.27h-7c-1.4 0-2.1 0-2.64.27a2.5 2.5 0 0 0-1.09 1.1c-.27.53-.27 1.23-.27 2.63v7c0 1.4 0 2.1.27 2.64a2.5 2.5 0 0 0 1.1 1.09c.53.27 1.23.27 2.63.27Z";
  var DP_CAL16 = "M14 6.67H2M10.67 1.33V4M5.33 1.33V4M5.2 14.67h5.6c1.12 0 1.68 0 2.11-.22.37-.2.68-.5.87-.87.22-.43.22-.99.22-2.11V5.87c0-1.12 0-1.68-.22-2.1a2 2 0 0 0-.87-.88c-.43-.22-.99-.22-2.11-.22H5.2c-1.12 0-1.68 0-2.11.22a2 2 0 0 0-.87.87C2 4.2 2 4.75 2 5.87v5.6c0 1.12 0 1.68.22 2.1.19.38.5.69.87.88.43.22.99.22 2.11.22Z";
  function dpNorm(v) {
    if (v == null || v === "") return null;
    if (v instanceof Date) return isNaN(v) ? null : new Date(v.getFullYear(), v.getMonth(), v.getDate());
    if (typeof v === "string") { var m = /^(\d{4})-(\d{1,2})(?:-(\d{1,2}))?/.exec(v); if (m) return new Date(+m[1], +m[2] - 1, m[3] ? +m[3] : 1); if (/^\d{4}$/.test(v)) return new Date(+v, 0, 1); }
    var d = new Date(v); return isNaN(d) ? null : dpNorm(d);
  }
  function dpSnap(d, g) { if (!d) return null; return g === "year" ? new Date(d.getFullYear(), 0, 1) : g === "month" ? new Date(d.getFullYear(), d.getMonth(), 1) : d; }
  function dpNum(d, g) { return !d ? null : g === "year" ? d.getFullYear() : g === "month" ? d.getFullYear() * 12 + d.getMonth() : d.getFullYear() * 10000 + d.getMonth() * 100 + d.getDate(); }
  function dpAdd(d, g, n) { return g === "year" ? new Date(d.getFullYear() + n, 0, 1) : g === "month" ? new Date(d.getFullYear(), d.getMonth() + n, 1) : new Date(d.getFullYear(), d.getMonth(), d.getDate() + n); }
  var dpNameCache = {};
  function dpNames(locale, kind) {
    var k = locale + kind; if (dpNameCache[k]) return dpNameCache[k];
    var out = [];
    try {
      if (kind === "wd") { for (var i = 0; i < 7; i++) out.push(new Intl.DateTimeFormat(locale, { weekday: "short" }).format(new Date(2024, 0, 7 + i))); }
      else for (var j = 0; j < 12; j++) out.push(new Intl.DateTimeFormat(locale, { month: kind }).format(new Date(2021, j, 1)));
    } catch (e) { out = kind === "wd" ? ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; }
    return (dpNameCache[k] = out);
  }
  function dpFmt(d, g, locale, long) {
    if (!d) return ""; var mn = dpNames(locale, long ? "long" : "short");
    if (g === "year") return "" + d.getFullYear();
    if (g === "month") return mn[d.getMonth()] + " " + d.getFullYear();
    return d.getDate() + " " + mn[d.getMonth()] + " " + d.getFullYear();
  }
  function dpParse(s, g, locale) {
    s = String(s || "").trim(); if (!s) return null;
    var iso = /^(\d{4})(?:-(\d{1,2}))?(?:-(\d{1,2}))?$/.exec(s);
    if (iso) return dpSnap(new Date(+iso[1], iso[2] ? +iso[2] - 1 : 0, iso[3] ? +iso[3] : 1), g);
    var dmy = /^(\d{1,2})[\/.\-](\d{1,2})[\/.\-](\d{4})$/.exec(s);
    if (dmy) return dpSnap(new Date(+dmy[3], +dmy[2] - 1, +dmy[1]), g);
    var my = /^(\d{1,2})[\/.\-](\d{4})$/.exec(s);
    if (my && g !== "day") return dpSnap(new Date(+my[2], +my[1] - 1, 1), g);
    var ms = dpNames(locale, "short").map(function (x) { return x.toLowerCase().replace(/\.$/, ""); }), ml = dpNames(locale, "long").map(function (x) { return x.toLowerCase(); });
    var day = null, mon = null, yr = null;
    s.toLowerCase().split(/[\s,]+/).forEach(function (t) {
      if (/^\d{4}$/.test(t)) yr = +t; else if (/^\d{1,2}$/.test(t)) day = +t;
      else { t = t.replace(/\.$/, ""); var i = ml.indexOf(t); if (i < 0) i = ms.indexOf(t); if (i < 0 && t.length >= 3) for (var k = 0; k < 12; k++) if (ml[k].indexOf(t) === 0) { i = k; break; } if (i >= 0) mon = i; }
    });
    if (yr == null) return null;
    if (g === "year") return new Date(yr, 0, 1);
    if (mon == null) return null;
    if (g === "month") return new Date(yr, mon, 1);
    if (day == null) return null;
    var d = new Date(yr, mon, day); return d.getMonth() === mon ? d : null;
  }
  function dpPresets(g, t) {
    var y = t.getFullYear(), m = t.getMonth(), d = t.getDate(), wd = (t.getDay() + 6) % 7;
    function R(label, a, b) { return { label: label, value: { start: a, end: b } }; }
    var all = { label: "All time", value: { start: null, end: dpSnap(t, g) } };
    if (g === "year") return [R("This year", new Date(y, 0, 1), new Date(y, 0, 1)), R("Last year", new Date(y - 1, 0, 1), new Date(y - 1, 0, 1)), R("Last 3 years", new Date(y - 2, 0, 1), new Date(y, 0, 1)), R("Last 6 years", new Date(y - 5, 0, 1), new Date(y, 0, 1)), R("Last 10 years", new Date(y - 9, 0, 1), new Date(y, 0, 1)), all];
    if (g === "month") return [R("This month", new Date(y, m, 1), new Date(y, m, 1)), R("Last month", new Date(y, m - 1, 1), new Date(y, m - 1, 1)), R("Last 3 months", new Date(y, m - 2, 1), new Date(y, m, 1)), R("Last 6 months", new Date(y, m - 5, 1), new Date(y, m, 1)), R("This year", new Date(y, 0, 1), new Date(y, 11, 1)), R("Last year", new Date(y - 1, 0, 1), new Date(y - 1, 11, 1)), all];
    return [R("Today", t, t), R("Yesterday", new Date(y, m, d - 1), new Date(y, m, d - 1)), R("This week", new Date(y, m, d - wd), new Date(y, m, d - wd + 6)), R("Last week", new Date(y, m, d - wd - 7), new Date(y, m, d - wd - 1)),
      R("This month", new Date(y, m, 1), new Date(y, m + 1, 0)), R("Last month", new Date(y, m - 1, 1), new Date(y, m, 0)), R("This year", new Date(y, 0, 1), new Date(y, 11, 31)), R("Last year", new Date(y - 1, 0, 1), new Date(y - 1, 11, 31)), all];
  }
  var DP_QUICK = { day: ["Last week", "Last month", "Last year"], month: ["This month", "Last month", "Last 3 months"], year: ["This year", "Last year", "Last 3 years"] };
  function dpVal(v, range, g) {
    if (!range) return dpSnap(dpNorm(v), g);
    v = v || {}; return { start: dpSnap(dpNorm(v.start), g), end: dpSnap(dpNorm(v.end), g) };
  }
  function dpPage(d, g) { var y = d.getFullYear(); return g === "day" ? new Date(y, d.getMonth(), 1) : g === "month" ? new Date(y, 0, 1) : new Date(y - (((y - 4) % 12) + 12) % 12, 0, 1); }
  function dpPageAdd(p, g, n) { return g === "day" ? new Date(p.getFullYear(), p.getMonth() + n, 1) : g === "month" ? new Date(p.getFullYear() + n, 0, 1) : new Date(p.getFullYear() + 12 * n, 0, 1); }
  function dpUseMobile(layout) {
    var q = "(max-width: 767px)";
    var _m = React.useState(function () { return layout === "mobile" || (layout !== "desktop" && typeof window !== "undefined" && window.matchMedia && window.matchMedia(q).matches); }), mob = _m[0], setMob = _m[1];
    React.useEffect(function () {
      if (layout === "mobile" || layout === "desktop") { setMob(layout === "mobile"); return; }
      if (!window.matchMedia) return; var mq = window.matchMedia(q), f = function () { setMob(mq.matches); };
      f(); if (mq.addEventListener) mq.addEventListener("change", f); else mq.addListener(f);
      return function () { if (mq.removeEventListener) mq.removeEventListener("change", f); else mq.removeListener(f); };
    }, [layout]);
    return mob;
  }
  function DpField(props) {
    return h("div", { className: "jsk-cal__field" + (props.size === "md" ? " is-md" : "") },
      props.icon ? h("span", { className: "jsk-cal__fieldicon" }, cpIcon(DP_CAL16, 16, 1.5)) : null,
      h(CpText, { className: "jsk-cal__input", value: props.value, label: props.label, onCommit: props.onCommit }),
      !props.value ? h("span", { className: "jsk-cal__ph", "aria-hidden": "true" }, props.placeholder) : null);
  }

  var Calendar = React.forwardRef(function Calendar(props, ref) {
    var g = props.granularity === "month" || props.granularity === "year" ? props.granularity : "day";
    var range = props.mode === "range";
    var locale = props.locale || "en-US";
    var wkStart = props.weekStartsOn != null ? props.weekStartsOn : 1;
    var today = dpSnap(dpNorm(props.today) || dpNorm(new Date()), g);
    var mobile = dpUseMobile(props.layout || "auto");
    var ctrl = props.value !== undefined;
    var _v = React.useState(function () { return dpVal(props.defaultValue, range, g); });
    var val = ctrl ? dpVal(props.value, range, g) : _v[0];
    function setVal(n) { if (!ctrl) _v[1](n); if (props.onChange) props.onChange(n); }
    var panes = props.panes || (range && !mobile ? 2 : 1);
    var minD = dpSnap(dpNorm(props.min), g), maxD = dpSnap(dpNorm(props.max), g);
    function off(d) { var n = dpNum(d, g); return (minD && n < dpNum(minD, g)) || (maxD && n > dpNum(maxD, g)) || (g === "day" && props.isDateDisabled && props.isDateDisabled(d)); }
    var anchor0 = (range ? val.start || val.end : val) || today;
    var _a = React.useState(function () { return dpPage(anchor0, g); }), page = _a[0], setPage = _a[1];
    var _f = React.useState(null), focus = _f[0], setFocus = _f[1];
    var _h = React.useState(null), hover = _h[0], setHover = _h[1];
    var kbd = React.useRef(false), gridRef = React.useRef(null);
    var uid = (React.useId ? React.useId() : "cal").replace(/[^a-zA-Z0-9_-]/g, "");
    var marked = (props.markedDates || []).map(function (d) { return dpNum(dpSnap(dpNorm(d), g), g); });
    var lastPage = dpPageAdd(page, g, panes - 1);
    function pageOf(d) { return dpPage(d, g); }
    function visible(d) { var p = dpNum(pageOf(d), g === "day" ? "month" : "year"); return p >= dpNum(page, g === "day" ? "month" : "year") && p <= dpNum(lastPage, g === "day" ? "month" : "year"); }
    function show(d) { if (!visible(d)) { var p = pageOf(d); setPage(dpNum(p, "day") < dpNum(page, "day") ? p : dpPageAdd(p, g, -(panes - 1))); } }
    // keep the selection in view when it changes from outside (presets, inputs)
    var selKey = range ? (dpNum(val.start, g) || "") + "-" + (dpNum(val.end, g) || "") : dpNum(val, g) || "";
    var prevSel = React.useRef(selKey);
    React.useEffect(function () {
      if (prevSel.current === selKey) return; prevSel.current = selKey;
      var t = range ? (val.end && !visible(val.end) && !(val.start && visible(val.start)) ? val.end : val.start && !visible(val.start) && !(val.end && visible(val.end)) ? val.start : null) : val && !visible(val) ? val : null;
      if (t) { var p = pageOf(t); setPage(range && val.end && t === val.end ? dpPageAdd(p, g, -(panes - 1)) : p); }
    }, [selKey]);
    var cur = focus || (range ? val.start : val) || today;
    if (!visible(cur)) cur = range && val.start && visible(val.start) ? val.start : (visible(today) ? today : page);
    React.useEffect(function () {
      if (!kbd.current || !gridRef.current) return; kbd.current = false;
      var b = gridRef.current.querySelector('[data-k="' + dpNum(cur, g) + '"]'); if (b) b.focus();
    });
    function pick(d) {
      if (off(d)) return;
      setFocus(d);
      if (!range) { setVal(d); if (props.onSelect) props.onSelect(d); return; }
      var s = val.start, e = val.end, n;
      if (s && !e) n = dpNum(d, g) < dpNum(s, g) ? { start: d, end: s } : { start: s, end: d };
      else n = { start: d, end: null };
      setVal(n); setHover(null);
      if (n.end && props.onSelect) props.onSelect(n);
    }
    function onKey(e) {
      var step = g === "day" ? { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 } : { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -3, ArrowDown: 3 };
      var n = null;
      if (step[e.key] != null) n = dpAdd(cur, g, step[e.key]);
      else if (e.key === "PageUp" || e.key === "PageDown") { var dir = e.key === "PageUp" ? -1 : 1; n = g === "day" ? (e.shiftKey ? new Date(cur.getFullYear() + dir, cur.getMonth(), cur.getDate()) : new Date(cur.getFullYear(), cur.getMonth() + dir, Math.min(cur.getDate(), new Date(cur.getFullYear(), cur.getMonth() + dir + 1, 0).getDate()))) : dpAdd(cur, g, g === "month" ? 12 * dir : 12 * dir); }
      else if (e.key === "Home") n = g === "day" ? dpAdd(cur, g, -((cur.getDay() - wkStart + 7) % 7)) : dpAdd(cur, g, -((g === "month" ? cur.getMonth() : cur.getFullYear() - pageOf(cur).getFullYear()) % 3));
      else if (e.key === "End") n = g === "day" ? dpAdd(cur, g, 6 - (cur.getDay() - wkStart + 7) % 7) : dpAdd(cur, g, 2 - (g === "month" ? cur.getMonth() : cur.getFullYear() - pageOf(cur).getFullYear()) % 3);
      else if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(cur); return; }
      else return;
      e.preventDefault(); kbd.current = true; setFocus(n); show(n);
      if (range && val.start && !val.end) setHover(n);
    }
    var s = range ? val.start : val, eEnd = range ? (val.end || (val.start && hover ? hover : null)) : val;
    var lo = s, hi = eEnd;
    if (range && s && eEnd && dpNum(eEnd, g) < dpNum(s, g)) { lo = eEnd; hi = s; }
    var loN = dpNum(lo, g), hiN = dpNum(hi, g);
    var full = dpNames(locale, "long"), wdn = dpNames(locale, "wd");
    function cellOf(d, col, cols, outside) {
      var n = dpNum(d, g);
      if (outside) return h("div", { key: n + "o", className: "jsk-cal__cell", role: "gridcell" }, h("span", { className: "jsk-cal__day is-outside", "aria-hidden": "true" }, d.getDate()));
      var isSel = range ? (n === dpNum(val.start, g) || n === dpNum(val.end, g)) : n === dpNum(val, g);
      var inR = range && lo && hi && loN !== hiN && n >= loN && n <= hiN;
      var band = null;
      if (inR) {
        var L = n === loN ? "50%" : 0, Rt = n === hiN ? "50%" : 0, st = { left: L, right: Rt };
        if (col === 0 && n !== loN) st.borderTopLeftRadius = st.borderBottomLeftRadius = 9999;
        if (col === cols - 1 && n !== hiN) st.borderTopRightRadius = st.borderBottomRightRadius = 9999;
        band = h("span", { className: "jsk-cal__band", style: st, "aria-hidden": "true" });
      }
      var isToday = n === dpNum(today, g), dis = off(d), isF = n === dpNum(cur, g);
      var label = g === "day" ? new Intl.DateTimeFormat(locale, { weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(d) : dpFmt(d, g, locale, true);
      var txt = g === "day" ? d.getDate() : g === "month" ? dpNames(locale, "short")[d.getMonth()] : d.getFullYear();
      return h("div", { key: n, className: "jsk-cal__cell", role: "gridcell", "aria-selected": isSel || !!inR },
        band,
        h("button", { type: "button", "data-k": n, tabIndex: isF ? 0 : -1, disabled: dis, "aria-label": label + (isToday ? ", today" : ""), "aria-current": isToday ? "date" : undefined,
          className: "jsk-cal__day" + (isSel ? " is-selected" : "") + (inR && !isSel ? " is-range" : "") + (isToday ? " is-today" : ""),
          onClick: function () { pick(d); }, onFocus: function () { if (!isF) setFocus(d); },
          onMouseEnter: range && val.start && !val.end ? function () { setHover(d); } : undefined },
          txt, marked.indexOf(n) >= 0 ? h("span", { className: "jsk-cal__dot", "aria-hidden": "true" }) : null));
    }
    function pane(p, i) {
      var title = g === "day" ? full[p.getMonth()] + " " + p.getFullYear() : g === "month" ? "" + p.getFullYear() : p.getFullYear() + " – " + (p.getFullYear() + 11);
      var navPrev = i === 0, navNext = i === panes - 1;
      var unit = g === "day" ? "month" : g === "month" ? "year" : "12 years";
      var head = h("div", { className: "jsk-cal__head" },
        h("button", { type: "button", className: "jsk-cal__nav" + (navPrev ? "" : " is-hidden"), tabIndex: navPrev ? 0 : -1, "aria-hidden": navPrev ? undefined : "true", "aria-label": "Previous " + unit, onClick: function () { setPage(dpPageAdd(page, g, -1)); } }, cpIcon("M12.5 15l-5-5 5-5")),
        h("div", { className: "jsk-cal__title", id: uid + "-t" + i, "aria-live": i === 0 ? "polite" : undefined }, title),
        h("button", { type: "button", className: "jsk-cal__nav" + (navNext ? "" : " is-hidden"), tabIndex: navNext ? 0 : -1, "aria-hidden": navNext ? undefined : "true", "aria-label": "Next " + unit, onClick: function () { setPage(dpPageAdd(page, g, 1)); } }, cpIcon("M7.5 15l5-5-5-5")));
      var rows = [];
      if (g === "day") {
        var first = new Date(p.getFullYear(), p.getMonth(), 1), lead = (first.getDay() - wkStart + 7) % 7;
        rows.push(h("div", { key: "wd", role: "row", className: "jsk-cal__row" }, [0, 1, 2, 3, 4, 5, 6].map(function (k) { var w = wdn[(k + wkStart) % 7]; return h("div", { key: k, role: "columnheader", className: "jsk-cal__wd", "aria-label": w }, w.slice(0, 2)); })));
        for (var r = 0; r < 6; r++) {
          var cells = [];
          for (var c = 0; c < 7; c++) { var d = new Date(p.getFullYear(), p.getMonth(), 1 - lead + r * 7 + c); cells.push(cellOf(d, c, 7, d.getMonth() !== p.getMonth())); }
          rows.push(h("div", { key: r, role: "row", className: "jsk-cal__row" }, cells));
        }
      } else {
        for (var r2 = 0; r2 < 4; r2++) {
          var cs = [];
          for (var c2 = 0; c2 < 3; c2++) { var k = r2 * 3 + c2; cs.push(cellOf(g === "month" ? new Date(p.getFullYear(), k, 1) : new Date(p.getFullYear() + k, 0, 1), c2, 3, false)); }
          rows.push(h("div", { key: r2, role: "row", className: "jsk-cal__row" }, cs));
        }
      }
      return h("div", { key: i, className: "jsk-cal__pane" },
        head,
        i === 0 ? props.paneTop : null,
        h("div", { role: "grid", className: "jsk-cal__grid jsk-cal__grid--" + g, "aria-labelledby": uid + "-t" + i, "aria-multiselectable": range || undefined, onKeyDown: onKey, onMouseLeave: function () { setHover(null); } }, rows));
    }
    var paneEls = []; for (var i = 0; i < panes; i++) paneEls.push(pane(dpPageAdd(page, g, i), i));
    var rest = omit(props, ["granularity", "mode", "locale", "weekStartsOn", "today", "layout", "value", "defaultValue", "onChange", "onSelect", "panes", "min", "max", "isDateDisabled", "markedDates", "paneTop", "readOnly", "className", "bare"]);
    return h("div", Object.assign({ ref: ref, className: "jsk-cal-panes" + (props.className ? " " + props.className : "") }, rest),
      h("div", { ref: gridRef, className: "jsk-cal__panes" }, paneEls));
  });

  var DatePickerPanel = React.forwardRef(function DatePickerPanel(props, ref) {
    var g = props.granularity === "month" || props.granularity === "year" ? props.granularity : "day";
    var range = props.mode === "range";
    var locale = props.locale || "en-US";
    var mobile = dpUseMobile(props.layout || "auto");
    var today = dpSnap(dpNorm(props.today) || dpNorm(new Date()), g);
    var ctrl = props.value !== undefined;
    var _v = React.useState(function () { return dpVal(props.defaultValue, range, g); });
    var val = ctrl ? dpVal(props.value, range, g) : _v[0];
    function setVal(n) { if (!ctrl) _v[1](n); if (props.onChange) props.onChange(n); }
    var presets = props.presets === false ? [] : (props.presets || dpPresets(g, today));
    var showPresets = range && presets.length > 0;
    var vn = range ? [dpNum(val.start, g), dpNum(val.end, g)] : null;
    function presetOn(p) { var pv = dpVal(p.value, true, g); return vn && dpNum(pv.start, g) === vn[0] && dpNum(pv.end, g) === vn[1] && (vn[1] != null); }
    function applyPreset(p) { setVal(dpVal(p.value, true, g)); }
    var unit = g === "day" ? "date" : g;
    var actions = props.onApply || props.onCancel;
    function field(which, opts) {
      var cur = range ? val[which] : val;
      return h(DpField, Object.assign({ key: which || "v", value: dpFmt(cur, g, locale), label: (range ? (which === "start" ? "Start " : "End ") : "") + unit,
        onCommit: function (t) {
          if (!String(t).trim()) { if (range) { var n0 = Object.assign({}, val); n0[which] = null; setVal(n0); } else setVal(null); return true; }
          var d = dpParse(t, g, locale); if (!d) return false;
          if (!range) { setVal(d); return true; }
          var n = Object.assign({}, val); n[which] = d;
          if (n.start && n.end && dpNum(n.end, g) < dpNum(n.start, g)) { var x = n.start; n.start = n.end; n.end = x; }
          setVal(n); return true;
        } }, opts));
    }
    var phTop = "Select " + unit, phFmt = g === "day" ? "D MMM YYYY" : g === "month" ? "MMM YYYY" : "YYYY";
    var top = null;
    if (!range) top = h("div", { className: "jsk-cal__top" }, field(null, { placeholder: phTop, size: mobile ? "sm" : "md" }),
      h(Button, { hierarchy: "secondary", size: mobile ? "sm" : "md", onClick: function () { setVal(today); }, disabled: props.isDateDisabled && g === "day" ? props.isDateDisabled(today) : false }, g === "day" ? "Today" : g === "month" ? "This month" : "This year"));
    else if (mobile) {
      var quick = presets.filter(function (p) { return (props.quickPresets || DP_QUICK[g]).indexOf(p.label) >= 0; });
      top = h(React.Fragment, null,
        h("div", { className: "jsk-cal__top" }, field("start", { placeholder: phTop }), h("span", { className: "jsk-cal__dash", "aria-hidden": "true" }, "–"), field("end", { placeholder: phTop })),
        quick.length ? h("div", { className: "jsk-cal__links" }, quick.map(function (p) { return h(Button, { key: p.label, hierarchy: "link-color", size: "sm", onClick: function () { applyPreset(p); }, "aria-pressed": presetOn(p) }, p.label); })) : null);
    }
    var cal = h(Calendar, Object.assign(omit(props, ["presets", "quickPresets", "onApply", "onCancel", "applyLabel", "cancelLabel", "className", "style", "value", "defaultValue", "onChange", "bare"]),
      { layout: mobile ? "mobile" : "desktop", value: range ? val : val, onChange: setVal, paneTop: top }));
    var foot = null;
    if (actions) {
      var btns = h("div", { className: "jsk-cal__btns" },
        h(Button, { hierarchy: "secondary", size: "sm", onClick: props.onCancel }, props.cancelLabel || "Cancel"),
        h(Button, { hierarchy: "primary", size: "sm", onClick: function () { if (props.onApply) props.onApply(val); }, disabled: range ? !!(val.start && !val.end) : false }, props.applyLabel || "Apply"));
      foot = range && !mobile ? h("div", { className: "jsk-cal__foot is-wide" },
        h("div", { className: "jsk-cal__inputs" }, field("start", { placeholder: phFmt, icon: true }), h("span", { className: "jsk-cal__dash", "aria-hidden": "true" }, "–"), field("end", { placeholder: phFmt, icon: true })), btns)
        : h("div", { className: "jsk-cal__foot is-full" }, btns);
    }
    return h("div", { ref: ref, className: "jsk-cal" + (mobile ? " is-mobile" : " is-desktop") + (props.bare ? " is-bare" : "") + (props.className ? " " + props.className : ""), style: props.style },
      showPresets && !mobile ? h("div", { className: "jsk-cal__presets", role: "group", "aria-label": "Preset ranges" }, presets.map(function (p) {
        var on = presetOn(p);
        return h("button", { key: p.label, type: "button", className: "jsk-cal__preset" + (on ? " is-selected" : ""), "aria-pressed": on, onClick: function () { applyPreset(p); } }, p.label);
      })) : null,
      h("div", { className: "jsk-cal__main" }, cal, foot));
  });

  var DatePicker = React.forwardRef(function DatePicker(props, ref) {
    var g = props.granularity === "month" || props.granularity === "year" ? props.granularity : "day";
    var range = props.mode === "range";
    var locale = props.locale || "en-US";
    var ctrl = props.value !== undefined;
    var _v = React.useState(function () { return dpVal(props.defaultValue, range, g); });
    var val = ctrl ? dpVal(props.value, range, g) : _v[0];
    var _o = React.useState(!!props.defaultOpen), openInner = _o[0], setOpenInner = _o[1];
    var open = props.open != null ? props.open : openInner;
    var _d = React.useState(val), draft = _d[0], setDraft = _d[1];
    var wrap = React.useRef(null), pop = React.useRef(null), trig = React.useRef(null);
    var uid = (React.useId ? React.useId() : "dp").replace(/[^a-zA-Z0-9_-]/g, "");
    var _p = React.useState({ v: "bottom", h: props.align || "end" }), place = _p[0], setPlace = _p[1];
    var withActions = props.actions !== false;
    function commit(n) { if (!ctrl) _v[1](n); if (props.onChange) props.onChange(n); }
    function setOpen(v, refocus) {
      if (props.disabled && v) return;
      if (v) setDraft(val);
      if (props.open == null) setOpenInner(v);
      if (props.onOpenChange) props.onOpenChange(v);
      if (!v && refocus !== false) setTimeout(function () { if (trig.current) trig.current.focus(); }, 0);
    }
    React.useEffect(function () {
      if (!open) return;
      function onDoc(e) { if (wrap.current && !wrap.current.contains(e.target)) setOpen(false, false); }
      function onKey(e) { if (e.key === "Escape") { e.stopPropagation(); setOpen(false); } }
      document.addEventListener("mousedown", onDoc); document.addEventListener("keydown", onKey);
      var f = pop.current && (pop.current.querySelector(".jsk-cal__day[tabindex='0']") || pop.current.querySelector("button"));
      if (f && f.focus) f.focus({ preventScroll: true });
      return function () { document.removeEventListener("mousedown", onDoc); document.removeEventListener("keydown", onKey); };
    }, [open]);
    React.useLayoutEffect(function () {
      if (!open || !pop.current || !wrap.current) return;
      var w = wrap.current.getBoundingClientRect(), pw = pop.current.offsetWidth, ph = pop.current.offsetHeight;
      var hA = props.align || "end";
      if (hA === "end" && w.right - pw < 8) hA = "start"; else if (hA === "start" && w.left + pw > window.innerWidth - 8 && w.right - pw >= 8) hA = "end";
      var vA = window.innerHeight - w.bottom < ph + 16 && w.top > ph + 16 ? "top" : "bottom";
      if (vA !== place.v || hA !== place.h) setPlace({ v: vA, h: hA });
    }, [open]);
    var has = range ? (val.start || val.end) : val;
    var text;
    if (props.formatValue) text = has ? props.formatValue(val) : null;
    else if (range) text = !has ? null : !val.start && val.end ? "All time" : dpFmt(val.start, g, locale) + (val.end && dpNum(val.end, g) !== dpNum(val.start, g) ? " – " + dpFmt(val.end, g, locale) : "");
    else text = has ? dpFmt(val, g, locale) : null;
    var ph = props.placeholder || ("Select " + (g === "day" ? "date" : g) + (range ? "s" : ""));
    var panelProps = omit(props, ["value", "defaultValue", "onChange", "open", "defaultOpen", "onOpenChange", "align", "placeholder", "formatValue", "disabled", "actions", "className", "style", "label", "size", "trigger"]);
    return h("div", { ref: function (el) { wrap.current = el; if (typeof ref === "function") ref(el); else if (ref) ref.current = el; }, className: "jsk-dp" + (open ? " is-open" : "") + (props.className ? " " + props.className : ""), style: props.style },
      h(Button, { ref: trig, hierarchy: "secondary", size: props.size || "sm", iconLeading: cpIcon(DP_CAL), disabled: props.disabled, className: "jsk-dp__trigger" + (text ? "" : " is-empty"),
        "aria-haspopup": "dialog", "aria-expanded": open, "aria-controls": open ? uid + "-pop" : undefined, "aria-label": props.label ? props.label + ": " + (text || ph) : undefined,
        onClick: function () { setOpen(!open); } }, text || ph),
      open ? h("div", { ref: pop, id: uid + "-pop", role: "dialog", "aria-label": props.label || ph, className: "jsk-dp__pop is-" + place.v + " is-" + place.h },
        h(DatePickerPanel, Object.assign({}, panelProps, {
          value: withActions ? draft : val,
          onChange: withActions ? setDraft : function (n) { commit(n); if (!range || n.end) setOpen(false); },
          onApply: withActions ? function (n) { commit(n); setOpen(false); } : undefined,
          onCancel: withActions ? function () { setOpen(false); } : undefined }))) : null);
  });

  /* ---------- EmptyState ---------- */
  var ES_SIZES = { sm: { btn: "sm", fic: "lg", ill: 120, av: "lg" }, md: { btn: "md", fic: "lg", ill: 120, av: "lg" }, lg: { btn: "lg", fic: "xl", ill: 160, av: "xl" } };
  var ES_CHECK = [[6,5],[8,5],[5,6],[9,6],[7,7],[4,8],[10,8],[6,9],[8,9],[7,4],[3,6],[11,7],[5,10],[9,10]];
  function esPattern(kind) {
    if (kind === "circles") {
      var rings = [];
      for (var d = 96; d <= 480; d += 64) rings.push(h("circle", { key: d, cx: 240, cy: 240, r: d / 2 - 0.5 }));
      return h("svg", { className: "jsk-es__pattern jsk-es__pattern--circles", viewBox: "0 0 480 480", width: 480, height: 480, fill: "none", "aria-hidden": "true" }, rings);
    }
    if (kind === "grid") return h("span", { className: "jsk-es__pattern jsk-es__pattern--grid", "aria-hidden": "true" });
    if (kind === "grid-check") {
      var c = 640 / 15, cells = ES_CHECK.map(function (p, i) {
        return h("rect", { key: i, x: p[0] * c + 0.5, y: p[1] * c + 0.5, width: c - 1, height: c - 1, className: "jsk-es__cell" });
      });
      var lines = [];
      for (var i = 0; i <= 15; i++) {
        lines.push(h("path", { key: "v" + i, d: "M" + (i * c) + " 0V640" }), h("path", { key: "h" + i, d: "M0 " + (i * c) + "H640" }));
      }
      return h("svg", { className: "jsk-es__pattern jsk-es__pattern--grid-check", viewBox: "0 0 640 640", width: 640, height: 640, fill: "none", "aria-hidden": "true" }, cells, h("g", { className: "jsk-es__lines" }, lines));
    }
    return null;
  }
  function esIllustration(kind, px) {
    var paper = [h("rect", { key: "p", x: 34, y: 22, width: 52, height: 66, rx: 6, className: "jsk-es__ill-paper" }),
      h("rect", { key: "l1", x: 42, y: 34, width: 28, height: 5, rx: 2.5, className: "jsk-es__ill-line" }),
      h("rect", { key: "l2", x: 42, y: 45, width: 36, height: 5, rx: 2.5, className: "jsk-es__ill-line" }),
      h("rect", { key: "l3", x: 42, y: 56, width: 22, height: 5, rx: 2.5, className: "jsk-es__ill-line" })];
    var body = kind === "folder"
      ? [h("path", { key: "b", d: "M22 38a6 6 0 0 1 6-6h20l7 7h37a6 6 0 0 1 6 6v41a6 6 0 0 1-6 6H28a6 6 0 0 1-6-6V38Z", className: "jsk-es__ill-back" }),
         h("rect", { key: "p", x: 32, y: 30, width: 56, height: 44, rx: 4, className: "jsk-es__ill-paper" }),
         h("rect", { key: "l1", x: 40, y: 38, width: 26, height: 4, rx: 2, className: "jsk-es__ill-line" }),
         h("rect", { key: "l2", x: 40, y: 47, width: 36, height: 4, rx: 2, className: "jsk-es__ill-line" }),
         h("path", { key: "f", d: "M18 54a6 6 0 0 1 6-6h72a6 6 0 0 1 6 6.6l-3 32A6 6 0 0 1 93 92H27a6 6 0 0 1-6-5.4l-3-32Z", className: "jsk-es__ill-front" })]
      : paper.concat([
         h("circle", { key: "g", cx: 74, cy: 72, r: 17, className: "jsk-es__ill-lens" }),
         h("path", { key: "hd", d: "M86.5 84.5 98 96", className: "jsk-es__ill-handle" })]);
    return h("svg", { className: "jsk-es__ill", viewBox: "0 0 120 120", width: px, height: px, fill: "none", "aria-hidden": "true" },
      h("circle", { cx: 60, cy: 60, r: 52, className: "jsk-es__ill-bg" }),
      h("circle", { cx: 17, cy: 24, r: 4, className: "jsk-es__ill-dot" }),
      h("circle", { cx: 106, cy: 34, r: 3, className: "jsk-es__ill-dot" }),
      h("circle", { cx: 104, cy: 102, r: 5, className: "jsk-es__ill-dot" }),
      body);
  }
  var ES_CLOUD = [{ x: -84, y: -14, s: "md" }, { x: 84, y: -14, s: "md" }, { x: -52, y: 30, s: "sm" }, { x: 54, y: 32, s: "sm" }, { x: -40, y: -40, s: "xs" }, { x: 44, y: -42, s: "xs" }];
  /**
   * EmptyState — media + title + description + actions, centred, max 512px.
   * size sm|md|lg · media "icon" (FeaturedIcon modern) | "file" | "illustration" | "folder" | "avatars" | "avatars-row" | "none" | node ·
   * pattern circles|grid|grid-check|none (decorative, faded from the centre) · actions: Button props[] or nodes.
   */
  var EmptyState = React.forwardRef(function EmptyState(props, ref) {
    var size = ES_SIZES[props.size] ? props.size : "md", S = ES_SIZES[size];
    var media = props.media === undefined ? "icon" : props.media;
    var pattern = props.pattern === undefined ? "circles" : props.pattern;
    var Title = props.titleAs || "h3";
    var searchIco = h("svg", { viewBox: "0 0 24 24", width: 24, height: 24, fill: "none", "aria-hidden": "true" },
      h("path", { d: "m21 21-4.35-4.35M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }));
    var mediaNode = null;
    if (React.isValidElement(media)) mediaNode = media;
    else if (media === "icon") mediaNode = h(FeaturedIcon, { type: "modern", color: "gray", size: S.fic, icon: props.icon || searchIco });
    else if (media === "file") mediaNode = h("span", { className: "jsk-es__file" }, props.icon || h(FileIcon, { type: props.fileType || "file", variant: "gray" }));
    else if (media === "illustration" || media === "folder") mediaNode = esIllustration(media === "folder" ? "folder" : "search", S.ill);
    else if (media === "avatars" || media === "avatars-row") {
      var people = props.avatars || [];
      if (media === "avatars-row") mediaNode = h(AvatarGroup, { size: "md", max: props.maxAvatars || 5, avatars: people });
      else mediaNode = h("span", { className: "jsk-es__cloud" },
        people.slice(1, 7).map(function (a, i) {
          var p = ES_CLOUD[i];
          return h("span", { key: i, className: "jsk-es__cloud-item", style: { transform: "translate(calc(-50% + " + p.x + "px), calc(-50% + " + p.y + "px))" } },
            h(Avatar, Object.assign({ size: p.s, framed: true }, a)));
        }),
        people[0] ? h("span", { className: "jsk-es__cloud-item jsk-es__cloud-main" }, h(Avatar, Object.assign({ size: S.av, framed: true }, people[0]))) : null);
    }
    var acts = props.actions;
    if (Array.isArray(acts)) acts = acts.map(function (a, i) {
      if (React.isValidElement(a)) return React.cloneElement(a, { key: a.key || i });
      var label = a.label;
      return h(Button, Object.assign({ key: i, size: S.btn, hierarchy: i === acts.length - 1 ? "primary" : "secondary" }, omit(a, ["label"])), label);
    });
    var hasActs = acts && (!Array.isArray(acts) || acts.length) || props.children;
    return h("div", Object.assign(omit(props, ["size", "media", "pattern", "icon", "fileType", "avatars", "maxAvatars", "title", "description", "actions", "titleAs", "className", "children"]), {
        ref: ref, className: "jsk-es jsk-es--" + size + (media === "illustration" || media === "folder" ? " jsk-es--ill" : "") + (props.className ? " " + props.className : "") }),
      h("div", { className: "jsk-es__header" },
        mediaNode || pattern !== "none" ? h("div", { className: "jsk-es__media" + (media === "avatars" ? " jsk-es__media--cloud" : "") },
          pattern && pattern !== "none" ? esPattern(pattern) : null,
          mediaNode ? h("div", { className: "jsk-es__media-inner" }, mediaNode) : null) : null,
        h("div", { className: "jsk-es__text" },
          props.title ? h(Title, { className: "jsk-es__title" }, props.title) : null,
          props.description ? h("p", { className: "jsk-es__desc" }, props.description) : null)),
      hasActs ? h("div", { className: "jsk-es__actions" }, acts, props.children) : null);
  });
  EmptyState.displayName = "EmptyState";

  /* ---------- FileUpload ---------- */
  var FU_CLOUD = "M6.67 13.33 10 10m0 0 3.33 3.33M10 10v7.5m6.67-3.55a4.17 4.17 0 0 0-2.5-7.28h-1.05A6.67 6.67 0 1 0 3.33 12.71";
  var FU_CLOUD16 = "M5.33 10.67 8 8m0 0 2.67 2.67M8 8v6m5.33-2.84a3.33 3.33 0 0 0-2-5.83h-.84A5.33 5.33 0 1 0 2.67 10.17";
  var FU_CHECK16 = "M5 8l2 2 4-4m3.67 2A6.67 6.67 0 1 1 1.33 8a6.67 6.67 0 0 1 13.34 0Z";
  var FU_ALERT16 = "M8 5.33V8m0 2.67h.01M14.67 8A6.67 6.67 0 1 1 1.33 8a6.67 6.67 0 0 1 13.34 0Z";
  var FU_TRASH16 = "M10.67 4v-.53c0-.75 0-1.12-.15-1.41a1.33 1.33 0 0 0-.58-.58c-.29-.15-.66-.15-1.41-.15H7.47c-.75 0-1.12 0-1.41.15-.25.13-.46.33-.58.58-.15.29-.15.66-.15 1.41V4M2 4h12m-1.33 0v7.47c0 1.12 0 1.68-.22 2.1a2 2 0 0 1-.87.88c-.43.22-.99.22-2.11.22H6.53c-1.12 0-1.68 0-2.11-.22a2 2 0 0 1-.87-.88c-.22-.42-.22-.98-.22-2.1V4";
  function fuSize(v) {
    if (v == null || v === "") return "";
    if (typeof v !== "number") return String(v);
    var u = ["B", "KB", "MB", "GB"], i = 0;
    while (v >= 1000 && i < u.length - 1) { v /= 1000; i++; }
    return (i === 0 || v >= 100 ? Math.round(v) : Math.round(v * 10) / 10) + " " + u[i];
  }
  function fuAccepts(file, accept) {
    if (!accept) return true;
    var name = (file.name || "").toLowerCase(), type = (file.type || "").toLowerCase();
    return String(accept).split(",").some(function (a) {
      a = a.trim().toLowerCase();
      if (!a) return false;
      if (a.charAt(0) === ".") return name.slice(-a.length) === a;
      if (a.slice(-2) === "/*") return type.indexOf(a.slice(0, -1)) === 0;
      return type === a;
    });
  }

  /** FileUploadDropzone — click-to-upload / drag-and-drop area. Calls onFiles(accepted) and onReject(rejected[]). */
  var FileUploadDropzone = React.forwardRef(function FileUploadDropzone(props, ref) {
    var inputRef = React.useRef(null);
    var st = React.useState(false), drag = st[0], setDrag = st[1];
    var depth = React.useRef(0);
    var hintId = React.useId ? React.useId() : "jsk-fu-hint";
    var disabled = !!props.disabled;
    var hint = props.hint === undefined ? "SVG, PNG, JPG or GIF (max. 10MB)" : props.hint;
    function handle(list) {
      var files = Array.prototype.slice.call(list || []);
      if (!props.multiple && files.length > 1) files = files.slice(0, 1);
      var ok = [], bad = [];
      files.forEach(function (f) {
        if (!fuAccepts(f, props.accept)) bad.push({ file: f, reason: "type" });
        else if (props.maxSize && f.size > props.maxSize) bad.push({ file: f, reason: "size" });
        else ok.push(f);
      });
      if (ok.length && props.onFiles) props.onFiles(ok);
      if (bad.length && props.onReject) props.onReject(bad);
    }
    function open() { if (!disabled && inputRef.current) inputRef.current.click(); }
    var dnd = disabled ? {} : {
      onDragEnter: function (e) { e.preventDefault(); depth.current++; setDrag(true); },
      onDragOver: function (e) { e.preventDefault(); if (e.dataTransfer) e.dataTransfer.dropEffect = "copy"; },
      onDragLeave: function () { depth.current = Math.max(0, depth.current - 1); if (!depth.current) setDrag(false); },
      onDrop: function (e) { e.preventDefault(); depth.current = 0; setDrag(false); handle(e.dataTransfer && e.dataTransfer.files); }
    };
    return h("div", Object.assign(omit(props, ["hint", "accept", "multiple", "maxSize", "disabled", "onFiles", "onReject", "icon", "label", "dragLabel", "className"]), dnd, {
        ref: ref, "data-state": disabled ? "disabled" : drag ? "drag" : "default",
        className: "jsk-fu-drop" + (drag ? " is-drag" : "") + (disabled ? " is-disabled" : "") + (props.className ? " " + props.className : ""),
        onClick: function (e) { if (props.onClick) props.onClick(e); if (!e.defaultPrevented && e.target === e.currentTarget) open(); } }),
      h("input", { ref: inputRef, type: "file", hidden: true, tabIndex: -1, accept: props.accept, multiple: !!props.multiple, disabled: disabled,
        onChange: function (e) { handle(e.target.files); e.target.value = ""; } }),
      h("div", { className: "jsk-fu-drop__body", onClick: open },
        h(FeaturedIcon, { type: "modern", color: "gray", size: "md", icon: props.icon || cpIcon(FU_CLOUD) }),
        h("div", { className: "jsk-fu-drop__text" },
          h("div", { className: "jsk-fu-drop__line" },
            drag ? h("span", { className: "jsk-fu-drop__drag" }, props.dragLabel || "Drop files to upload") : null,
            h(Button, { hierarchy: "link-color", size: "md", disabled: disabled, "aria-describedby": hint ? hintId : undefined, style: drag ? { display: "none" } : undefined,
              onClick: function (e) { e.stopPropagation(); open(); } }, props.label || "Click to upload"),
            drag ? null : h("span", null, "or drag and drop")),
          hint ? h("div", { id: hintId, className: "jsk-fu-drop__hint" }, hint) : null)));
  });
  FileUploadDropzone.displayName = "FileUploadDropzone";

  /** FileUploadItem — one file row. variant "bar" (progress bar) | "fill" (row fills); state uploading | complete | error. */
  var FileUploadItem = React.forwardRef(function FileUploadItem(props, ref) {
    var variant = props.variant === "fill" ? "fill" : "bar";
    var progress = Math.max(0, Math.min(100, Number(props.progress) || 0));
    var state = props.state || (progress >= 100 ? "complete" : "uploading");
    if (state === "complete") progress = 100;
    var name = props.name || "";
    var ext = props.type || (name.indexOf(".") > 0 ? name.split(".").pop() : "file");
    var total = fuSize(props.size);
    var done = typeof props.size === "number" ? fuSize(props.size * progress / 100) : null;
    var err = state === "error";
    var statusIco = err ? cpIcon(FU_ALERT16, 16, 1.5) : state === "complete" ? cpIcon(FU_CHECK16, 16, 1.5) : cpIcon(FU_CLOUD16, 16, 1.5);
    var statusText = variant === "fill" && !err ? Math.round(progress) + "%"
      : err ? (props.errorText || "Upload failed") : state === "complete" ? "Complete" : "Uploading...";
    var sizeText = variant === "bar" && !err && done && state !== "complete" ? done + " of " + total
      : variant === "bar" && state === "complete" && total ? total + " of " + total : total;
    return h("div", Object.assign(omit(props, ["variant", "progress", "state", "name", "type", "size", "errorText", "onRemove", "onRetry", "removeLabel", "retryLabel", "icon", "className", "style"]), {
        ref: ref, "data-state": state,
        className: "jsk-fu-item jsk-fu-item--" + variant + " is-" + state + (props.className ? " " + props.className : ""),
        style: Object.assign({ "--fu-p": progress + "%" }, props.style) }),
      variant === "fill" && !err ? h("span", { className: "jsk-fu-item__fill", "aria-hidden": "true" }) : null,
      h("div", { className: "jsk-fu-item__main" },
        props.icon || h(FileIcon, { type: ext, variant: variant === "fill" ? "solid" : "default" }),
        h("div", { className: "jsk-fu-item__body" },
          h("div", { className: "jsk-fu-item__info" },
            h("div", { className: "jsk-fu-item__name", title: name }, name),
            h("div", { className: "jsk-fu-item__meta" },
              sizeText ? h("span", null, sizeText) : null,
              h("span", { className: "jsk-fu-item__status", role: err ? "alert" : undefined }, statusIco, h("span", null, statusText)))),
          err && props.onRetry ? h(Button, { hierarchy: "link-color", destructive: true, size: "sm", onClick: props.onRetry, className: "jsk-fu-item__retry" }, props.retryLabel || "Try again") : null,
          variant === "bar" && !err ? h(ProgressBar, { value: progress, label: "right", "aria-label": name + " upload progress" }) : null,
          variant === "fill" && !err && state !== "complete" ? h("span", { className: "jsk-fu-sr", role: "progressbar", "aria-label": name + " upload progress", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": Math.round(progress) }) : null)),
      props.onRemove ? h(Button, { hierarchy: "tertiary", size: "xs", iconOnly: true, iconLeading: cpIcon(FU_TRASH16, 16, 1.5),
        "aria-label": (props.removeLabel || "Remove") + " " + name, onClick: props.onRemove, className: "jsk-fu-item__remove" }) : null);
  });
  FileUploadItem.displayName = "FileUploadItem";

  /** FileUpload — dropzone + list of FileUploadItem. files: [{ id, name, size, progress, state, type, errorText }]. */
  var FileUpload = React.forwardRef(function FileUpload(props, ref) {
    var files = props.files || [];
    return h("div", Object.assign(omit(props, ["files", "variant", "onFiles", "onReject", "onRemove", "onRetry", "hint", "accept", "multiple", "maxSize", "disabled", "className"]), {
        ref: ref, className: "jsk-fu" + (props.className ? " " + props.className : "") }),
      h(FileUploadDropzone, { hint: props.hint, accept: props.accept, multiple: props.multiple !== false, maxSize: props.maxSize, disabled: props.disabled,
        onFiles: props.onFiles, onReject: props.onReject }),
      files.length ? h("ul", { className: "jsk-fu__list", "aria-label": "Uploaded files" }, files.map(function (f, i) {
        var id = f.id != null ? f.id : i;
        return h("li", { key: id }, h(FileUploadItem, Object.assign({ variant: props.variant }, omit(f, ["id"]), {
          onRemove: props.onRemove ? function () { props.onRemove(id, f); } : undefined,
          onRetry: props.onRetry ? function () { props.onRetry(id, f); } : undefined })));
      })) : null);
  });
  FileUpload.displayName = "FileUpload";

  /* ---------- SegmentedControl ---------- */
  /** SegmentedControl — "button minimal" tabs on a tinted track. Single choice, radio semantics, arrow keys move. */
  var SegmentedControl = React.forwardRef(function SegmentedControl(props, ref) {
    var items = props.items || [];
    var controlled = props.value !== undefined;
    var st = React.useState(props.defaultValue !== undefined ? props.defaultValue : items[0] && items[0].value);
    var value = controlled ? props.value : st[0];
    var btns = React.useRef([]);
    var size = props.size === "md" ? "md" : "sm";
    function pick(v, i) {
      if (!controlled) st[1](v);
      if (props.onChange) props.onChange(v);
      if (i != null && btns.current[i]) btns.current[i].focus();
    }
    function onKey(e, i) {
      var d = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 0;
      var j = e.key === "Home" ? 0 : e.key === "End" ? items.length - 1 : null;
      if (!d && j == null) return;
      e.preventDefault();
      if (j == null) { j = i; do { j = (j + d + items.length) % items.length; } while (items[j].disabled && j !== i); }
      pick(items[j].value, j);
    }
    var cur = items.findIndex(function (it) { return it.value === value; });
    return h("div", Object.assign(omit(props, ["items", "value", "defaultValue", "onChange", "size", "fullWidth", "compact", "className"]), {
        ref: ref, role: "radiogroup",
        className: "jsk-seg jsk-seg--" + size + (props.fullWidth ? " jsk-seg--full" : "") + (props.className ? " " + props.className : "") }),
      items.map(function (it, i) {
        var on = it.value === value;
        var label = props.compact && it.shortLabel ? it.shortLabel : it.label;
        return h("button", { key: it.value, type: "button", role: "radio", "aria-checked": on, disabled: it.disabled,
            "aria-label": props.compact && it.shortLabel && typeof it.label === "string" ? it.label : it["aria-label"],
            tabIndex: on || (cur < 0 && i === 0) ? 0 : -1, ref: function (el) { btns.current[i] = el; },
            className: "jsk-seg__item" + (on ? " is-current" : ""),
            onClick: function () { pick(it.value); }, onKeyDown: function (e) { onKey(e, i); } },
          it.icon ? h("span", { className: "jsk-seg__icon", "aria-hidden": "true" }, it.icon) : null,
          label != null ? h("span", { className: "jsk-seg__label" }, label) : null,
          it.badge != null ? h(Badge, { type: "modern", size: "sm", color: "gray" }, it.badge) : null);
      }));
  });
  SegmentedControl.displayName = "SegmentedControl";

  /* ---------- Filters ---------- */
  var FB_FILTER = "M5 10h10M2.5 5h15m-10 10h5";
  var FB_CHEV16 = "M4 6l4 4 4-4";
  /** FilterButton — secondary sm "Filters" button with filter-lines icon, optional count badge and chevron. */
  var FilterButton = React.forwardRef(function FilterButton(props, ref) {
    var label = props.children != null ? props.children : props.label != null ? props.label : "Filters";
    var count = props.count;
    var hasCount = count != null && count !== 0 && count !== "";
    if (props.iconOnly) {
      return h(Button, Object.assign(omit(props, ["label", "count", "chevron", "iconOnly", "fullWidth", "active", "children", "className"]), {
        ref: ref, hierarchy: "secondary", size: props.size || "sm", iconOnly: true,
        iconLeading: hasCount ? h("span", { className: "jsk-fbtn__ico" }, props.icon || cpIcon(FB_FILTER), h("span", { className: "jsk-fbtn__dot", "aria-hidden": "true" })) : props.icon || cpIcon(FB_FILTER),
        "aria-label": (typeof label === "string" ? label : "Filters") + (hasCount ? " (" + count + " applied)" : ""),
        className: "jsk-fbtn" + (props.active ? " is-active" : "") + (hasCount ? " has-count" : "") + (props.className ? " " + props.className : "") }));
    }
    return h(Button, Object.assign(omit(props, ["label", "count", "chevron", "iconOnly", "fullWidth", "active", "children", "className", "icon"]), {
        ref: ref, hierarchy: "secondary", size: props.size || "sm", iconLeading: props.icon || cpIcon(FB_FILTER),
        iconTrailing: props.chevron ? cpIcon(FB_CHEV16, 16, 1.5) : undefined,
        className: "jsk-fbtn" + (props.fullWidth ? " jsk-fbtn--full" : "") + (props.active ? " is-active" : "") + (props.className ? " " + props.className : "") }),
      h("span", { className: "jsk-fbtn__inner" }, label,
        hasCount ? h(Badge, { type: "modern", size: "sm", color: "gray", "aria-label": count + " applied" }, count) : null));
  });
  FilterButton.displayName = "FilterButton";

  /** FilterCondition — one "field · operator · value" row with a remove button. */
  var FilterCondition = React.forwardRef(function FilterCondition(props, ref) {
    var v = props.value || {};
    function set(k, val) {
      if (!props.onChange) return;
      var next = Object.assign({}, v); next[k] = val;
      if (k === "field" && v.field !== val) next.value = Array.isArray(v.value) ? [] : "";
      props.onChange(next);
    }
    var w = props.fluid ? { field: "auto", operator: "auto", value: "auto" } : props.widths || {};
    var valueNode = props.valueInput !== undefined ? props.valueInput
      : props.valueOptions ? h(Select, { size: "sm", options: props.valueOptions, placeholder: props.valuePlaceholder || "Select",
          checkboxes: !!props.multiple, value: v.value, onChange: function (x) { set("value", x); }, "aria-label": "Value", footer: props.valueFooter, summary: props.valueSummary })
      : h(Input, { size: "sm", placeholder: props.valuePlaceholder || "Enter a value", value: v.value == null ? "" : v.value, "aria-label": "Value",
          onChange: function (e) { set("value", e.target.value); } });
    var own = omit(props, ["value", "onChange", "fields", "operators", "valueOptions", "valueInput", "valuePlaceholder", "fieldPlaceholder", "multiple", "valueFooter", "valueSummary", "onRemove", "removeLabel", "widths", "fluid", "stacked", "className"]);
    var fieldSel = h(Select, { size: "sm", options: props.fields || [], placeholder: props.fieldPlaceholder || "Filter", value: v.field, "aria-label": "Field", onChange: function (x) { set("field", x); } });
    var opSel = h(Select, { size: "sm", options: props.operators || [], placeholder: "Condition", value: v.operator, "aria-label": "Condition", onChange: function (x) { set("operator", x); } });
    var rm = props.onRemove ? h(CloseButton, { size: "sm", "aria-label": props.removeLabel || "Remove filter", onClick: props.onRemove }) : null;
    if (props.stacked) return h("div", Object.assign(own, { ref: ref, role: "group", className: "jsk-fcond jsk-fcond--stacked" + (props.className ? " " + props.className : "") }),
      h("div", { className: "jsk-fcond__row" }, h("div", { className: "jsk-fcond__field" }, fieldSel), h("div", { className: "jsk-fcond__op" }, opSel)),
      h("div", { className: "jsk-fcond__row" }, h("div", { className: "jsk-fcond__value" }, valueNode), rm));
    return h("div", Object.assign(own, {
        ref: ref, role: "group", className: "jsk-fcond" + (props.fluid ? " jsk-fcond--fluid" : "") + (props.className ? " " + props.className : "") }),
      h("div", { className: "jsk-fcond__fields" },
        h("div", { className: "jsk-fcond__field", style: { width: w.field || 112 } }, fieldSel),
        h("div", { className: "jsk-fcond__op", style: { width: w.operator || 128 } }, opSel),
        h("div", { className: "jsk-fcond__value", style: { width: w.value || (props.valueOptions ? 208 : 168) } }, valueNode)),
      rm);
  });
  FilterCondition.displayName = "FilterCondition";

  /** FilterBar — wrapping toolbar: start (filters) · end (search, dates, buttons). Optional "Clear all". */
  var FilterBar = React.forwardRef(function FilterBar(props, ref) {
    var start = props.start != null ? props.start : props.children;
    var clear = props.onClearAll ? h(Button, { hierarchy: "secondary", size: "sm", onClick: props.onClearAll, className: "jsk-fbar__clear" }, props.clearLabel || "Clear all") : null;
    return h("div", Object.assign(omit(props, ["start", "end", "onClearAll", "clearLabel", "align", "stack", "children", "className"]), {
        ref: ref, role: props.role || "toolbar", "aria-label": props["aria-label"] || "Filters",
        className: "jsk-fbar" + (props.align === "end" ? " jsk-fbar--bottom" : "") + (props.stack ? " jsk-fbar--stack" : "") + (props.className ? " " + props.className : "") }),
      start != null ? h("div", { className: "jsk-fbar__start" }, start) : null,
      props.end != null || clear ? h("div", { className: "jsk-fbar__end" }, props.end, clear) : null);
  });
  FilterBar.displayName = "FilterBar";

  /* ---------- FilterMenu ---------- */
  var FM_PLUS16 = "M8 3.33v9.34M3.33 8h9.34";
  var fmUid = 0;
  function fmFilled(c) { return c && c.field != null && c.field !== ""; }
  /**
   * FilterMenu — FilterButton that opens a popover of FilterCondition rows (draft until "Apply filter").
   * fields: [{ value, label, operators?, valueOptions?, multiple?, valuePlaceholder? }] · operators (default for all fields).
   */
  var FilterMenu = React.forwardRef(function FilterMenu(props, ref) {
    var controlled = props.value !== undefined;
    var st = React.useState(props.defaultValue || []);
    var applied = controlled ? props.value || [] : st[0];
    var _o = React.useState(!!props.defaultOpen), openInner = _o[0], setOpenInner = _o[1];
    var open = props.open != null ? props.open : openInner;
    var _d = React.useState(applied), draft = _d[0], setDraft = _d[1];
    var _p = React.useState(props.align || "start"), place = _p[0], setPlace = _p[1];
    var wrap = React.useRef(null), pop = React.useRef(null), trig = React.useRef(null), focusNew = React.useRef(false);
    var uid = React.useMemo(function () { return "jsk-fm-" + (++fmUid); }, []);
    var fields = props.fields || [];
    function nid() { return "f" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }
    function setOpen(v, refocus) {
      if (props.disabled && v) return;
      if (v) setDraft(applied.map(function (c) { return Object.assign({ id: c.id != null ? c.id : nid() }, c); }));
      if (props.open == null) setOpenInner(v);
      if (props.onOpenChange) props.onOpenChange(v);
      if (!v && refocus !== false) setTimeout(function () { if (trig.current) trig.current.focus(); }, 0);
    }
    function commit(list) {
      list = list.filter(fmFilled);
      if (!controlled) st[1](list);
      if (props.onChange) props.onChange(list);
    }
    function add() { focusNew.current = true; setDraft(draft.concat({ id: nid() })); }
    React.useEffect(function () {
      if (!open) return;
      function onDoc(e) { if (wrap.current && !wrap.current.contains(e.target)) setOpen(false, false); }
      function onKey(e) { if (e.key === "Escape") { e.stopPropagation(); setOpen(false); } }
      document.addEventListener("mousedown", onDoc); document.addEventListener("keydown", onKey);
      var f = pop.current && pop.current.querySelector("button, input");
      if (f && f.focus) f.focus({ preventScroll: true });
      return function () { document.removeEventListener("mousedown", onDoc); document.removeEventListener("keydown", onKey); };
    }, [open]);
    React.useEffect(function () {
      if (!focusNew.current || !pop.current) return;
      focusNew.current = false;
      var rows = pop.current.querySelectorAll(".jsk-fcond");
      var b = rows.length && rows[rows.length - 1].querySelector("button, input");
      if (b) b.focus();
    }, [draft.length]);
    React.useLayoutEffect(function () {
      if (!open || !pop.current || !wrap.current) return;
      var w = wrap.current.getBoundingClientRect(), pw = pop.current.offsetWidth;
      var a = props.align || "start";
      if (a === "start" && w.left + pw > window.innerWidth - 8 && w.right - pw >= 8) a = "end";
      else if (a === "end" && w.right - pw < 8 && w.left + pw <= window.innerWidth - 8) a = "start";
      if (a !== place) setPlace(a);
    }, [open, draft.length === 0]);
    var count = applied.filter(fmFilled).length;
    var empty = draft.length === 0;
    var rows = draft.map(function (c, i) {
      var f = fields.find(function (x) { return x.value === c.field; }) || {};
      return h(FilterCondition, { key: c.id, fluid: true, fieldPlaceholder: props.fieldPlaceholder || "Select filter", fields: fields, operators: f.operators || props.operators || [],
        valueOptions: f.valueOptions, multiple: f.multiple, valuePlaceholder: f.valuePlaceholder, valueSummary: f.valueSummary, valueFooter: f.valueFooter,
        value: c, "aria-label": "Filter " + (i + 1),
        onChange: function (v) { setDraft(draft.map(function (x) { return x.id === c.id ? Object.assign({ id: c.id }, v) : x; })); },
        onRemove: function () {
          var next = draft.filter(function (x) { return x.id !== c.id; });
          setDraft(next);
          setTimeout(function () { var b = pop.current && pop.current.querySelector(".jsk-fm__add, .jsk-fcond button"); if (b) b.focus(); }, 0);
        } });
    });
    var addBtn = h(Button, { hierarchy: "secondary", size: "xs", iconLeading: cpIcon(FM_PLUS16, 16, 1.5), onClick: add, className: "jsk-fm__add" }, props.addLabel || "Add filter");
    return h("div", { ref: function (el) { wrap.current = el; if (typeof ref === "function") ref(el); else if (ref) ref.current = el; },
        className: "jsk-fm" + (open ? " is-open" : "") + (props.className ? " " + props.className : ""), style: props.style },
      h(FilterButton, { ref: trig, label: props.label, count: count, chevron: props.chevron !== false, disabled: props.disabled, size: props.size,
        fullWidth: props.fullWidth, iconOnly: props.iconOnly,
        "aria-haspopup": "dialog", "aria-expanded": open, "aria-controls": open ? uid : undefined,
        onClick: function () { setOpen(!open); } }),
      open ? h("div", { ref: pop, id: uid, role: "dialog", "aria-label": props.dialogLabel || "Filters",
          className: "jsk-fm__pop is-" + place + (empty ? " is-empty" : ""), style: empty ? undefined : { width: props.width || 624 } },
        empty
          ? h("div", { className: "jsk-fm__empty" },
              h("div", { className: "jsk-fm__empty-text" },
                h("div", { className: "jsk-fm__title" }, props.emptyTitle || "No filters applied"),
                h("div", { className: "jsk-fm__desc" }, props.emptyDescription || "Add filters to narrow down results.")),
              h("div", null, addBtn))
          : [h("div", { key: "b", className: "jsk-fm__body" }, rows),
             h("div", { key: "f", className: "jsk-fm__footer" }, addBtn,
               h("div", { className: "jsk-fm__actions" },
                 h(Button, { hierarchy: "secondary", size: "xs", onClick: function () { setDraft([]); } }, props.clearLabel || "Clear all"),
                 h(Button, { hierarchy: "primary", size: "xs", onClick: function () { commit(draft); setOpen(false); } }, props.applyLabel || "Apply filter")))]) : null);
  });
  FilterMenu.displayName = "FilterMenu";

  /* ---------- SlideoutPanel ---------- */
  var SO_FOCUSABLE = "button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex='-1'])";
  /** SlideoutPanel — side sheet (drawer) with header (featured icon, title, description, close), scrolling body and footer. */
  var SlideoutPanel = React.forwardRef(function SlideoutPanel(props, ref) {
    var _o = React.useState(!!props.defaultOpen), openInner = _o[0], setOpenInner = _o[1];
    var open = props.open != null ? props.open : openInner;
    var dlg = React.useRef(null), last = React.useRef(null);
    var portal = props.portal !== false, dim = props.overlay !== false, modal = dim && props.modal !== false;
    var uid = React.useMemo(function () { return "jsk-so-" + Math.random().toString(36).slice(2, 8); }, []);
    function setOpen(v) { if (props.open == null) setOpenInner(v); if (props.onOpenChange) props.onOpenChange(v); }
    React.useEffect(function () {
      if (!open) return;
      last.current = document.activeElement;
      var el = dlg.current;
      var first = el && (el.querySelector("[data-autofocus]") || el.querySelector(".jsk-so__body button:not([disabled]), .jsk-so__body input:not([disabled])") || el.querySelector(SO_FOCUSABLE));
      if (first && props.autoFocus !== false) first.focus({ preventScroll: true });
      var prev = document.body.style.overflow;
      if (portal && modal) document.body.style.overflow = "hidden";
      function key(e) {
        if (e.key === "Escape" && props.closeOnEscape !== false) { e.preventDefault(); setOpen(false); return; }
        if (e.key !== "Tab" || !dlg.current || !modal) return;
        var f = Array.prototype.filter.call(dlg.current.querySelectorAll(SO_FOCUSABLE), function (n) { return n.offsetParent !== null; });
        if (!f.length) return;
        var a = f[0], z = f[f.length - 1];
        if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
        else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
        else if (!dlg.current.contains(document.activeElement)) { e.preventDefault(); a.focus(); }
      }
      document.addEventListener("keydown", key);
      return function () {
        document.removeEventListener("keydown", key);
        if (portal && modal) document.body.style.overflow = prev;
        var t = last.current; if (t && t.focus && document.contains(t)) setTimeout(function () { t.focus({ preventScroll: true }); }, 0);
      };
    }, [open]);
    if (!open) return null;
    var side = props.side === "left" ? "left" : "right";
    var tabsList = props.tabs || null;
    var hasHead = props.title != null || props.icon != null || tabsList != null;
    var closeBtn = props.showClose !== false ? h(CloseButton, { size: "md", onDark: !!props.closeOnDark, className: "jsk-so__close", "aria-label": props.closeLabel || "Close panel", onClick: function () { setOpen(false); } }) : null;
    var titleRow = h("div", { className: "jsk-so__row" },
      props.icon != null ? (React.isValidElement(props.icon) && props.icon.type === FeaturedIcon ? props.icon : h(FeaturedIcon, { type: "modern", color: "gray", size: "md", icon: props.icon })) : null,
      h("div", { className: "jsk-so__titles" },
        props.title != null ? h("h2", { id: uid + "-t", className: "jsk-so__title" }, props.title) : null,
        props.description != null ? h("p", { id: uid + "-d", className: "jsk-so__desc" }, props.description) : null));
    var head = props.header != null
      ? h("div", { className: "jsk-so__head jsk-so__head--custom" }, props.header, closeBtn)
      : hasHead ? h("div", { className: "jsk-so__head" + (tabsList ? " jsk-so__head--tabs" : "") }, titleRow,
          tabsList ? h(SegmentedControl, { items: tabsList, value: props.tab, defaultValue: props.defaultTab, onChange: props.onTabChange, fullWidth: true, size: "sm",
            "aria-label": props.tabsLabel || (typeof props.title === "string" ? props.title + " views" : "Views"), className: "jsk-so__tabs" }) : null,
          closeBtn) : (closeBtn ? h("div", { className: "jsk-so__head jsk-so__head--bare" }, closeBtn) : null);
    var acts = props.actions;
    var asz = props.actionsSize === "md" ? "md" : props.actionsSize === "sm" ? "sm" : "md";
    var actNodes = Array.isArray(acts) ? acts.map(function (a, i) {
      if (React.isValidElement(a)) return React.cloneElement(a, { key: a.key != null ? a.key : i });
      var last = i === acts.length - 1;
      var p = omit(a, ["label"]);
      return h(Button, Object.assign({ key: i, size: asz, hierarchy: last && !a.hierarchy ? "primary" : "secondary" }, p), a.label != null ? a.label : a.children);
    }) : acts;
    var footStart = props.footerStart;
    var footer = (props.footer != null || acts != null || footStart != null) ? h("div", { className: "jsk-so__footer" + (footStart != null ? " jsk-so__footer--split" : "") },
      footStart != null ? h("div", { className: "jsk-so__fstart" }, footStart) : null,
      (props.footer != null || acts != null) ? h("div", { className: "jsk-so__actions" }, props.footer, actNodes) : null) : null;
    var stack = props.divided || props.stack;
    var bodyCls = "jsk-so__body" + (stack ? " jsk-so__body--stack" : "") + (props.divided ? " jsk-so__body--divided" : "") + (props.bodyPadding === "none" ? " jsk-so__body--flush" : "");
    var panel = h("div", Object.assign(omit(props, ["open", "defaultOpen", "onOpenChange", "portal", "overlay", "modal", "side", "width", "title", "description", "icon", "footer", "closeOnEscape", "closeOnOverlayClick", "showClose", "closeLabel", "autoFocus", "children", "className", "style", "header", "closeOnDark", "tabs", "tab", "defaultTab", "onTabChange", "tabsLabel", "actions", "actionsSize", "footerStart", "divided", "stack", "bodyPadding"]), {
        ref: function (el) { dlg.current = el; if (typeof ref === "function") ref(el); else if (ref) ref.current = el; },
        role: "dialog", "aria-modal": modal ? "true" : undefined,
        "aria-labelledby": props.title != null && props.header == null ? uid + "-t" : props["aria-labelledby"],
        "aria-describedby": props.description != null && props.header == null ? uid + "-d" : props["aria-describedby"],
        className: "jsk-so jsk-so--" + side + (props.className ? " " + props.className : ""),
        style: Object.assign({ "--so-w": (props.width || 400) + "px" }, props.style) }),
      head,
      h("div", { className: bodyCls }, props.children),
      footer);
    var node = h("div", { className: "jsk-so-root" + (dim ? " has-overlay" : "") + (portal ? "" : " is-contained"),
        onMouseDown: function (e) { if (dim && e.target === e.currentTarget && props.closeOnOverlayClick !== false) setOpen(false); } }, panel);
    return portal && typeof document !== "undefined" && ReactDOM.createPortal ? ReactDOM.createPortal(node, document.body) : node;
  });
  SlideoutPanel.displayName = "SlideoutPanel";

  /** SlideoutSection — titled block inside a SlideoutPanel body: 14px semibold title, optional description and trailing action, then content. */
  var SlideoutSection = React.forwardRef(function SlideoutSection(props, ref) {
    var uid = React.useMemo(function () { return "jsk-sos-" + Math.random().toString(36).slice(2, 8); }, []);
    var Tag = props.as || "section";
    var hasHead = props.title != null || props.description != null || props.action != null;
    return h(Tag, Object.assign(omit(props, ["title", "description", "action", "as", "gap", "children", "className"]), {
        ref: ref, "aria-labelledby": props.title != null ? uid : undefined,
        className: "jsk-sos" + (props.gap === "sm" ? " jsk-sos--sm" : "") + (props.className ? " " + props.className : "") }),
      hasHead ? h("div", { className: "jsk-sos__head" },
        h("div", { className: "jsk-sos__titles" },
          props.title != null ? h("h3", { id: uid, className: "jsk-sos__title" }, props.title) : null,
          props.description != null ? h("p", { className: "jsk-sos__desc" }, props.description) : null),
        props.action != null ? h("div", { className: "jsk-sos__action" }, props.action) : null) : null,
      props.children);
  });
  SlideoutSection.displayName = "SlideoutSection";

  /* ---------- FilterPanel ---------- */
  /** FilterPanel — FilterButton (optional) + SlideoutPanel of stacked FilterCondition rows; draft until "Apply filter". */
  var FilterPanel = React.forwardRef(function FilterPanel(props, ref) {
    var controlled = props.value !== undefined;
    var st = React.useState(props.defaultValue || []);
    var applied = controlled ? props.value || [] : st[0];
    var _o = React.useState(!!props.defaultOpen), openInner = _o[0], setOpenInner = _o[1];
    var open = props.open != null ? props.open : openInner;
    function nid() { return "f" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }
    function seed() { return applied.map(function (c) { return Object.assign({ id: c.id != null ? c.id : nid() }, c); }); }
    var _d = React.useState(seed), draft = _d[0], setDraft = _d[1];
    var body = React.useRef(null), focusNew = React.useRef(false);
    var fields = props.fields || [];
    function setOpen(v) {
      if (v) setDraft(seed());
      if (props.open == null) setOpenInner(v);
      if (props.onOpenChange) props.onOpenChange(v);
    }
    React.useEffect(function () { if (open && props.open != null) setDraft(seed()); }, [props.open]);
    React.useEffect(function () {
      if (!focusNew.current || !body.current) return;
      focusNew.current = false;
      var rows = body.current.querySelectorAll(".jsk-fcond");
      var b = rows.length && rows[rows.length - 1].querySelector("button, input");
      if (b) b.focus();
    }, [draft.length]);
    function add() { focusNew.current = true; setDraft(draft.concat({ id: nid() })); }
    function apply() {
      var list = draft.filter(fmFilled);
      if (!controlled) st[1](list);
      if (props.onChange) props.onChange(list);
      setOpen(false);
    }
    var count = applied.filter(fmFilled).length;
    var addBtn = h(Button, { hierarchy: "secondary", size: "sm", iconLeading: cpIcon("M10 4.17v11.66M4.17 10h11.66"), onClick: add, className: "jsk-fp__add" }, props.addLabel || "Add filter");
    var content = draft.length === 0
      ? h("div", { className: "jsk-fp__empty" },
          h("div", { className: "jsk-fp__empty-text" },
            h("div", { className: "jsk-fp__empty-title" }, props.emptyTitle || "No filters applied"),
            h("div", { className: "jsk-fp__empty-desc" }, props.emptyDescription || "Add filters to narrow down results.")),
          h("div", null, addBtn))
      : [draft.map(function (c, i) {
          var f = fields.find(function (x) { return x.value === c.field; }) || {};
          return h(FilterCondition, { key: c.id, stacked: true, fieldPlaceholder: props.fieldPlaceholder || "Select filter", fields: fields, operators: f.operators || props.operators || [],
            valueOptions: f.valueOptions, multiple: f.multiple, valuePlaceholder: f.valuePlaceholder, valueSummary: f.valueSummary, valueFooter: f.valueFooter,
            value: c, "aria-label": "Filter " + (i + 1),
            onChange: function (v) { setDraft(draft.map(function (x) { return x.id === c.id ? Object.assign({ id: c.id }, v) : x; })); },
            onRemove: function () {
              setDraft(draft.filter(function (x) { return x.id !== c.id; }));
              setTimeout(function () { var b = body.current && body.current.querySelector(".jsk-fp__add, .jsk-fcond button"); if (b) b.focus(); }, 0);
            } });
        }), h("div", { key: "add" }, addBtn)];
    return h(React.Fragment, null,
      props.trigger === false ? null : h(FilterButton, { label: props.label, count: count, iconOnly: props.iconOnly, fullWidth: props.fullWidth, disabled: props.disabled, size: props.size,
        "aria-haspopup": "dialog", "aria-expanded": open, onClick: function () { setOpen(!open); }, className: props.triggerClassName }),
      h(SlideoutPanel, { ref: ref, open: open, onOpenChange: setOpen, side: props.side, width: props.width, overlay: props.overlay, modal: props.modal, autoFocus: props.autoFocus, portal: props.portal,
          className: "jsk-fp" + (props.className ? " " + props.className : ""), style: props.style,
          icon: props.icon !== undefined ? props.icon : cpIcon(FB_FILTER), title: props.title || "Filters", description: props.description !== undefined ? props.description : "Add filters to narrow down results.",
          footer: h("div", { className: "jsk-fp__actions" },
            h(Button, { hierarchy: "secondary", size: "sm", onClick: function () { setDraft([]); } }, props.clearLabel || "Clear all"),
            h(Button, { hierarchy: "primary", size: "sm", onClick: apply }, props.applyLabel || "Apply filter")) },
        h("div", { ref: body, className: "jsk-fp__body" }, content)));
  });
  FilterPanel.displayName = "FilterPanel";

  /* ---------- CtaCard ---------- */
  function ctaActions(acts, size) {
    if (!acts) return null;
    if (!Array.isArray(acts)) return acts;
    return acts.map(function (a, i) {
      if (React.isValidElement(a)) return React.cloneElement(a, { key: a.key || i });
      return h(Button, Object.assign({ key: i, size: size || "md", hierarchy: i === acts.length - 1 ? "primary" : "secondary" }, omit(a, ["label"])), a.label);
    });
  }
  /**
   * CtaCard — inline call-to-action card: optional image, title, description, body slot and actions.
   * layout auto (image left ≥560px card width, on top below) | horizontal | vertical. Below 480px actions stack full width, primary first.
   */
  var CtaCard = React.forwardRef(function CtaCard(props, ref) {
    var layout = props.layout === "horizontal" || props.layout === "vertical" ? props.layout : "auto";
    var img = props.image == null ? null : typeof props.image === "string"
      ? h("img", { src: props.image, alt: props.imageAlt || "", className: "jsk-cta__img" }) : props.image;
    var acts = ctaActions(props.actions, props.actionSize);
    var Title = props.titleAs || "h3";
    return h("div", Object.assign(omit(props, ["title", "description", "image", "imageAlt", "actions", "actionSize", "layout", "titleAs", "children", "className"]), {
        ref: ref, className: "jsk-cta jsk-cta--" + layout + (img ? " has-media" : "") + (props.className ? " " + props.className : "") }),
      h("div", { className: "jsk-cta__card" },
        img ? h("div", { className: "jsk-cta__media" }, img) : null,
        h("div", { className: "jsk-cta__body" },
          props.title != null || props.description != null ? h("div", { className: "jsk-cta__text" },
            props.title != null ? h(Title, { className: "jsk-cta__title" }, props.title) : null,
            props.description != null ? h("p", { className: "jsk-cta__desc" }, props.description) : null) : null,
          props.children,
          acts ? h("div", { className: "jsk-cta__actions" }, acts) : null)));
  });
  CtaCard.displayName = "CtaCard";

  /** CtaItem — bordered row inside a CtaCard: media (file icon, card logo…), title, subtitle, meta line, actions. */
  var CtaItem = React.forwardRef(function CtaItem(props, ref) {
    return h("div", Object.assign(omit(props, ["media", "title", "subtitle", "meta", "metaIcon", "actions", "actionsPlacement", "className"]), {
        ref: ref, className: "jsk-cta-item" + (props.actionsPlacement === "title" ? " is-title-actions" : "") + (props.className ? " " + props.className : "") }),
      props.media ? h("div", { className: "jsk-cta-item__media" }, props.media) : null,
      h("div", { className: "jsk-cta-item__main" },
        h("div", { className: "jsk-cta-item__top" },
          h("div", { className: "jsk-cta-item__text" },
            props.title != null ? h("div", { className: "jsk-cta-item__title" }, props.title) : null,
            props.subtitle != null ? h("div", { className: "jsk-cta-item__sub" }, props.subtitle) : null),
          props.actions && props.actionsPlacement === "title" ? h("div", { className: "jsk-cta-item__actions" }, ctaActions(props.actions)) : null),
        props.meta != null ? h("div", { className: "jsk-cta-item__meta" },
          props.metaIcon ? h("span", { className: "jsk-cta-item__meta-ico", "aria-hidden": "true" }, props.metaIcon) : null, h("span", null, props.meta)) : null),
      props.actions && props.actionsPlacement !== "title" ? h("div", { className: "jsk-cta-item__actions" }, ctaActions(props.actions)) : null);
  });
  CtaItem.displayName = "CtaItem";

  /** PlanSummary — plan box: featured icon + name header, big price + period, description, actions. */
  var PlanSummary = React.forwardRef(function PlanSummary(props, ref) {
    return h("div", Object.assign(omit(props, ["icon", "name", "price", "period", "description", "actions", "className"]), {
        ref: ref, className: "jsk-plan" + (props.className ? " " + props.className : "") }),
      h("div", { className: "jsk-plan__head" },
        props.icon === null ? null : h(FeaturedIcon, { type: "light", color: "brand", size: "sm", icon: props.icon || h("svg", { viewBox: "0 0 16 16", width: 16, height: 16, fill: "none" },
          h("path", { d: "M1.33 10.33 8 13.67l6.67-3.34M1.33 7 8 10.33 14.67 7M8 3.04 1.33 6.37 8 9.7l6.67-3.33L8 3.04Z", stroke: "currentColor", strokeWidth: 1.33, strokeLinecap: "round", strokeLinejoin: "round" })) }),
        h("div", { className: "jsk-plan__name" }, props.name)),
      h("div", { className: "jsk-plan__body" },
        h("div", { className: "jsk-plan__info" },
          h("div", { className: "jsk-plan__price" }, h("span", { className: "jsk-plan__amount" }, props.price),
            props.period ? h("span", { className: "jsk-plan__period" }, props.period) : null),
          props.description ? h("p", { className: "jsk-plan__desc" }, props.description) : null),
        props.actions ? h("div", { className: "jsk-plan__actions" }, ctaActions(props.actions)) : null));
  });
  PlanSummary.displayName = "PlanSummary";

  /** FeatureList — check-circle items with a title and supporting text. */
  var FeatureList = React.forwardRef(function FeatureList(props, ref) {
    var items = props.items || [];
    return h("ul", Object.assign(omit(props, ["items", "color", "className"]), { ref: ref, className: "jsk-feat" + (props.className ? " " + props.className : "") }),
      items.map(function (it, i) {
        return h("li", { key: i, className: "jsk-feat__item" },
          h("span", { className: "jsk-feat__ico jsk-feat__ico--" + (props.color || "success"), "aria-hidden": "true" },
            h("svg", { viewBox: "0 0 24 24", width: 24, height: 24, fill: "none" }, h("path", { d: "m7.5 12 3 3 6-6m5.5 3c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }))),
          h("div", { className: "jsk-feat__text" },
            h("div", { className: "jsk-feat__title" }, it.title),
            it.description ? h("div", { className: "jsk-feat__desc" }, it.description) : null));
      }));
  });
  FeatureList.displayName = "FeatureList";

  /* ---------- LoadingIndicator ---------- */
  var LI_SIZES = { sm: [32, 4], md: [48, 6], lg: [56, 6], xl: [64, 8] };
  /** LoadingIndicator — spinning ring with optional label. type line-simple (track + arc) | line-spinner (arc only) | gradient (fading tail). */
  var LoadingIndicator = React.forwardRef(function LoadingIndicator(props, ref) {
    var size = LI_SIZES[props.size] ? props.size : "md";
    var type = props.type === "line-spinner" || props.type === "gradient" ? props.type : "line-simple";
    var d = LI_SIZES[size][0], sw = type === "gradient" && size === "lg" ? 8 : LI_SIZES[size][1];
    var r = (d - sw) / 2, c = 2 * Math.PI * r;
    var label = props.label === undefined ? "Loading..." : props.label;
    var ring = type === "gradient"
      ? h("span", { className: "jsk-li__grad", style: { "--li-sw": sw + "px" } })
      : h("svg", { viewBox: "0 0 " + d + " " + d, width: d, height: d, fill: "none" },
          type === "line-simple" ? h("circle", { className: "jsk-li__track", cx: d / 2, cy: d / 2, r: r, strokeWidth: sw }) : null,
          h("circle", { className: "jsk-li__arc", cx: d / 2, cy: d / 2, r: r, strokeWidth: sw, strokeLinecap: "round",
            strokeDasharray: (c * 0.25).toFixed(2) + " " + c.toFixed(2) }));
    return h("div", Object.assign(omit(props, ["size", "type", "label", "className"]), {
        ref: ref, role: "status", "aria-live": "polite", "aria-label": label ? undefined : props["aria-label"] || "Loading",
        className: "jsk-li jsk-li--" + size + " jsk-li--" + type + (props.className ? " " + props.className : "") }),
      h("span", { className: "jsk-li__ring", style: { width: d, height: d }, "aria-hidden": "true" }, ring),
      label ? h("span", { className: "jsk-li__label" }, label) : null);
  });
  LoadingIndicator.displayName = "LoadingIndicator";

  /* ---------- ChatMessage ---------- */
  var CM_PLAY = "M5.5 3.97c0-.8.88-1.28 1.55-.84l8.98 5.85c.6.4.6 1.27 0 1.67l-8.98 5.85A1 1 0 0 1 5.5 15.66V3.97Z";
  var CM_PAUSE = "M6.25 3.75v12.5M13.75 3.75v12.5";
  var CM_LINK = "M8.71 12.38 7.77 13.3a3.33 3.33 0 0 1-4.71-4.71l.94-.94m8.48.94.94-.94a3.33 3.33 0 0 0-4.71-4.71l-.94.94m-2.3 7.05 4.66-4.66";
  function cmBars(seed, n) {
    var out = [], x = 0;
    for (var i = 0; i < seed.length; i++) x = (x * 31 + seed.charCodeAt(i)) >>> 0;
    for (var j = 0; j < n; j++) { x = (x * 1103515245 + 12345) >>> 0; out.push(0.2 + ((x >>> 16) % 1000) / 1000 * 0.8); }
    return out;
  }
  function CmAudio(p) {
    var a = p.audio || {};
    var st = React.useState(false), playing = a.playing != null ? a.playing : st[0];
    var bars = React.useMemo(function () { return a.waveform || cmBars(String(a.src || a.duration || "audio"), 40); }, [a.src, a.duration]);
    var progress = a.progress || 0;
    return h("div", { className: "jsk-cm__audio" },
      h("button", { type: "button", className: "jsk-cm__play", "aria-label": playing ? "Pause voice message" : "Play voice message", "aria-pressed": playing,
        onClick: function () { st[1](!playing); if (a.onToggle) a.onToggle(!playing); } },
        playing ? cpIcon(CM_PAUSE, 20, 2) : h("svg", { viewBox: "0 0 20 20", width: 20, height: 20, "aria-hidden": "true" }, h("path", { d: CM_PLAY, fill: "currentColor" }))),
      h("span", { className: "jsk-cm__wave", "aria-hidden": "true" }, bars.map(function (b, i) {
        return h("i", { key: i, className: i / bars.length < progress ? "is-played" : undefined, style: { height: Math.round(b * 100) + "%" } });
      })),
      a.duration ? h("span", { className: "jsk-cm__dur" }, a.duration) : null);
  }
  var CM_STATUS = { sent: "M13.33 4 6 11.33 2.67 8", delivered: "M10 4l-5.5 7L2 8.5m12-4.5-5.5 7-1-1", read: "M10 4l-5.5 7L2 8.5m12-4.5-5.5 7-1-1" };
  /**
   * ChatMessage — chat bubble. outgoing (right, no avatar, read receipt) or incoming (avatar + name).
   * Content: children (text) · reply · file · audio · image · video · link · typing. reactions, hover actions.
   */
  var ChatMessage = React.forwardRef(function ChatMessage(props, ref) {
    var size = props.size === "sm" ? "sm" : "md";
    var out = !!props.outgoing;
    var av = props.avatar === false || out ? null : h(Avatar, Object.assign({ size: size === "sm" ? "sm" : "md", status: "online" }, props.avatar || { name: typeof props.name === "string" ? props.name : undefined }));
    var parts = [];
    if (props.reply) parts.push(h("div", { key: "r", className: "jsk-cm__reply" }, h("span", { className: "jsk-cm__reply-text" }, props.reply.text != null ? props.reply.text : props.reply)));
    if (props.link && props.link.title) parts.push(h("a", { key: "lk", className: "jsk-cm__link", href: props.link.url, target: "_blank", rel: "noopener noreferrer" },
      h("span", { className: "jsk-cm__link-ico", "aria-hidden": "true" }, cpIcon(CM_LINK, 16, 1.33)),
      h("span", { className: "jsk-cm__link-text" }, h("span", { className: "jsk-cm__link-title" }, props.link.title),
        props.link.description ? h("span", { className: "jsk-cm__link-desc" }, props.link.description) : null)));
    if (props.image) parts.push(h("div", { key: "i", className: "jsk-cm__img" }, typeof props.image === "string" ? h("img", { src: props.image, alt: props.imageAlt || "" }) : props.image));
    if (props.video) parts.push(h("div", { key: "v", className: "jsk-cm__video" }, React.isValidElement(props.video) ? props.video : h(VideoPlayer, Object.assign({ size: "sm" }, props.video))));
    if (props.file) parts.push(h("div", { key: "f", className: "jsk-cm__file" }, h(FileIcon, { type: props.file.type || String(props.file.name || "").split(".").pop() }),
      h("div", { className: "jsk-cm__file-text" }, props.file.href ? h("a", { href: props.file.href, className: "jsk-cm__file-name", download: props.file.download }, props.file.name) : h("span", { className: "jsk-cm__file-name" }, props.file.name),
        props.file.size ? h("span", { className: "jsk-cm__file-size" }, props.file.size) : null)));
    if (props.audio) parts.push(h(CmAudio, { key: "a", audio: props.audio }));
    if (props.children != null) parts.push(h("div", { key: "t", className: "jsk-cm__text" }, props.children));
    if (props.link && props.link.url && props.link.showUrl !== false) parts.push(h("a", { key: "u", className: "jsk-cm__url", href: props.link.url, target: "_blank", rel: "noopener noreferrer" }, props.link.label || props.link.url));
    var status = out && props.status ? h("span", { className: "jsk-cm__status is-" + props.status, role: "img", "aria-label": props.status === "read" ? "Read" : props.status === "delivered" ? "Delivered" : "Sent" },
      cpIcon(CM_STATUS[props.status] || CM_STATUS.sent, 16, 1.5)) : null;
    var bubble = props.typing
      ? h("div", { className: "jsk-cm__bubble jsk-cm__typing", role: "status", "aria-label": (typeof props.name === "string" ? props.name + " is" : "Someone is") + " typing" }, h("i"), h("i"), h("i"))
      : h("div", { className: "jsk-cm__bubble" }, parts,
          props.time != null || status ? h("div", { className: "jsk-cm__meta" }, props.time != null ? h("time", { dateTime: props.dateTime }, props.time) : null, status) : null);
    var acts = props.actions && props.actions.length ? h("div", { className: "jsk-cm__actions", role: "toolbar", "aria-label": "Message actions" },
      props.actions.map(function (a, i) {
        return h("button", { key: i, type: "button", className: "jsk-cm__act", "aria-label": a.label, title: a.label, onClick: a.onClick }, a.icon);
      })) : null;
    var reactions = props.reactions && props.reactions.length ? h("div", { className: "jsk-cm__reactions" }, props.reactions.map(function (r, i) {
      var label = (r.label || r.emoji) + (r.count ? ", " + r.count : "");
      return h("button", { key: i, type: "button", className: "jsk-cm__react" + (r.active ? " is-active" : ""), "aria-pressed": !!r.active, "aria-label": label,
          onClick: props.onReact ? function () { props.onReact(r, i); } : undefined },
        h("span", { className: "jsk-cm__emoji", "aria-hidden": "true" }, r.emoji), r.count ? h("span", { "aria-hidden": "true" }, r.count) : null);
    })) : null;
    return h("div", Object.assign(omit(props, ["size", "outgoing", "avatar", "name", "time", "dateTime", "status", "reply", "file", "audio", "image", "imageAlt", "video", "link", "typing", "reactions", "onReact", "actions", "children", "className"]), {
        ref: ref, className: "jsk-cm jsk-cm--" + size + (out ? " is-out" : " is-in") + (props.className ? " " + props.className : "") }),
      av,
      h("div", { className: "jsk-cm__col" },
        props.name !== false ? h("div", { className: "jsk-cm__name" }, props.name != null ? props.name : out ? "You" : "") : null,
        h("div", { className: "jsk-cm__wrap" }, bubble, acts),
        reactions));
  });
  ChatMessage.displayName = "ChatMessage";

  /* ---------- MetricCard ---------- */
  var MC_UP = "M8 12.67V3.33m0 0L3.33 8M8 3.33 12.67 8";
  var MC_DOWN = "M8 3.33v9.34m0 0L12.67 8M8 12.67 3.33 8";
  var MC_TUP = "M14.67 4.67 9.42 9.91c-.26.27-.4.4-.55.45a.67.67 0 0 1-.41 0c-.16-.05-.29-.18-.55-.45L6.09 8.09c-.26-.27-.4-.4-.55-.45a.67.67 0 0 0-.41 0c-.16.05-.29.18-.55.45L1.33 11.33m13.34-6.66H10m4.67 0v4.66";
  var MC_TDOWN = "M14.67 11.33 9.42 6.09c-.26-.27-.4-.4-.55-.45a.67.67 0 0 0-.41 0c-.16.05-.29.18-.55.45L6.09 7.91c-.26.27-.4.4-.55.45a.67.67 0 0 1-.41 0c-.16-.05-.29-.18-.55-.45L1.33 4.67m13.34 6.66H10m4.67 0V6.67";
  var MC_UP12 = "M6 9.5v-7m0 0L2.5 6M6 2.5 9.5 6";
  var MC_DOWN12 = "M6 2.5v7m0 0L9.5 6M6 9.5 2.5 6";
  var MC_DOTS = "M10 10.83a.83.83 0 1 0 0-1.66.83.83 0 0 0 0 1.66Zm0-5.83a.83.83 0 1 0 0-1.67.83.83 0 0 0 0 1.67Zm0 11.67a.83.83 0 1 0 0-1.67.83.83 0 0 0 0 1.67Z";
  function mcTone(t) { return t === "negative" ? "error" : t === "neutral" ? "gray" : "success"; }

  /** Sparkline — small decorative trend chart. data numbers · compare (second layer) · tone success|error|gray|brand · marker true|index · line/area. */
  var Sparkline = React.forwardRef(function Sparkline(props, ref) {
    var data = props.data || [], compare = props.compare;
    var tone = props.tone || "success", hgt = props.height || 56;
    var line = props.line !== undefined ? !!props.line : !compare;
    var area = props.area !== false;
    var box = React.useRef(null);
    var st = React.useState(props.width || 0), W = st[0], setW = st[1];
    var uid = (React.useId ? React.useId() : "sp").replace(/[^a-zA-Z0-9_-]/g, "");
    React.useLayoutEffect(function () {
      if (props.width || !box.current) return;
      var el = box.current;
      function m() { setW(el.getBoundingClientRect().width); }
      m();
      if (typeof ResizeObserver === "undefined") return;
      var ro = new ResizeObserver(m); ro.observe(el);
      return function () { ro.disconnect(); };
    }, [props.width]);
    var mk = props.marker;
    var mkIdx = mk === true ? data.indexOf(Math.max.apply(null, data)) : typeof mk === "number" ? mk : -1;
    var all = data.concat(compare || []);
    var min = props.min != null ? props.min : Math.min.apply(null, all), max = props.max != null ? props.max : Math.max.apply(null, all);
    var top = mkIdx >= 0 ? 10 : 2, bot = line ? 2 : 0;
    function pts(arr) {
      var n = arr.length, span = max - min || 1;
      return arr.map(function (v, i) { return [n > 1 ? i * W / (n - 1) : W / 2, top + (1 - (v - min) / span) * (hgt - top - bot)]; });
    }
    var p = W && data.length ? pts(data) : [];
    var q = W && compare && compare.length ? pts(compare) : null;
    function fill(points) { var d = chPath(points); return d + "L" + W + "," + hgt + "L0," + hgt + "Z"; }
    var gid = "jsk-sp-" + uid;
    return h("div", Object.assign(omit(props, ["data", "compare", "tone", "height", "width", "line", "area", "marker", "min", "max", "className", "style"]), {
        ref: function (el) { box.current = el; if (typeof ref === "function") ref(el); else if (ref) ref.current = el; },
        "aria-hidden": props["aria-label"] ? undefined : "true", role: props["aria-label"] ? "img" : undefined,
        className: "jsk-sp jsk-sp--" + tone + (line ? "" : " jsk-sp--layers") + (props.className ? " " + props.className : ""),
        style: Object.assign({ height: hgt, width: props.width || undefined }, props.style) }),
      W ? h("svg", { width: W, height: hgt, viewBox: "0 0 " + W + " " + hgt, fill: "none", className: "jsk-sp__svg" },
        h("defs", null, h("linearGradient", { id: gid, x1: 0, y1: 0, x2: 0, y2: 1 },
          h("stop", { offset: "0%", className: "jsk-sp__stop-a" }), h("stop", { offset: "100%", className: "jsk-sp__stop-b" }))),
        q && area ? h("path", { d: fill(q), fill: "url(#" + gid + ")" }) : null,
        p.length && area ? h("path", { d: fill(p), fill: "url(#" + gid + ")" }) : null,
        p.length && line ? h("path", { d: chPath(p), className: "jsk-sp__line" }) : null,
        mkIdx >= 0 && p[mkIdx] ? h("g", { className: "jsk-sp__marker" },
          h("circle", { cx: p[mkIdx][0], cy: p[mkIdx][1], r: 8.6, className: "jsk-sp__halo" }),
          h("circle", { cx: p[mkIdx][0], cy: p[mkIdx][1], r: 4.25, className: "jsk-sp__dot" })) : null) : null);
  });
  Sparkline.displayName = "Sparkline";

  /** MetricChange — the "+100%" indicator. type badge|arrow|trend · trend positive|negative|neutral · context ("vs last month"). */
  function MetricChange(props) {
    var type = props.type || "badge", trend = props.trend || "positive", tone = mcTone(trend);
    var neg = trend === "negative";
    var dir = neg ? "decrease" : trend === "neutral" ? "change" : "increase";
    var sr = h("span", { className: "jsk-sr" }, dir + " of ");
    var node;
    if (type === "badge") node = h(Badge, { type: "modern", size: "md", color: "gray", className: "jsk-mc__badge jsk-mc__badge--" + tone,
        iconLeading: trend === "neutral" ? null : cpIcon(neg ? MC_DOWN12 : MC_UP12, 12, 1.5) }, sr, props.value);
    else node = h("span", { className: "jsk-mc__chg jsk-mc__chg--" + type + " jsk-mc__chg--" + tone },
        trend === "neutral" ? null : h("span", { className: "jsk-mc__chg-ico", "aria-hidden": "true" }, cpIcon(type === "trend" ? (neg ? MC_TDOWN : MC_TUP) : (neg ? MC_DOWN : MC_UP), 16, 2)),
        sr, props.value);
    return h("span", { className: "jsk-mc__change" }, node, props.context ? h("span", { className: "jsk-mc__ctx" }, props.context) : null);
  }

  var MC_OWN = ["label", "value", "change", "trend", "changeType", "changeContext", "changePlacement", "icon", "iconType", "iconColor", "iconPlacement",
    "labelStyle", "valueSize", "chart", "chartPlacement", "menuItems", "menuLabel", "menu", "action", "actionVariant", "footerStart", "footer", "nested", "titleAs", "className"];
  /**
   * MetricCard — KPI card: label, big value, change indicator, optional featured icon, sparkline, overflow menu and footer action.
   * Responsive via container query (≤360px → mobile paddings).
   */
  var MetricCard = React.forwardRef(function MetricCard(props, ref) {
    var trend = props.trend || "positive", tone = mcTone(trend);
    var iconPl = props.icon ? (props.iconPlacement || "top") : null;
    var titleStyle = props.labelStyle ? props.labelStyle === "title" : iconPl === "inline";
    var place = props.changePlacement || "end";
    var chartPl = props.chart ? (props.chartPlacement || "bottom") : null;
    var Title = props.titleAs || "h3";
    var ficon = props.icon ? h(FeaturedIcon, { type: props.iconType || "modern", color: props.iconColor || (props.iconType === "light" ? "success" : "gray"),
        size: iconPl === "start" ? "md" : "lg", icon: props.icon }) : null;
    var label = props.nested ? null : h(Title, { className: "jsk-mc__label" + (titleStyle ? " jsk-mc__label--title" : "") }, props.label);
    var change = props.change != null ? h(MetricChange, { value: props.change, trend: trend, type: props.changeType || (props.changeContext ? "trend" : "badge"), context: props.changeContext }) : null;
    var chart = null;
    if (props.chart) {
      var cfg = Array.isArray(props.chart) ? { data: props.chart } : props.chart;
      chart = React.isValidElement(props.chart) ? props.chart
        : h(Sparkline, Object.assign({ tone: tone, height: chartPl === "end" ? 56 : 72, className: "jsk-mc__chart jsk-mc__chart--" + chartPl }, cfg));
    }
    var valueRow = h("div", { className: "jsk-mc__vrow jsk-mc__vrow--" + place + (chartPl === "end" ? " has-chart" : "") },
      h("div", { className: "jsk-mc__vmain" },
        h("div", { className: "jsk-mc__value" + (props.valueSize === "lg" ? " jsk-mc__value--lg" : "") }, props.value),
        change),
      chartPl === "end" ? chart : null);
    var menu = props.menu !== undefined ? props.menu : props.menuItems ? h(Dropdown, { align: "end", items: props.menuItems, width: 200, label: props.menuLabel || "More options",
        trigger: h("button", { type: "button", className: "jsk-mc__menu-btn", "aria-label": props.menuLabel || "More options" }, cpIcon(MC_DOTS)) }) : null;
    var body = h("div", { className: "jsk-mc__body" + (iconPl ? " jsk-mc__body--icon-" + iconPl : "") + (menu ? " has-menu" : "") },
      iconPl === "inline" ? h("div", { className: "jsk-mc__head" }, ficon, label) : null,
      iconPl === "top" ? ficon : null,
      iconPl === "start" ? ficon : null,
      h("div", { className: "jsk-mc__content" }, iconPl === "inline" ? null : label, valueRow),
      chartPl === "bottom" ? chart : null,
      menu ? h("div", { className: "jsk-mc__menu" }, menu) : null);
    var act = props.action;
    var actNode = act ? (React.isValidElement(act) ? act : h(Button, Object.assign({ hierarchy: props.actionVariant === "button" ? "secondary" : "link-color", size: props.actionVariant === "button" ? "sm" : "md" },
        omit(act, ["label"])), act.label)) : null;
    var footer = props.footer !== undefined ? props.footer : actNode || props.footerStart ? h("div", { className: "jsk-mc__footer" + (props.footerStart ? " is-split" : "") + (props.actionVariant === "button" ? " is-btn" : "") },
        props.footerStart, actNode) : null;
    var cls = "jsk-mc" + (props.nested ? " jsk-mc--nested" : "") + (footer ? " has-footer" : "") + (props.className ? " " + props.className : "");
    return h("div", Object.assign(omit(props, MC_OWN), { ref: ref, className: cls }),
      h("div", { className: "jsk-mc__card" },
        props.nested ? h("div", { className: "jsk-mc__nhead" }, h(Title, { className: "jsk-mc__label jsk-mc__label--nested" }, props.label)) : null,
        props.nested ? h("div", { className: "jsk-mc__inner" }, body) : body,
        footer));
  });
  MetricCard.displayName = "MetricCard";

  /* ---------- Pagination ---------- */
  var PG_L = "M15.83 10H4.17m0 0L10 15.83M4.17 10 10 4.17";
  var PG_R = "M4.17 10h11.66m0 0L10 4.17M15.83 10 10 15.83";
  /** pgRange — page items for `slots` positions: numbers and "…" (edges first, then a centred window). */
  function pgRange(cur, total, slots) {
    var i, out = [];
    if (total <= slots) { for (i = 1; i <= total; i++) out.push(i); return out; }
    var k = Math.floor((slots - 1) / 2);
    if (cur <= k || cur > total - k) {
      for (i = 1; i <= k; i++) out.push(i);
      out.push("…");
      for (i = total - (slots - k - 2); i <= total; i++) out.push(i);
      return out;
    }
    var m = slots - 4, start = cur - Math.floor((m - 1) / 2);
    out.push(1, "…");
    for (i = start; i < start + m; i++) out.push(i);
    out.push("…", total);
    return out;
  }
  var PG_OWN = ["page", "defaultPage", "total", "onChange", "variant", "navStyle", "shape", "textPosition", "align", "placement", "divider",
    "slots", "mobileSlots", "previousLabel", "nextLabel", "pageText", "pageSize", "pageSizeOptions", "onPageSizeChange", "totalItems",
    "rowsLabel", "rangeText", "label", "className"];
  /**
   * Pagination — variant "numbers" (prev · pages · next) | "text" ("Page 1 of 10" + prev/next) | "group" (joined button group).
   * Mobile (container ≤ 640px) switches to icon arrows + "Page X of Y" (numbers/text) or a compact group.
   */
  var Pagination = React.forwardRef(function Pagination(props, ref) {
    var total = Math.max(1, props.total || 1);
    var controlled = props.page !== undefined;
    var st = React.useState(props.defaultPage || 1);
    var page = Math.min(total, Math.max(1, controlled ? props.page : st[0]));
    var variant = props.variant || "numbers";
    var shape = props.shape === "circle" ? "circle" : "square";
    var prevL = props.previousLabel || "Previous", nextL = props.nextLabel || "Next";
    var pageText = (props.pageText || function (p, t) { return "Page " + p + " of " + t; })(page, total);
    function go(p) { p = Math.min(total, Math.max(1, p)); if (p === page) return; if (!controlled) st[1](p); if (props.onChange) props.onChange(p); }
    var first = page <= 1, last = page >= total;
    function pages(slots, cls) {
      return h("ol", { className: "jsk-pg__pages " + (cls || "") }, pgRange(page, total, slots).map(function (p, i) {
        if (p === "…") return h("li", { key: "e" + i, className: "jsk-pg__ellipsis", "aria-hidden": "true" }, "…");
        var cur = p === page;
        return h("li", { key: p }, h("button", { type: "button", className: "jsk-pg__num jsk-pg__num--" + shape + (cur ? " is-current" : ""),
          "aria-current": cur ? "page" : undefined, "aria-label": "Page " + p, onClick: function () { go(p); } }, p));
      }));
    }
    function navBtn(dir, mode) {
      var prev = dir === "prev", ico = cpIcon(prev ? PG_L : PG_R);
      var common = { size: "sm", disabled: prev ? first : last, onClick: function () { go(page + (prev ? -1 : 1)); }, className: "jsk-pg__nav" };
      if (mode === "icon") return h(Button, Object.assign(common, { hierarchy: "secondary", iconOnly: true, iconLeading: ico, "aria-label": prev ? prevL : nextL }));
      if (mode === "plain") return h(Button, Object.assign(common, { hierarchy: "secondary" }), prev ? prevL : nextL);
      return h(Button, Object.assign(common, { hierarchy: mode === "link" ? "link-gray" : "secondary" }, prev ? { iconLeading: ico } : { iconTrailing: ico }), prev ? prevL : nextL);
    }
    var info = h("span", { className: "jsk-pg__info", "aria-live": "polite" }, pageText);
    var mobileBar = h("div", { className: "jsk-pg__m" }, navBtn("prev", "icon"), info, navBtn("next", "icon"));
    var body;
    if (variant === "group") {
      var seg = function (dir, iconOnly) {
        var prev = dir === "prev";
        return h("button", { type: "button", className: "jsk-pg__seg jsk-pg__seg--nav" + (iconOnly ? " is-icon" : ""), disabled: prev ? first : last,
            "aria-label": iconOnly ? (prev ? prevL : nextL) : undefined, onClick: function () { go(page + (prev ? -1 : 1)); } },
          prev ? cpIcon(PG_L) : null, iconOnly ? null : h("span", null, prev ? prevL : nextL), prev ? null : cpIcon(PG_R));
      };
      var group = function (slots, iconOnly, cls) {
        return h("div", { className: "jsk-pg__group " + cls },
          seg("prev", iconOnly),
          pgRange(page, total, slots).map(function (p, i) {
            if (p === "…") return h("span", { key: "e" + i, className: "jsk-pg__seg is-ellipsis", "aria-hidden": "true" }, "…");
            var cur = p === page;
            return h("button", { key: p, type: "button", className: "jsk-pg__seg" + (cur ? " is-current" : ""), "aria-current": cur ? "page" : undefined,
              "aria-label": "Page " + p, onClick: function () { go(p); } }, p);
          }),
          seg("next", iconOnly));
      };
      var rows = props.pageSize != null && props.pageSizeOptions ? h("div", { className: "jsk-pg__rows" },
        h("span", { className: "jsk-pg__info" }, props.rowsLabel || "Rows per page"),
        h("div", { className: "jsk-pg__size" }, h(Select, { size: "sm", "aria-label": props.rowsLabel || "Rows per page", value: props.pageSize,
          options: props.pageSizeOptions.map(function (o) { return typeof o === "object" ? o : { value: o, label: String(o) }; }),
          onChange: function (v) { if (props.onPageSizeChange) props.onPageSizeChange(Number(v) || v); } })),
        props.totalItems != null ? h("span", { className: "jsk-pg__info" }, (props.rangeText || function (a, b, n) { return a + "-" + b + " of " + n; })(
          (page - 1) * props.pageSize + 1, Math.min(page * props.pageSize, props.totalItems), props.totalItems)) : null) : null;
      body = [rows,
        group(props.slots || (rows ? 5 : 7), false, "jsk-pg__d"),
        group(props.mobileSlots || 5, true, "jsk-pg__m jsk-pg__m--group")];
    } else if (variant === "text") {
      var pos = props.textPosition || "start";
      var desk = pos === "center"
        ? h("div", { className: "jsk-pg__d jsk-pg__row" }, h("div", { className: "jsk-pg__side" }, navBtn("prev", "plain")), info, h("div", { className: "jsk-pg__side jsk-pg__side--end" }, navBtn("next", "plain")))
        : h("div", { className: "jsk-pg__d jsk-pg__row jsk-pg__row--" + pos },
            pos === "start" ? info : null,
            h("div", { className: "jsk-pg__btns" }, navBtn("prev", "plain"), navBtn("next", "plain")),
            pos === "end" ? info : null);
      body = [desk, mobileBar];
    } else {
      var navMode = props.navStyle === "link" ? "link" : "button";
      body = [h("div", { className: "jsk-pg__d jsk-pg__row" },
          h("div", { className: "jsk-pg__side" }, navBtn("prev", navMode)),
          pages(props.slots || 7),
          h("div", { className: "jsk-pg__side jsk-pg__side--end" }, navBtn("next", navMode))),
        mobileBar];
    }
    var placement = props.placement === "card" ? "card" : "page";
    return h("nav", Object.assign(omit(props, PG_OWN), { ref: ref, "aria-label": props.label || "Pagination",
        className: "jsk-pg jsk-pg--" + variant + " jsk-pg--" + placement + (props.divider === false ? "" : " has-divider") +
          (variant === "group" ? " jsk-pg--align-" + (props.align || "end") : "") + (props.className ? " " + props.className : "") }),
      h("div", { className: "jsk-pg__inner" }, body.map(function (n, i) { return n ? React.cloneElement(n, { key: i }) : null; })));
  });
  Pagination.displayName = "Pagination";

  /* ---------- PaginationDots ---------- */
  /**
   * PaginationDots — carousel / onboarding step indicator. type dot | line · size md | lg · framed (frosted pill for use over images).
   * With onChange each indicator is a button ("Go to slide N"); without it the group is a read-only "Slide X of N" image.
   */
  var PaginationDots = React.forwardRef(function PaginationDots(props, ref) {
    var count = Math.max(1, props.count || 3);
    var controlled = props.current !== undefined;
    var st = React.useState(props.defaultCurrent || 0);
    var cur = Math.min(count - 1, Math.max(0, controlled ? props.current : st[0]));
    var type = props.type === "line" ? "line" : "dot", size = props.size === "lg" ? "lg" : "md";
    var interactive = !!props.onChange || props.interactive;
    var itemLabel = props.itemLabel || function (i, n) { return "Go to slide " + (i + 1) + " of " + n; };
    var btns = React.useRef([]);
    function go(i, focus) {
      i = (i + count) % count;
      if (!controlled) st[1](i);
      if (props.onChange) props.onChange(i);
      if (focus && btns.current[i]) btns.current[i].focus();
    }
    function onKey(e) {
      var d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
      if (e.key === "Home") { e.preventDefault(); go(0, true); }
      else if (e.key === "End") { e.preventDefault(); go(count - 1, true); }
      else if (d) { e.preventDefault(); go(cur + d, true); }
    }
    var items = [];
    for (var i = 0; i < count; i++) {
      (function (i) {
        var on = i === cur, cls = "jsk-pd__item" + (on ? " is-current" : "");
        items.push(interactive
          ? h("button", { key: i, type: "button", className: cls, ref: function (el) { btns.current[i] = el; },
              "aria-label": itemLabel(i, count), "aria-current": on ? "step" : undefined, tabIndex: on ? 0 : -1,
              onClick: function () { go(i); }, onKeyDown: onKey })
          : h("span", { key: i, className: cls }));
      })(i);
    }
    return h("div", Object.assign(omit(props, ["count", "current", "defaultCurrent", "onChange", "interactive", "type", "size", "framed", "itemLabel", "label", "className"]), {
        ref: ref, role: interactive ? "group" : "img",
        "aria-label": props.label || (interactive ? "Slides" : "Slide " + (cur + 1) + " of " + count),
        className: "jsk-pd jsk-pd--" + type + " jsk-pd--" + size + (props.framed ? " jsk-pd--framed" : "") + (props.className ? " " + props.className : "") }),
      items);
  });
  PaginationDots.displayName = "PaginationDots";

  /* ---------- ProgressSteps ---------- */
  var PS_CHECK = { sm: "M10 3 4.5 8.5 2 6", md: "M13.33 4 6 11.33 2.67 8" };
  var PS_X = { sm: "M9 3 3 9m0-6 6 6", md: "M12 4 4 12m0-8 8 8" };
  var PS_STATUS_TEXT = { complete: "Completed", current: "Current step", incomplete: "Not started", error: "Needs attention" };
  function psIcon(d, px, sw) {
    return h("svg", { viewBox: "0 0 " + px + " " + px, width: px, height: px, fill: "none", "aria-hidden": "true" },
      h("path", { d: d, stroke: "currentColor", strokeWidth: sw, strokeLinecap: "round", strokeLinejoin: "round" }));
  }
  function psIndicator(type, status, size, step, idx, horizontal) {
    var px = size === "md" ? 16 : 12, sw = size === "md" ? 2.5 : 2;
    if (type === "icon") {
      return h("span", { className: "jsk-ps__fic" + (status === "error" ? " is-error" : "") },
        h(FeaturedIcon, { type: "modern", color: "gray", size: horizontal && size === "sm" ? "md" : "lg", icon: step.icon }));
    }
    if (type === "avatar") {
      var badge = status === "complete" || status === "error"
        ? h("span", { className: "jsk-ps__badge jsk-ps__badge--" + status, "aria-hidden": "true" },
            psIcon(status === "complete" ? "M10 3 4.5 8.5 2 6" : "M9 3 3 9m0-6 6 6", 12, 2)) : null;
      return h("span", { className: "jsk-ps__av" }, h(Avatar, { size: "lg", src: step.avatar, name: step.name || (typeof step.title === "string" ? step.title : undefined), alt: "" }), badge);
    }
    var inner = null;
    if (status === "complete") inner = psIcon(PS_CHECK[size], px, sw);
    else if (status === "error") inner = psIcon(PS_X[size], px, sw);
    else if (type === "number") inner = h("span", { className: "jsk-ps__num" }, step.number != null ? step.number : idx + 1);
    else inner = h("span", { className: "jsk-ps__dot" });
    return h("span", { className: "jsk-ps__ind jsk-ps__ind--" + type + " is-" + status, "aria-hidden": "true" }, inner);
  }
  var PS_OWN = ["steps", "current", "type", "size", "orientation", "onStepClick", "label", "className"];
  /**
   * ProgressSteps — multi-step progress. type check | number | icon | avatar | line · size sm | md ·
   * orientation vertical (indicator + text, connector below) | horizontal (centred columns with connectors; stacks below 560px).
   * steps: [{ title, description, status?, icon?, avatar?, name? }] · current: index (earlier = complete).
   */
  var ProgressSteps = React.forwardRef(function ProgressSteps(props, ref) {
    var steps = props.steps || [];
    var type = ["check", "number", "icon", "avatar", "line"].indexOf(props.type) >= 0 ? props.type : "check";
    var size = props.size === "md" ? "md" : "sm";
    var orient = type === "line" ? "horizontal" : (props.orientation === "horizontal" ? "horizontal" : "vertical");
    var cur = props.current == null ? 0 : props.current;
    var dims = type === "icon" || type === "avatar" ? 1 : 0;
    return h("div", Object.assign(omit(props, PS_OWN), { ref: ref, className: "jsk-psw" + (props.className ? " " + props.className : "") }), h("ol", { "aria-label": props.label || "Progress",
        className: "jsk-ps jsk-ps--" + type + " jsk-ps--" + size + " jsk-ps--" + orient },
      steps.map(function (s, i) {
        var status = s.status || (i < cur ? "complete" : i === cur ? "current" : "incomplete");
        var brandText = status === "current" && (type === "check" || type === "line");
        var text = h("div", { className: "jsk-ps__text" },
          h("div", { className: "jsk-ps__title" }, s.title),
          s.description ? h("div", { className: "jsk-ps__desc" }, s.description) : null,
          h("span", { className: "jsk-sr" }, ", " + PS_STATUS_TEXT[status]));
        var body = type === "line" ? text : [
          h("div", { key: "m", className: "jsk-ps__mark" }, psIndicator(type, status, size, s, i, orient === "horizontal"),
            orient === "vertical" && i < steps.length - 1 ? h("span", { className: "jsk-ps__conn" + (status === "complete" ? " is-done" : ""), "aria-hidden": "true" }) : null),
          React.cloneElement(text, { key: "t" })];
        var content = props.onStepClick && status !== "incomplete"
          ? h("button", { type: "button", className: "jsk-ps__btn", onClick: function () { props.onStepClick(i, s); } }, body)
          : body;
        return h("li", { key: s.key || i, "aria-current": status === "current" ? "step" : undefined,
            className: "jsk-ps__step is-" + status + (brandText ? " is-brand" : "") + (dims && status === "incomplete" ? " is-dim" : "") +
              (type === "number" && status === "incomplete" ? " is-dim" : "") + (orient === "horizontal" && i < steps.length - 1 && type !== "line" ? " has-next" : "") +
              (status === "complete" ? " is-done" : "") },
          content);
      })));
  });
  ProgressSteps.displayName = "ProgressSteps";

  /* ---------- CaptchaField ---------- */
  var CF_PROVIDERS = {
    recaptcha: { url: "https://www.google.com/recaptcha/api.js", global: "grecaptcha", name: "Google reCAPTCHA" },
    hcaptcha: { url: "https://js.hcaptcha.com/1/api.js", global: "hcaptcha", name: "hCaptcha" },
    turnstile: { url: "https://challenges.cloudflare.com/turnstile/v0/api.js", global: "turnstile", name: "Cloudflare Turnstile" }
  };
  var cfLoads = {};
  /** Loads a provider's official script once (explicit render mode). Resolves with its global API. */
  function cfLoad(provider, timeout) {
    var p = CF_PROVIDERS[provider];
    if (window[p.global] && window[p.global].render) return Promise.resolve(window[p.global]);
    if (cfLoads[provider]) return cfLoads[provider];
    cfLoads[provider] = new Promise(function (resolve, reject) {
      var cb = "__jskCaptcha_" + provider;
      var timer = setTimeout(function () { delete cfLoads[provider]; reject(new Error("timeout")); }, timeout);
      window[cb] = function () { clearTimeout(timer); resolve(window[p.global]); };
      var s = document.createElement("script");
      s.src = p.url + "?onload=" + cb + "&render=explicit";
      s.async = true; s.defer = true;
      s.onerror = function () { clearTimeout(timer); delete cfLoads[provider]; s.remove(); reject(new Error("network")); };
      document.head.appendChild(s);
    });
    return cfLoads[provider];
  }
  function cfTheme(t) {
    if (t === "light" || t === "dark") return t;
    var root = document.documentElement.getAttribute("data-theme");
    if (root === "light" || root === "dark") return root;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  var CF_OWN = ["provider", "siteKey", "theme", "size", "label", "hint", "error", "required", "name", "onVerify", "onExpire", "onError",
    "timeout", "status", "loadingLabel", "loadErrorLabel", "retryLabel", "verifiedLabel", "className"];
  /**
   * CaptchaField — form field that hosts the provider's OFFICIAL widget (Google reCAPTCHA v2 checkbox by default, or hCaptcha / Cloudflare Turnstile).
   * The widget UI and branding are rendered by the provider's script; this component adds label, loading / load-error states, validation error and a hidden token input.
   * ref → { reset(), getToken() }.
   */
  var CaptchaField = React.forwardRef(function CaptchaField(props, ref) {
    var provider = CF_PROVIDERS[props.provider] ? props.provider : "recaptcha";
    var size = props.size === "compact" ? "compact" : "normal";
    var slot = React.useRef(null), widget = React.useRef(null), api = React.useRef(null);
    var st = React.useState("loading"), state = st[0], setState = st[1];
    var tk = React.useState(""), token = tk[0], setToken = tk[1];
    var attempt = React.useState(0), tries = attempt[0], setTries = attempt[1];
    var cbs = React.useRef({}); cbs.current = props;
    var fid = useFieldId();
    React.useEffect(function () {
      if (props.status) return;
      var alive = true;
      if (!props.siteKey) { setState("error"); return; }
      setState("loading");
      cfLoad(provider, props.timeout || 10000).then(function (g) {
        if (!alive || !slot.current) return;
        var render = function () {
          slot.current.innerHTML = "";
          var el = document.createElement("div"); slot.current.appendChild(el);
          api.current = g;
          widget.current = g.render(el, {
            sitekey: props.siteKey, theme: cfTheme(props.theme), size: size,
            callback: function (t) { setToken(t); if (cbs.current.onVerify) cbs.current.onVerify(t); },
            "expired-callback": function () { setToken(""); if (cbs.current.onExpire) cbs.current.onExpire(); },
            "error-callback": function () { setToken(""); if (cbs.current.onError) cbs.current.onError(new Error("widget")); }
          });
          setState("ready");
        };
        if (provider === "recaptcha" && g.ready) g.ready(render); else render();
      }).catch(function (e) { if (!alive) return; setState("error"); if (cbs.current.onError) cbs.current.onError(e); });
      return function () {
        alive = false;
        try { if (api.current && widget.current != null && api.current.remove) api.current.remove(widget.current); } catch (e) {}
        widget.current = null;
      };
    }, [provider, props.siteKey, props.theme, size, tries, props.status]);
    React.useImperativeHandle(ref, function () {
      return {
        reset: function () { setToken(""); try { if (api.current && widget.current != null) api.current.reset(widget.current); } catch (e) {} },
        getToken: function () { return token; }
      };
    }, [token]);
    var shown = props.status || state;
    var invalid = !!props.error;
    var hintId = fid + "-hint", errId = fid + "-err";
    var describedBy = [props.hint ? hintId : null, invalid ? errId : null].filter(Boolean).join(" ") || undefined;
    return h("div", Object.assign(omit(props, CF_OWN), { className: "jsk-cf jsk-cf--" + size + (invalid ? " is-invalid" : "") + (props.className ? " " + props.className : ""),
        role: "group", "aria-labelledby": props.label ? fid + "-label" : undefined, "aria-describedby": describedBy }),
      props.label ? h("div", { id: fid + "-label", className: "jsk-cf__label" }, props.label, props.required ? h("span", { className: "jsk-cf__req", "aria-hidden": "true" }, " *") : null) : null,
      h("div", { className: "jsk-cf__box" },
        h("div", { ref: slot, className: "jsk-cf__slot", hidden: shown !== "ready" }),
        shown === "loading" ? h("div", { className: "jsk-cf__ph", role: "status" },
          h("span", { className: "jsk-cf__spin", "aria-hidden": "true" }),
          h("span", null, props.loadingLabel || "Loading verification…")) : null,
        shown === "error" ? h("div", { className: "jsk-cf__ph jsk-cf__ph--error", role: "alert" },
          h("span", { className: "jsk-cf__ph-text" }, props.loadErrorLabel || (props.siteKey || props.status ? "Verification couldn't load. Check your connection." : "Verification isn't configured (missing site key).")),
          h(Button, { hierarchy: "secondary", size: "sm", onClick: function () { setTries(tries + 1); } }, props.retryLabel || "Retry")) : null),
      props.name ? h("input", { type: "hidden", name: props.name, value: token }) : null,
      token ? h("span", { className: "jsk-sr", role: "status" }, props.verifiedLabel || "Verified") : null,
      props.hint && !invalid ? h("div", { id: hintId, className: "jsk-cf__hint" }, props.hint) : null,
      invalid ? h("div", { id: errId, className: "jsk-cf__error" }, props.error) : null);
  });
  CaptchaField.displayName = "CaptchaField";

  /* ---------- SectionFooter ---------- */
  /**
   * SectionFooter — divider + footer row for a page section or card: optional start (ButtonGroup / Cancel), link, and actions on the right.
   * placement page (no side padding, 20px above) | card (24px sides, 16px bottom). Narrow containers tighten padding and wrap.
   * actions: Button props[] or nodes — hierarchy defaults to secondary, the last one primary; { destructive: true } for Delete.
   */
  var SectionFooter = React.forwardRef(function SectionFooter(props, ref) {
    var acts = props.actions;
    if (Array.isArray(acts)) acts = acts.map(function (a, i) {
      if (React.isValidElement(a)) return React.cloneElement(a, { key: a.key || i });
      var hier = a.hierarchy || (i === acts.length - 1 ? "primary" : "secondary");
      return h(Button, Object.assign({ key: i, size: props.size || "md", hierarchy: hier }, omit(a, ["label", "hierarchy"])), a.label);
    });
    var link = props.link;
    var linkNode = link ? (React.isValidElement(link) ? link : h(Button, Object.assign({ hierarchy: "link-gray", size: props.size || "md" }, omit(link, ["label"])), link.label)) : null;
    var placement = props.placement === "card" ? "card" : "page";
    return h("div", Object.assign(omit(props, ["start", "link", "actions", "placement", "divider", "size", "className", "children"]), {
        ref: ref, className: "jsk-sf jsk-sf--" + placement + (props.divider === false ? "" : " has-divider") + (props.className ? " " + props.className : "") }),
      h("div", { className: "jsk-sf__row" },
        props.start != null ? h("div", { className: "jsk-sf__start" }, props.start) : null,
        linkNode ? h("div", { className: "jsk-sf__link" }, linkNode) : null,
        acts || props.children ? h("div", { className: "jsk-sf__actions" }, acts, props.children) : null));
  });
  SectionFooter.displayName = "SectionFooter";

  /* ---------- SectionLabel ---------- */
  /**
   * SectionLabel — the left-hand label column of a settings / form row: title (+ required *, help tooltip), supporting text, optional link actions.
   * size sm (14px) | md (16px title). htmlFor turns the title into a <label>; otherwise use `id` + aria-labelledby on the field.
   * actions: Button props[] (link gray, last one link color) or nodes.
   */
  var SectionLabel = React.forwardRef(function SectionLabel(props, ref) {
    var size = props.size === "md" ? "md" : "sm";
    var fid = useFieldId(props.id);
    var TitleTag = props.htmlFor ? "label" : (props.as || "div");
    var acts = props.actions;
    if (Array.isArray(acts)) acts = acts.map(function (a, i) {
      if (React.isValidElement(a)) return React.cloneElement(a, { key: a.key || i });
      return h(Button, Object.assign({ key: i, size: "md", hierarchy: a.hierarchy || (i === acts.length - 1 ? "link-color" : "link-gray") }, omit(a, ["label", "hierarchy"])), a.label);
    });
    return h("div", Object.assign(omit(props, ["title", "description", "required", "tooltip", "tooltipDescription", "actions", "size", "htmlFor", "as", "id", "className"]), {
        ref: ref, className: "jsk-secl jsk-secl--" + size + (props.className ? " " + props.className : "") }),
      h("div", { className: "jsk-secl__text" },
        h("div", { className: "jsk-secl__head" },
          h(TitleTag, { id: fid, htmlFor: props.htmlFor, className: "jsk-secl__title" }, props.title,
            props.required ? h("span", { className: "jsk-secl__req", "aria-hidden": "true" }, "*") : null,
            props.required ? h("span", { className: "jsk-sr" }, " (required)") : null),
          props.tooltip ? h(HelpIcon, { title: props.tooltip, description: props.tooltipDescription, arrow: false }) : null),
        props.description ? h("div", { id: fid + "-desc", className: "jsk-secl__desc" }, props.description) : null),
      acts ? h("div", { className: "jsk-secl__actions" }, acts) : null);
  });
  SectionLabel.displayName = "SectionLabel";

  /* ---------- SectionHeader ---------- */
  /** SectionTabs — "button border" tab bar (tinted track, white current tab). On narrow containers the caller can swap it for a Select. */
  function SectionTabs(p) {
    var tabs = p.tabs || [], btns = React.useRef([]);
    var cur = tabs.findIndex(function (t) { return t.value === p.value; });
    function key(e, i) {
      var d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
      var j = e.key === "Home" ? 0 : e.key === "End" ? tabs.length - 1 : null;
      if (!d && j == null) return;
      e.preventDefault();
      if (j == null) j = (i + d + tabs.length) % tabs.length;
      p.onChange(tabs[j].value);
      if (btns.current[j]) btns.current[j].focus();
    }
    return h("div", { className: "jsk-shd__tabs", role: "tablist", "aria-label": p.label },
      tabs.map(function (t, i) {
        var on = i === cur;
        return h("button", { key: t.value, type: "button", role: "tab", id: t.id, "aria-selected": on, "aria-controls": t.panelId, tabIndex: on || (cur < 0 && i === 0) ? 0 : -1,
            ref: function (el) { btns.current[i] = el; }, className: "jsk-shd__tab" + (on ? " is-current" : ""),
            onClick: function () { p.onChange(t.value); }, onKeyDown: function (e) { key(e, i); } },
          t.label, t.badge != null ? h(Badge, { type: "pill", color: t.badgeColor || "error", size: "sm" }, t.badge) : null);
      }));
  }
  var SHD_OWN = ["title", "description", "titleAs", "actions", "search", "menuItems", "menuLabel", "tabs", "tab", "defaultTab", "onTabChange", "tabsLabel", "divider", "className", "children"];
  /**
   * SectionHeader — section title + description with optional actions (Button props[] or node), search field, overflow menu and tabs, then a divider.
   * Responsive (container ≤ 640px): stacks, menu pins top-right, tabs become a Select.
   */
  var SectionHeader = React.forwardRef(function SectionHeader(props, ref) {
    var Title = props.titleAs || "h2";
    var tabs = props.tabs;
    var ctl = props.tab !== undefined;
    var st = React.useState(props.defaultTab !== undefined ? props.defaultTab : tabs && tabs[0] && tabs[0].value);
    var tab = ctl ? props.tab : st[0];
    function setTab(v) { if (!ctl) st[1](v); if (props.onTabChange) props.onTabChange(v); }
    var acts = props.actions;
    if (Array.isArray(acts)) acts = h("div", { className: "jsk-shd__actions" }, acts.map(function (a, i) {
      if (React.isValidElement(a)) return React.cloneElement(a, { key: a.key || i });
      return h(Button, Object.assign({ key: i, size: "md", hierarchy: a.hierarchy || (i === acts.length - 1 ? "primary" : "secondary") }, omit(a, ["label", "hierarchy"])), a.label);
    }));
    var search = props.search ? h("div", { className: "jsk-shd__search" }, h(Input, Object.assign({ type: "search", placeholder: "Search", "aria-label": "Search", shortcut: "⌘K",
        iconLeading: h("svg", { viewBox: "0 0 20 20", width: 20, height: 20, fill: "none", "aria-hidden": "true" }, h("path", { d: SEL_SEARCH, stroke: "currentColor", strokeWidth: 1.67, strokeLinecap: "round", strokeLinejoin: "round" })) },
      props.search === true ? {} : props.search))) : null;
    var menu = props.menuItems ? h("div", { className: "jsk-shd__menu" }, h(Dropdown, { align: "end", items: props.menuItems, width: 200, label: props.menuLabel || "More options",
        trigger: h("button", { type: "button", className: "jsk-mc__menu-btn", "aria-label": props.menuLabel || "More options" }, cpIcon(MC_DOTS)) })) : null;
    var side = acts || search || props.children;
    return h("div", Object.assign(omit(props, SHD_OWN), { ref: ref,
        className: "jsk-shd" + (props.divider === false ? "" : " has-divider") + (menu ? " has-menu" : "") + (props.className ? " " + props.className : "") }),
      h("div", { className: "jsk-shd__row" },
        h("div", { className: "jsk-shd__text" },
          h(Title, { className: "jsk-shd__title" }, props.title),
          props.description ? h("p", { className: "jsk-shd__desc" }, props.description) : null),
        side ? h("div", { className: "jsk-shd__side" }, acts, search, props.children) : null,
        menu),
      tabs && tabs.length ? h("div", { className: "jsk-shd__nav" },
        h(SectionTabs, { tabs: tabs, value: tab, onChange: setTab, label: props.tabsLabel || (typeof props.title === "string" ? props.title : "Sections") }),
        h("div", { className: "jsk-shd__navsel" }, h(Select, { size: "lg", "aria-label": props.tabsLabel || (typeof props.title === "string" ? props.title : "Sections"), value: tab,
          options: tabs.map(function (t) { return { value: t.value, label: t.badge != null ? t.label + " (" + t.badge + ")" : t.label }; }), onChange: setTab }))) : null);
  });
  SectionHeader.displayName = "SectionHeader";

  /* ---------- Table ---------- */
  var TC_CHEV_R = "M7.5 15l5-5-5-5", TC_CHEV_D = "M5 7.5l5 5 5-5";
  /** Table — scroll container + <table>. striped: alternate rows on bg-secondary. */
  var Table = React.forwardRef(function Table(props, ref) {
    return h("div", { className: "jsk-table-wrap" + (props.wrapClassName ? " " + props.wrapClassName : "") },
      h("table", Object.assign(omit(props, ["striped", "size", "wrapClassName", "className", "children"]), {
          ref: ref, className: "jsk-table" + (props.striped ? " jsk-table--striped" : "") + (props.size === "sm" ? " jsk-table--sm" : "") + (props.className ? " " + props.className : "") }),
        props.children));
  });
  Table.displayName = "Table";

  /** TableRow — <tr>; alt: bg-secondary (manual striping), selected: bg-secondary + aria-selected. */
  var TableRow = React.forwardRef(function TableRow(props, ref) {
    return h("tr", Object.assign(omit(props, ["alt", "selected", "className"]), {
      ref: ref, "aria-selected": props.selected != null ? !!props.selected : undefined,
      className: "jsk-tr" + (props.alt ? " jsk-tr--alt" : "") + (props.selected ? " is-selected" : "") + (props.className ? " " + props.className : "") }));
  });
  TableRow.displayName = "TableRow";

  /**
   * TableCell — 72px data cell. Lead-cell parts: checkbox · expand chevron + level indent · leading media · title/subtitle · trailing kebab menu.
   * Anything else (badges, progress, toggles, inputs, actions) goes in children. align end right-aligns.
   */
  var TableCell = React.forwardRef(function TableCell(props, ref) {
    var Tag = props.as || "td";
    var cb = props.checkbox;
    var cbNode = cb ? (React.isValidElement(cb) ? cb : h(Checkbox, Object.assign({ size: "md", "aria-label": typeof props.title === "string" ? "Select " + props.title : "Select row" }, cb === true ? {} : cb))) : null;
    var lvl = props.level || 0;
    var exp = props.expandable ? h("button", { type: "button", className: "jsk-tc__exp", "aria-expanded": !!props.expanded,
        "aria-label": (props.expanded ? "Collapse " : "Expand ") + (typeof props.title === "string" ? props.title : "row"),
        onClick: props.onExpandedChange ? function () { props.onExpandedChange(!props.expanded); } : undefined },
        cpIcon(props.expanded ? TC_CHEV_D : TC_CHEV_R)) : null;
    var indent = lvl > 0 ? h("span", { className: "jsk-tc__indent", style: { width: lvl * 28 - 12 + "px" }, "aria-hidden": "true" }) : null;
    var hasText = props.title != null || props.subtitle != null;
    var text = hasText ? h("div", { className: "jsk-tc__text" + (props.titleWeight === "regular" ? " is-regular" : props.titleWeight === "semibold" ? " is-strong" : "") },
      props.title != null ? h("div", { className: "jsk-tc__title" }, props.title) : null,
      props.subtitle != null ? h("div", { className: "jsk-tc__sub" }, props.subtitle) : null) : null;
    var menu = props.menuItems ? h(Dropdown, { items: props.menuItems, align: "end",
        trigger: h("button", { type: "button", className: "jsk-mc__menu-btn jsk-tc__menu", "aria-label": props.menuLabel || (typeof props.title === "string" ? "Actions for " + props.title : "Row actions") }, cpIcon(MC_DOTS)) }) : null;
    return h(Tag, Object.assign(omit(props, ["as", "checkbox", "expandable", "expanded", "onExpandedChange", "level", "leading", "title", "subtitle", "titleWeight", "menuItems", "menuLabel", "align", "padding", "gap", "width", "className", "children", "style"]), {
        ref: ref, className: "jsk-tc" + (props.align === "end" ? " jsk-tc--end" : "") + (props.padding === "sm" ? " jsk-tc--sm" : "") + (props.gap === "xs" ? " jsk-tc--gap-xs" : "") + (props.className ? " " + props.className : ""),
        style: Object.assign(props.width != null ? { width: typeof props.width === "number" ? props.width + "px" : props.width } : {}, props.style) }),
      h("div", { className: "jsk-tc__in" }, indent, exp, cbNode,
        props.leading != null ? h("span", { className: "jsk-tc__lead" }, props.leading) : null,
        text, props.children, menu));
  });
  TableCell.displayName = "TableCell";


  /* ---------- TableHeaderCell / TableCard ---------- */
  var TH_SEL = "M3.5 7.5 6 10l2.5-2.5M3.5 4.5 6 2l2.5 2.5", TH_UP = "M6 9.5v-7m0 0L2.5 6M6 2.5 9.5 6", TH_DN = "M6 2.5v7m0 0L9.5 6M6 9.5 2.5 6";
  var TCARD_SEARCH = "M17.5 17.5l-2.92-2.92m1.25-3a5.83 5.83 0 1 1-11.66 0 5.83 5.83 0 0 1 11.66 0z";
  /**
   * TableHeaderCell — 44px column header on bg-secondary. checkbox (select-all, supports indeterminate) · sortable label button
   * (chevron selector → arrow when sorted, aria-sort on the th) · help node · align end.
   */
  var TableHeaderCell = React.forwardRef(function TableHeaderCell(props, ref) {
    var sort = props.sort === "asc" || props.sort === "desc" ? props.sort : null;
    var cb = props.checkbox;
    var cbNode = cb ? (React.isValidElement(cb) ? cb : h(Checkbox, Object.assign({ size: "md", "aria-label": "Select all rows" }, cb === true ? {} : cb))) : null;
    var label = props.sortable
      ? h("button", { type: "button", className: "jsk-th__sort" + (sort ? " is-sorted" : ""),
          onClick: function () { if (props.onSortChange) props.onSortChange(sort === "asc" ? "desc" : "asc"); } },
          h("span", null, props.children),
          h("span", { className: "jsk-th__ico", "aria-hidden": "true" }, cpIcon(sort === "asc" ? TH_UP : sort === "desc" ? TH_DN : TH_SEL, 12)))
      : props.children != null ? h("span", { className: "jsk-th__label" }, props.children) : null;
    return h("th", Object.assign(omit(props, ["checkbox", "sortable", "sort", "onSortChange", "help", "align", "width", "size", "background", "className", "children", "style"]), {
        ref: ref, scope: props.scope || "col",
        "aria-sort": props.sortable ? (sort === "asc" ? "ascending" : sort === "desc" ? "descending" : "none") : undefined,
        className: "jsk-th" + (props.align === "end" ? " jsk-th--end" : "") + (props.size === "sm" ? " jsk-th--sm" : "") + (props.background === "primary" ? " jsk-th--plain" : "") + (props.className ? " " + props.className : ""),
        style: Object.assign(props.width != null ? { width: typeof props.width === "number" ? props.width + "px" : props.width } : {}, props.style) }),
      h("div", { className: "jsk-th__in" }, cbNode, label, props.help == null || props.help === false ? null : React.isValidElement(props.help) ? props.help : h(HelpIcon, helpProps(props.help))));
  });
  TableHeaderCell.displayName = "TableHeaderCell";

  /**
   * TableCard — bordered card around a Table: header (title + badge + description, or a search field) with actions,
   * the table, and a footer (usually <Pagination variant="group" placement="card">).
   */
  var TableCard = React.forwardRef(function TableCard(props, ref) {
    var s = props.search;
    var searchNode = s ? (React.isValidElement(s) ? s : h(Input, Object.assign({ size: "md", type: "search", placeholder: "Search", "aria-label": "Search",
      iconLeading: cpIcon(TCARD_SEARCH) }, s === true ? {} : s))) : null;
    var hasTitle = props.title != null || props.description != null;
    var head = props.header != null ? props.header : (hasTitle || searchNode || props.actions) ? [
      hasTitle || searchNode ? h("div", { key: "m", className: "jsk-tcard__main" },
        hasTitle ? h("div", { className: "jsk-tcard__titles" },
          props.title != null ? h("div", { className: "jsk-tcard__titlerow" }, h(props.titleAs || "h2", { className: "jsk-tcard__title" }, props.title), props.badge != null ? (React.isValidElement(props.badge) ? props.badge : h(Badge, { size: "sm", color: "brand" }, props.badge)) : null) : null,
          props.description != null ? h("p", { className: "jsk-tcard__desc" }, props.description) : null) : null,
        searchNode ? h("div", { className: "jsk-tcard__search" }, searchNode) : null) : null,
      props.actions ? h("div", { key: "a", className: "jsk-tcard__actions" }, props.actions) : null] : null;
    return h("section", Object.assign(omit(props, ["title", "titleAs", "badge", "description", "search", "actions", "header", "footer", "divider", "className", "children"]), {
        ref: ref, className: "jsk-tcard" + (props.className ? " " + props.className : "") }),
      head ? h("div", { className: "jsk-tcard__head" + (props.divider === false ? "" : " has-divider") }, head) : null,
      props.children,
      props.footer || null);
  });
  TableCard.displayName = "TableCard";


  /* ---------- Tabs ---------- */
  var TABS_TYPES = ["brand", "gray", "underline", "white", "minimal", "line"];
  /**
   * Tabs — horizontal or vertical (orientation) tablist. type brand | gray | underline | white | minimal | line (vertical underline) · size sm | md · fullWidth · icon + badge per tab.
   * Roving tabindex (←/→/Home/End). On ≤640px it becomes a Select (mobile="select", default) or a scroll strip (mobile="scroll").
   * Pair with <TabPanel tabsId={id} value=…> for aria-controls / aria-labelledby wiring.
   */
  var Tabs = React.forwardRef(function Tabs(props, ref) {
    var items = props.items || [];
    var vertical = props.orientation === "vertical";
    var type = TABS_TYPES.indexOf(props.type) >= 0 ? props.type : "brand";
    if (vertical && type === "underline") type = "line";
    if (!vertical && type === "line") type = "underline";
    var size = props.size === "md" ? "md" : "sm";
    var controlled = props.value !== undefined;
    var st = React.useState(props.defaultValue !== undefined ? props.defaultValue : items[0] && items[0].value);
    var value = controlled ? props.value : st[0];
    var auto = useFieldId(props.id);
    var base = props.id || auto;
    var btns = React.useRef([]);
    function pick(v) { if (!controlled) st[1](v); if (props.onChange) props.onChange(v); }
    function onKey(e, i) {
      var nx = vertical ? "ArrowDown" : "ArrowRight", pv = vertical ? "ArrowUp" : "ArrowLeft";
      var d = e.key === nx ? 1 : e.key === pv ? -1 : 0;
      var j = e.key === "Home" ? 0 : e.key === "End" ? items.length - 1 : null;
      if (!d && j == null) return;
      e.preventDefault();
      if (j == null) { j = i; do { j = (j + d + items.length) % items.length; } while (items[j].disabled && j !== i); }
      else { var s = d || (j === 0 ? 1 : -1); while (items[j] && items[j].disabled) j += s; }
      if (!items[j]) return;
      pick(items[j].value);
      if (btns.current[j]) { btns.current[j].focus(); if (btns.current[j].scrollIntoView) btns.current[j].scrollIntoView({ block: "nearest", inline: "nearest" }); }
    }
    var cur = items.findIndex(function (it) { return it.value === value; });
    var list = h("div", { role: "tablist", "aria-orientation": vertical ? "vertical" : undefined, "aria-label": props["aria-label"] || props.label, "aria-labelledby": props["aria-labelledby"], className: "jsk-tabs__list" },
      items.map(function (it, i) {
        var on = it.value === value;
        return h("button", { key: it.value, type: "button", role: "tab", id: base + "-tab-" + it.value, "aria-selected": on,
            "aria-controls": props.panels === false ? undefined : base + "-panel-" + it.value, disabled: it.disabled,
            tabIndex: on || (cur < 0 && i === 0) ? 0 : -1, ref: function (el) { btns.current[i] = el; },
            className: "jsk-tabs__tab" + (on ? " is-current" : ""), onClick: function () { pick(it.value); }, onKeyDown: function (e) { onKey(e, i); } },
          it.icon ? h("span", { className: "jsk-tabs__icon", "aria-hidden": "true" }, it.icon) : null,
          h("span", { className: "jsk-tabs__label" }, it.label),
          it.badge != null ? h(Badge, { size: size === "md" ? "md" : "sm", color: it.badgeColor || "gray", "aria-label": it.badgeLabel }, it.badge) : null);
      }));
    var mobile = props.mobile === "scroll" ? "scroll" : "select";
    var sel = mobile === "select" ? h("div", { className: "jsk-tabs__select" }, h(Select, { size: "md", value: value, "aria-label": props["aria-label"] || props.label || "Section",
      options: items.map(function (it) { return { value: it.value, label: it.badge != null ? it.label + " (" + it.badge + ")" : it.label, disabled: it.disabled }; }),
      onChange: function (v) { pick(v); } })) : null;
    return h("div", Object.assign(omit(props, ["items", "value", "defaultValue", "onChange", "type", "size", "orientation", "fullWidth", "mobile", "panels", "label", "aria-label", "aria-labelledby", "id", "className"]), {
        ref: ref, className: "jsk-tabs jsk-tabs--" + type + " jsk-tabs--" + size + (vertical ? " jsk-tabs--vertical" : "") + (props.fullWidth ? " jsk-tabs--full" : "") + " jsk-tabs--m-" + mobile + (props.className ? " " + props.className : "") }),
      list, sel);
  });
  Tabs.displayName = "Tabs";

  /** TabPanel — role="tabpanel" wired to <Tabs id={tabsId}>. Hidden unless value === active (pass active, or render only the current one). */
  var TabPanel = React.forwardRef(function TabPanel(props, ref) {
    var hidden = props.active !== undefined ? props.active !== props.value : false;
    return h("div", Object.assign(omit(props, ["tabsId", "value", "active", "className"]), { ref: ref, role: "tabpanel", tabIndex: 0, hidden: hidden,
      id: props.tabsId + "-panel-" + props.value, "aria-labelledby": props.tabsId + "-tab-" + props.value,
      className: "jsk-tabpanel" + (props.className ? " " + props.className : "") }));
  });
  TabPanel.displayName = "TabPanel";


  /* ---------- TreeView ---------- */
  var TV_CHEV_R = "M6 12l4-4-4-4", TV_CHEV_D = "M4 6l4 4 4-4";
  var TV_GRIP = "M6 4h.01M6 8h.01M6 12h.01M10 4h.01M10 8h.01M10 12h.01";
  function tvWalk(items, fn, parent, level) { (items || []).forEach(function (it, i, arr) { fn(it, parent, level || 1, i, arr); tvWalk(it.children, fn, it, (level || 1) + 1); }); }
  function tvLeaves(it) { if (!it.children || !it.children.length) return [it.id]; var out = []; it.children.forEach(function (c) { out = out.concat(tvLeaves(c)); }); return out; }
  function tvMove(items, parentId, from, to) {
    if (parentId == null) { var a = items.slice(); var m = a.splice(from, 1)[0]; a.splice(to, 0, m); return a; }
    return items.map(function (it) {
      if (it.id === parentId) { var c = it.children.slice(); var x = c.splice(from, 1)[0]; c.splice(to, 0, x); return Object.assign({}, it, { children: c }); }
      return it.children ? Object.assign({}, it, { children: tvMove(it.children, parentId, from, to) }) : it;
    });
  }
  function tvUse(props, key, def) {
    var ctl = props[key] !== undefined;
    var st = React.useState(props["default" + key[0].toUpperCase() + key.slice(1)] !== undefined ? props["default" + key[0].toUpperCase() + key.slice(1)] : def);
    return [ctl ? props[key] : st[0], function (v) { if (!ctl) st[1](v); }];
  }
  /**
   * TreeView — hierarchical list (role="tree"). size sm (32px rows) | md (36px rows).
   * Items: { id, label, icon?, avatar?, children?, disabled? }. Leaves indent to their parent's label; folders get a chevron.
   * selectionMode: "none" | "single" (row highlight, aria-selected) | "checkbox" (tri-state, cascades to descendants; checked/mixed rows highlight).
   * connectors: └/├/│ guide lines. reorderable: drag handle + Alt+↑/↓ to move an item among its siblings (onReorder / onItemsChange).
   * Keyboard: ↑/↓ move, → expand / first child, ← collapse / parent, Home/End, Enter/Space select or toggle check.
   */
  var TreeView = React.forwardRef(function TreeView(props, ref) {
    var size = props.size === "md" ? "md" : "sm";
    var mode = props.selectionMode || (props.checkboxes ? "checkbox" : "single");
    var itemsCtl = props.items !== undefined && props.onItemsChange !== undefined;
    var itemsSt = React.useState(props.items || props.defaultItems || []);
    var items = itemsCtl ? props.items : itemsSt[0];
    React.useEffect(function () { if (!itemsCtl && props.items !== undefined) itemsSt[1](props.items); }, [props.items]);
    var exp = tvUse(props, "expanded", []);
    var sel = tvUse(props, "selected", null);
    var chk = tvUse(props, "checked", []);
    var focus = React.useState(null);
    var rows = React.useRef({});
    var drag = React.useRef(null);
    var base = useFieldId(props.id);

    var meta = {}; var order = [];
    tvWalk(items, function (it, parent, level, i, arr) { meta[it.id] = { it: it, parent: parent ? parent.id : null, level: level, index: i, count: arr.length, last: i === arr.length - 1 }; });
    var expSet = {}; exp[0].forEach(function (id) { expSet[id] = 1; });
    (function vis(list) { list.forEach(function (it) { order.push(it.id); if (it.children && it.children.length && expSet[it.id]) vis(it.children); }); })(items);

    var chkSet = {}; chk[0].forEach(function (id) { chkSet[id] = 1; });
    function chkState(it) {
      if (!it.children || !it.children.length) return chkSet[it.id] ? "on" : "off";
      var l = tvLeaves(it), n = l.filter(function (id) { return chkSet[id]; }).length;
      return n === 0 ? "off" : n === l.length ? "on" : "mixed";
    }
    function toggleCheck(it) {
      var leaves = tvLeaves(it), on = chkState(it) !== "on";
      var next = chk[0].filter(function (id) { return leaves.indexOf(id) < 0 && id !== it.id; });
      if (on) next = next.concat(leaves);
      chk[1](next); if (props.onCheckedChange) props.onCheckedChange(next);
    }
    function setExp(id, open) {
      var next = exp[0].filter(function (x) { return x !== id; }); if (open) next = next.concat([id]);
      exp[1](next); if (props.onExpandedChange) props.onExpandedChange(next);
    }
    function select(it) {
      if (it.disabled) return;
      if (mode === "checkbox") toggleCheck(it);
      else if (mode === "single") { sel[1](it.id); if (props.onSelect) props.onSelect(it.id, it); }
      if (props.onAction) props.onAction(it.id, it);
    }
    function move(id, to) {
      var m = meta[id]; if (!m || to < 0 || to >= m.count || to === m.index) return false;
      var next = tvMove(items, m.parent, m.index, to);
      if (!itemsCtl) itemsSt[1](next);
      if (props.onItemsChange) props.onItemsChange(next);
      if (props.onReorder) props.onReorder({ id: id, parentId: m.parent, from: m.index, to: to });
      return true;
    }
    var cur = focus[0] != null && meta[focus[0]] && order.indexOf(focus[0]) >= 0 ? focus[0] : (sel[0] != null && order.indexOf(sel[0]) >= 0 ? sel[0] : order[0]);
    function go(id) { if (id == null) return; focus[1](id); var el = rows.current[id]; if (el) el.focus(); }
    React.useEffect(function () { if (focus[0] != null && rows.current[focus[0]] && document.activeElement && document.activeElement.closest && document.activeElement.closest("#" + base)) rows.current[focus[0]].focus(); });
    function onKey(e, id) {
      var m = meta[id], it = m.it, has = it.children && it.children.length, i = order.indexOf(id);
      if (e.altKey && (e.key === "ArrowUp" || e.key === "ArrowDown") && props.reorderable) { e.preventDefault(); move(id, m.index + (e.key === "ArrowUp" ? -1 : 1)); focus[1](id); return; }
      if (e.key === "ArrowDown") { e.preventDefault(); go(order[i + 1]); }
      else if (e.key === "ArrowUp") { e.preventDefault(); go(order[i - 1]); }
      else if (e.key === "Home") { e.preventDefault(); go(order[0]); }
      else if (e.key === "End") { e.preventDefault(); go(order[order.length - 1]); }
      else if (e.key === "ArrowRight") { e.preventDefault(); if (has && !expSet[id]) setExp(id, true); else if (has) go(it.children[0].id); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); if (has && expSet[id]) setExp(id, false); else if (m.parent != null) go(m.parent); }
      else if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(it); }
    }

    function guides(id) {
      var path = [], m = meta[id];
      while (m) { path.unshift(m); m = m.parent != null ? meta[m.parent] : null; }
      // path[0] = root ancestor … path[n-1] = self. Column j (0-based) sits under the chevron of path[j].
      var cols = [];
      for (var j = 0; j < path.length - 1; j++) {
        var kind = "none";
        if (props.connectors) {
          var child = path[j + 1];
          if (j === path.length - 2) kind = child.last ? "end" : "tee";
          else kind = child.last ? "none" : "line";
        }
        cols.push(h("span", { key: "g" + j, className: "jsk-tree__guide" + (kind !== "none" ? " is-" + kind : ""), "aria-hidden": "true" }));
      }
      return cols;
    }
    function row(id) {
      var m = meta[id], it = m.it, has = !!(it.children && it.children.length), open = !!expSet[id];
      var cs = mode === "checkbox" ? chkState(it) : null;
      var selected = mode === "single" ? sel[0] === id : cs === "on" || cs === "mixed";
      var media = it.avatar !== undefined ? h(Avatar, Object.assign({ size: "xs" }, typeof it.avatar === "object" && !React.isValidElement(it.avatar) ? it.avatar : { name: typeof it.label === "string" ? it.label : "", src: typeof it.avatar === "string" ? it.avatar : undefined })) : it.icon || null;
      return h("li", { key: id, role: "none", className: "jsk-tree__li" },
        h("div", { role: "treeitem", id: base + "-" + id, "aria-level": m.level, "aria-setsize": m.count, "aria-posinset": m.index + 1,
            "aria-expanded": has ? open : undefined, "aria-selected": mode === "single" ? selected : undefined,
            "aria-checked": mode === "checkbox" ? (cs === "mixed" ? "mixed" : cs === "on") : undefined, "aria-disabled": it.disabled || undefined,
            tabIndex: id === cur ? 0 : -1, ref: function (el) { rows.current[id] = el; },
            className: "jsk-tree__row" + (selected ? " is-selected" : "") + (it.disabled ? " is-disabled" : "") + (drag.current && drag.current.over === id ? " is-drop" : ""),
            onClick: function () { focus[1](id); select(it); }, onKeyDown: function (e) { onKey(e, id); }, onFocus: function () { if (focus[0] !== id) focus[1](id); },
            draggable: props.reorderable ? true : undefined,
            onDragStart: props.reorderable ? function (e) { drag.current = { id: id }; e.dataTransfer.effectAllowed = "move"; try { e.dataTransfer.setData("text/plain", String(id)); } catch (x) {} } : undefined,
            onDragOver: props.reorderable ? function (e) { var d = drag.current; if (d && d.id !== id && meta[d.id] && meta[d.id].parent === m.parent) { e.preventDefault(); e.dataTransfer.dropEffect = "move"; } } : undefined,
            onDrop: props.reorderable ? function (e) { var d = drag.current; e.preventDefault(); if (d && meta[d.id] && meta[d.id].parent === m.parent) move(d.id, m.index); drag.current = null; } : undefined,
            onDragEnd: props.reorderable ? function () { drag.current = null; } : undefined },
          guides(id),
          has ? h("span", { className: "jsk-tree__chev", "aria-hidden": "true", onClick: function (e) { e.stopPropagation(); setExp(id, !open); focus[1](id); } }, cpIcon(open ? TV_CHEV_D : TV_CHEV_R, 16)) : null,
          mode === "checkbox" ? h("span", { className: "jsk-tree__box" + (cs === "on" ? " is-on" : cs === "mixed" ? " is-mixed" : ""), "aria-hidden": "true" },
            cs === "on" ? cpIcon("M10 3 4.5 8.5 2 6", 12, 1.67) : cs === "mixed" ? cpIcon("M2.5 6h7", 12, 1.67) : null) : null,
          h("span", { className: "jsk-tree__main" },
            media ? h("span", { className: "jsk-tree__media", "aria-hidden": "true" }, media) : null,
            h("span", { className: "jsk-tree__label" }, it.label),
            it.trailing || null,
            props.reorderable ? h("span", { className: "jsk-tree__grip", "aria-hidden": "true", title: "Drag to reorder (or Alt+↑/↓)" }, cpIcon(TV_GRIP, 16, 2)) : null)),
        has && open ? h("ul", { role: "group", className: "jsk-tree__group" }, it.children.map(function (c) { return row(c.id); })) : null);
    }
    return h("ul", Object.assign(omit(props, ["items", "defaultItems", "onItemsChange", "size", "selectionMode", "checkboxes", "expanded", "defaultExpanded", "onExpandedChange", "selected", "defaultSelected", "onSelect", "onAction", "checked", "defaultChecked", "onCheckedChange", "connectors", "reorderable", "onReorder", "id", "className"]), {
        ref: ref, id: base, role: "tree", "aria-multiselectable": mode === "checkbox" ? true : undefined,
        className: "jsk-tree jsk-tree--" + size + (props.connectors ? " has-connectors" : "") + (props.className ? " " + props.className : "") }),
      items.map(function (it) { return row(it.id); }));
  });
  TreeView.displayName = "TreeView";

  /* ---------- EventCalendar ---------- */
  var EC_COLORS = ["gray", "brand", "error", "warning", "success", "green", "blue-light", "blue", "indigo", "purple", "pink", "orange", "yellow", "gray-blue"];
  var EC_HOUR = 144; // px per hour (72 per 30-min slot)
  var EC_I = {
    prev: "M12.5 15l-5-5 5-5", next: "M7.5 15l5-5-5-5", chev: "M5 7.5l5 5 5-5",
    search: "M17.5 17.5l-2.92-2.92m1.25-3.33a5.83 5.83 0 1 1-11.66 0 5.83 5.83 0 0 1 11.66 0Z",
    cal: "M14 6.67H2M10.67 1.33V4M5.33 1.33V4M5.2 14.67h5.6c1.12 0 1.68 0 2.11-.22.37-.19.68-.5.87-.87.22-.43.22-.99.22-2.11V5.87c0-1.12 0-1.68-.22-2.11a2 2 0 0 0-.87-.87C12.48 2.67 11.92 2.67 10.8 2.67H5.2c-1.12 0-1.68 0-2.11.22-.37.19-.68.5-.87.87-.22.43-.22.99-.22 2.11v5.6c0 1.12 0 1.68.22 2.11.19.37.5.68.87.87.43.22.99.22 2.11.22Z",
    clock: "M8 4v4l2.67 1.33M14.67 8A6.67 6.67 0 1 1 1.33 8a6.67 6.67 0 0 1 13.34 0Z",
    bell: "M6.24 14a2 2 0 0 0 3.52 0M12 5.33a4 4 0 1 0-8 0c0 2.06-.52 3.47-1.1 4.4-.49.79-.73 1.18-.72 1.29.01.12.03.16.13.22.09.06.49.06 1.29.06h8.8c.8 0 1.2 0 1.29-.06.1-.06.12-.1.13-.22.01-.11-.23-.5-.72-1.29-.58-.93-1.1-2.34-1.1-4.4Z",
    pin: "M8 8.67a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z M8 14.67c2.67-2.67 5.33-5.06 5.33-8a5.33 5.33 0 1 0-10.66 0c0 2.94 2.66 5.33 5.33 8Z",
    edit: "M1.92 12.08c.03-.28.05-.42.09-.55.04-.12.09-.23.16-.33.08-.11.18-.21.38-.41L11.33 2a1.89 1.89 0 0 1 2.67 2.67l-8.79 8.78c-.2.2-.3.3-.41.38-.1.07-.21.12-.33.16-.13.04-.27.06-.55.09l-2.25.25.25-2.25Z",
    trash: "M10.67 4v-.53c0-.75 0-1.12-.15-1.41a1.33 1.33 0 0 0-.58-.58c-.29-.15-.66-.15-1.41-.15H7.47c-.75 0-1.12 0-1.41.15-.25.13-.45.33-.58.58-.15.29-.15.66-.15 1.41V4M2 4h12m-1.33 0v7.47c0 1.12 0 1.68-.22 2.11-.19.37-.5.68-.87.87-.43.22-.99.22-2.11.22H6.53c-1.12 0-1.68 0-2.11-.22a2 2 0 0 1-.87-.87c-.22-.43-.22-.99-.22-2.11V4",
    copy: "M3.33 10c-.62 0-.93 0-1.18-.1a1.33 1.33 0 0 1-.72-.72C1.33 8.93 1.33 8.62 1.33 8V3.47c0-.75 0-1.12.15-1.41.13-.25.33-.45.58-.58.29-.15.66-.15 1.41-.15H8c.62 0 .93 0 1.18.1.33.14.58.39.72.72.1.25.1.56.1 1.18M8.13 14.67h4.4c.75 0 1.12 0 1.41-.15.25-.13.45-.33.58-.58.15-.29.15-.66.15-1.41V8.13c0-.75 0-1.12-.15-1.41a1.33 1.33 0 0 0-.58-.58C13.65 6 13.28 6 12.53 6h-4.4c-.75 0-1.12 0-1.41.15-.25.13-.45.33-.58.58-.15.29-.15.66-.15 1.41v4.4c0 .75 0 1.12.15 1.41.13.25.33.45.58.58.29.15.66.15 1.41.15Z"
  };
  function ecColor(c) { return EC_COLORS.indexOf(c) >= 0 ? c : "brand"; }
  function ecBadgeColor(c) { return c === "green" ? "success" : c; }
  function ecDate(v) {
    if (v == null || v === "") return null;
    if (v instanceof Date) return isNaN(v) ? null : new Date(v.getTime());
    if (typeof v === "string") { var m = /^(\d{4})-(\d{2})-(\d{2})(?:[T ](\d{1,2}):(\d{2}))?/.exec(v); if (m) return new Date(+m[1], +m[2] - 1, +m[3], m[4] ? +m[4] : 0, m[5] ? +m[5] : 0); }
    var d = new Date(v); return isNaN(d) ? null : d;
  }
  function ecDay(d) { return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }
  function ecKey(d) { return d ? d.getFullYear() * 10000 + d.getMonth() * 100 + d.getDate() : null; }
  function ecAdd(d, n) { return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n); }
  function ecWeekStart(d, ws) { return ecAdd(ecDay(d), -((d.getDay() - ws + 7) % 7)); }
  function ecIsoWeek(d) { var t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())), dn = t.getUTCDay() || 7; t.setUTCDate(t.getUTCDate() + 4 - dn); var y = new Date(Date.UTC(t.getUTCFullYear(), 0, 1)); return Math.ceil(((t - y) / 864e5 + 1) / 7); }
  function ecFmt(d, locale, o) { try { return new Intl.DateTimeFormat(locale, o).format(d); } catch (e) { return d.toDateString(); } }
  function ecTime(d, h12, locale) { return h12 ? ecFmt(d, locale, { hour: "numeric", minute: "2-digit", hour12: true }) : ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2); }
  function ecHourLabel(hr, h12, locale) { return h12 ? ecFmt(new Date(2020, 0, 1, hr), locale, { hour: "numeric", hour12: true }) : ("0" + hr).slice(-2) + ":00"; }
  function ecNorm(list) {
    return (list || []).map(function (e, i) {
      var s = ecDate(e.start) || new Date(), en = ecDate(e.end);
      if (e.allDay) { s = ecDay(s); en = ecAdd(en ? ecDay(en) : s, 1); } // all-day end is inclusive
      else if (!en || en <= s) en = new Date(s.getTime() + 30 * 6e4);
      return { src: e, id: e.id != null ? e.id : i, s: s, e: en, c: ecColor(e.color) };
    }).sort(function (a, b) { return (!!b.src.allDay - !!a.src.allDay) || (a.s - b.s) || (b.e - a.e); });
  }
  function ecOn(list, d) { var a = ecDay(d), b = ecAdd(a, 1); return list.filter(function (x) { return x.s < b && x.e > a; }); }
  function ecLanes(items) {
    var lanes = [], cluster = [], end = -1;
    function flush() { cluster.forEach(function (x) { x.n = lanes.length; }); cluster = []; lanes = []; end = -1; }
    items.forEach(function (it) {
      if (cluster.length && it.a >= end) flush();
      var l = -1; for (var i = 0; i < lanes.length; i++) if (lanes[i] <= it.a) { l = i; break; }
      if (l < 0) { l = lanes.length; lanes.push(it.b); } else lanes[l] = it.b;
      it.l = l; cluster.push(it); end = Math.max(end, it.b);
    });
    flush(); return items;
  }
  function ecTimeText(x, h12, loc) { return x.src.allDay ? "All day" : ecTime(x.s, h12, loc) + " – " + ecTime(x.e, h12, loc); }

  var CE_OWN = ["event", "variant", "selected", "state", "timeFormat", "locale", "showTag", "showTime", "className", "style"];
  /**
   * CalendarEvent — one event chip. variant pill (month cell / agenda) | block (time grid) | dot (mobile month).
   * event {title, start, end, allDay, color, tag, tagColor}. Becomes a button when onClick is set.
   */
  var CalendarEvent = React.forwardRef(function CalendarEvent(props, ref) {
    var ev = props.event || {}, c = ecColor(ev.color);
    var v = ["pill", "block", "dot"].indexOf(props.variant) >= 0 ? props.variant : "pill";
    if (v === "dot") return h("span", { ref: ref, className: "jsk-ce-dot jsk-ce--" + c + (props.className ? " " + props.className : ""), style: props.style, "aria-hidden": "true" });
    var h12 = props.timeFormat === "12h", loc = props.locale || "en-US", s = ecDate(ev.start), e = ecDate(ev.end);
    var time = ev.allDay ? "All day" : s ? ecTime(s, h12, loc) + (v === "block" && e ? " – " + ecTime(e, h12, loc) : "") : null;
    var btn = !!props.onClick;
    return h(btn ? "button" : "div", Object.assign(omit(props, CE_OWN), { ref: ref, type: btn ? "button" : undefined,
        className: "jsk-ce jsk-ce--" + v + " jsk-ce--" + c + (props.selected ? " is-selected" : "") + (props.state === "hover" ? " is-hover" : "") + (props.className ? " " + props.className : ""),
        style: props.style, "aria-pressed": btn && props.selected !== undefined ? !!props.selected : undefined }),
      ev.tag && props.showTag !== false ? h(Badge, { size: "sm", color: ecBadgeColor(ecColor(ev.tagColor || c)), dot: true, className: "jsk-ce__tag" }, ev.tag) : null,
      h("span", { className: "jsk-ce__body" },
        h("span", { className: "jsk-ce__title" }, ev.title),
        time && props.showTime !== false ? h("span", { className: "jsk-ce__time" }, time) : null));
  });
  CalendarEvent.displayName = "CalendarEvent";

  function EcDetails(p) {
    var x = p.item, ev = x.src, loc = p.locale, h12 = p.h12;
    var guests = ev.guests || [];
    var cnt = { yes: 0, no: 0, awaiting: 0 };
    guests.forEach(function (g) { var st = g.status === "yes" || g.status === "no" ? g.status : "awaiting"; cnt[st]++; });
    var summary = [guests.length + (guests.length === 1 ? " guest" : " guests")];
    if (cnt.yes) summary.push(cnt.yes + " yes"); if (cnt.no) summary.push(cnt.no + " no"); if (cnt.awaiting) summary.push(cnt.awaiting + " awaiting");
    function row(ico, txt) { return h("li", { className: "jsk-ec__drow" }, cpIcon(ico, 16), h("span", null, txt)); }
    var acts = [["edit", p.onEdit, "Edit event"], ["trash", p.onDelete, "Delete event"], ["copy", p.onCopy, "Duplicate event"]].filter(function (a) { return a[1]; });
    return h("div", { className: "jsk-ec__detail" },
      h("div", { className: "jsk-ec__dhead" },
        h("h3", { className: "jsk-ec__dtitle" }, ev.title),
        acts.length ? h("div", { className: "jsk-ec__dacts" }, acts.map(function (a) {
          return h(IconButton, { key: a[0], hierarchy: "tertiary", size: "xs", icon: cpIcon(EC_I[a[0]], 16), "aria-label": a[2], onClick: function () { a[1](ev); } });
        })) : null),
      ev.tag ? h(Badge, { size: "sm", color: ecBadgeColor(ecColor(ev.tagColor || x.c)), dot: true }, ev.tag) : null,
      h("ul", { className: "jsk-ec__drows" },
        row(EC_I.cal, ecFmt(x.s, loc, { weekday: "long", day: "numeric", month: "long", year: "numeric" })),
        row(EC_I.clock, ecTimeText(x, h12, loc)),
        ev.reminder ? row(EC_I.bell, ev.reminder) : null,
        ev.location ? row(EC_I.pin, ev.location) : null),
      guests.length ? h("div", { className: "jsk-ec__guests" },
        h(AvatarGroup, { size: "sm", max: 5, avatars: guests.map(function (g) { return { name: g.name, src: g.src }; }), onAdd: p.onAddGuest ? function () { p.onAddGuest(ev); } : undefined, addLabel: "Invite guest" }),
        h("span", { className: "jsk-ec__gsum" }, summary.join(" · "))) : null,
      ev.description ? h("div", { className: "jsk-ec__about" }, h("div", { className: "jsk-ec__abouth" }, "About this event"), h("p", null, ev.description)) : null);
  }

  function EcMore(p) {
    var ref = React.useRef(null);
    React.useEffect(function () {
      var el = ref.current; if (el) { var f = el.querySelector(".jsk-ec__pop-x"); if (f) f.focus(); }
      function onDoc(e) { if (ref.current && !ref.current.contains(e.target)) p.onClose(false); }
      document.addEventListener("mousedown", onDoc);
      return function () { document.removeEventListener("mousedown", onDoc); };
    }, []);
    return h("div", { ref: ref, role: "dialog", "aria-label": p.label, className: "jsk-ec__pop" + (p.up ? " is-up" : "") + (p.end ? " is-end" : ""),
        onKeyDown: function (e) { if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); p.onClose(true); } else e.stopPropagation(); } },
      h("div", { className: "jsk-ec__pop-head" },
        h("span", { className: "jsk-ec__date jsk-ec__pop-date" + (p.today ? " is-today" : ""), "aria-hidden": "true" }, p.day),
        h(Button, { hierarchy: "tertiary", size: "sm", iconOnly: true, iconLeading: cpIcon("M15 5 5 15M5 5l10 10"), "aria-label": "Close", className: "jsk-ec__pop-x", onClick: function () { p.onClose(true); } })),
      h("div", { className: "jsk-ec__pop-list" }, p.children));
  }

  var EC_OWN = ["view", "defaultView", "onViewChange", "date", "defaultDate", "onDateChange", "events", "today", "now", "weekStartsOn", "locale", "timeFormat",
    "onEventClick", "selectedEventId", "defaultSelectedEventId", "onSelectedEventChange", "onSearch", "actions", "maxEvents", "height", "scrollToHour", "layout",
    "onMoreClick", "eventPanel", "renderEventDetails", "onEventEdit", "onEventDelete", "onEventCopy", "onAddGuest", "viewLabels", "className", "style"];
  /**
   * EventCalendar — month / week / day event calendar with header navigation.
   * events [{id, title, start, end, allDay, color, tag, tagColor, description, reminder, location, guests:[{name, src, status}]}]
   * view / defaultView / onViewChange · date / defaultDate / onDateChange · today · now · weekStartsOn (1) · timeFormat 24h | 12h
   * onEventClick · selectedEventId · onSearch · actions · maxEvents (2) · height (720) · scrollToHour (8) · layout auto | desktop | mobile
   */
  var EventCalendar = React.forwardRef(function EventCalendar(props, ref) {
    var loc = props.locale || "en-US", ws = props.weekStartsOn != null ? props.weekStartsOn : 1, h12 = props.timeFormat === "12h";
    var mobile = dpUseMobile(props.layout || "auto");
    var _t = React.useState(0), setTick = _t[1];
    React.useEffect(function () { if (props.now) return; var t = setInterval(function () { setTick(function (n) { return n + 1; }); }, 60000); return function () { clearInterval(t); }; }, [!!props.now]);
    var now = ecDate(props.now) || new Date();
    var today = ecDay(ecDate(props.today) || now);
    var vCtl = props.view !== undefined, _v = React.useState(props.defaultView || "month");
    var view = vCtl ? props.view : _v[0]; if (["month", "week", "day"].indexOf(view) < 0) view = "month";
    function setView(v) { if (!vCtl) _v[1](v); if (props.onViewChange) props.onViewChange(v); }
    var dCtl = props.date !== undefined, _d = React.useState(function () { return ecDay(ecDate(props.defaultDate) || today); });
    var date = dCtl ? ecDay(ecDate(props.date) || today) : _d[0];
    function setDate(d) { d = ecDay(d); if (!dCtl) _d[1](d); if (props.onDateChange) props.onDateChange(d); }
    var events = React.useMemo(function () { return ecNorm(props.events); }, [props.events]);
    var sCtl = props.selectedEventId !== undefined, _s = React.useState(props.defaultSelectedEventId);
    var selId = sCtl ? props.selectedEventId : _s[0];
    function pickEvent(x) { if (!sCtl) _s[1](x.id); if (props.onSelectedEventChange) props.onSelectedEventChange(x.id); if (props.onEventClick) props.onEventClick(x.src); }
    var maxEv = props.maxEvents > 0 ? props.maxEvents : 2;
    var kbd = React.useRef(false), rootRef = React.useRef(null), scrollRef = React.useRef(null);
    var uid = (React.useId ? React.useId() : "ec").replace(/[^a-zA-Z0-9_-]/g, "");
    var VL = Object.assign({ month: "Month", week: "Week", day: "Day" }, props.viewLabels);
    var VK = props.viewShortcuts === false ? {} : Object.assign({ day: "D", week: "W", month: "M" }, props.viewShortcuts);

    var y = date.getFullYear(), mo = date.getMonth();
    var rs, re;
    if (view === "month") { rs = new Date(y, mo, 1); re = new Date(y, mo + 1, 0); }
    else if (view === "week") { rs = ecWeekStart(date, ws); re = ecAdd(rs, 6); }
    else { rs = re = date; }
    var unit = view;
    function shift(dir) {
      if (view === "month") { var last = new Date(y, mo + dir + 1, 0).getDate(); setDate(new Date(y, mo + dir, Math.min(date.getDate(), last))); }
      else setDate(ecAdd(date, (view === "week" ? 7 : 1) * dir));
    }
    var _mo = React.useState(null), moreKey = _mo[0], setMoreKey = _mo[1];
    React.useEffect(function () { setMoreKey(null); }, [view, y, mo]);
    function goMore(d) {
      if (props.onMoreClick) return props.onMoreClick(d);
      if (props.moreBehavior === "day") { setDate(d); setView("day"); return; }
      setMoreKey(moreKey === ecKey(d) ? null : ecKey(d));
    }
    function closeMore(refocus) {
      var k = moreKey; setMoreKey(null);
      if (refocus && rootRef.current) setTimeout(function () { var b = rootRef.current && rootRef.current.querySelector('[data-ec-more="' + k + '"]'); if (b) b.focus(); }, 0);
    }

    // focus follows keyboard moves in the month grid / week strip
    React.useEffect(function () {
      if (!kbd.current || !rootRef.current) return; kbd.current = false;
      var b = rootRef.current.querySelector('[data-ec-k="' + ecKey(date) + '"]'); if (b) b.focus();
    });
    function gridKey(e) {
      var step = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 }[e.key], n = null;
      if (step != null) n = ecAdd(date, step);
      else if (e.key === "Home") n = ecWeekStart(date, ws);
      else if (e.key === "End") n = ecAdd(ecWeekStart(date, ws), 6);
      else if (e.key === "PageUp" || e.key === "PageDown") { var dir = e.key === "PageUp" ? -1 : 1; n = new Date(y, mo + dir, Math.min(date.getDate(), new Date(y, mo + dir + 1, 0).getDate())); }
      if (!n) return;
      e.preventDefault(); kbd.current = true; setDate(n);
    }
    function stripKey(e) {
      var step = { ArrowLeft: -1, ArrowRight: 1 }[e.key]; if (step == null) return;
      e.preventDefault(); kbd.current = true; setDate(ecAdd(date, step));
    }
    function evLabel(x) { return x.src.title + ", " + ecFmt(x.s, loc, { weekday: "long", day: "numeric", month: "long" }) + ", " + ecTimeText(x, h12, loc) + (x.src.tag ? ", " + x.src.tag : ""); }
    function evEl(x, variant, extra) {
      return h(CalendarEvent, Object.assign({ key: x.id, event: x.src, variant: variant, locale: loc, timeFormat: props.timeFormat,
        selected: x.id === selId, onClick: function () { pickEvent(x); }, "aria-label": evLabel(x) }, extra));
    }

    /* ---- header ---- */
    var sub = view === "day" ? ecFmt(date, loc, { weekday: "long", day: "numeric", month: "short", year: "numeric" })
      : ecFmt(rs, loc, { day: "numeric", month: "short", year: "numeric" }) + " – " + ecFmt(re, loc, { day: "numeric", month: "short", year: "numeric" });
    var badge = h("div", { className: "jsk-ec__today", role: "img", "aria-label": "Today, " + ecFmt(today, loc, { day: "numeric", month: "long", year: "numeric" }) },
      h("span", { className: "jsk-ec__today-m", "aria-hidden": "true" }, ecFmt(today, loc, { month: "short" }).toUpperCase()),
      h("span", { className: "jsk-ec__today-d", "aria-hidden": "true" }, today.getDate()));
    var titleBlock = h("div", { className: "jsk-ec__htext" },
      h("div", { className: "jsk-ec__hrow" },
        h("h2", { className: "jsk-ec__title", id: uid + "-title", "aria-live": "polite" }, ecFmt(date, loc, { month: "long", year: "numeric" })),
        h(Badge, { type: "modern", size: "sm", color: "gray" }, "Week " + ecIsoWeek(view === "month" && ecKey(today) >= ecKey(rs) && ecKey(today) <= ecKey(re) ? today : view === "month" ? rs : date))),
      h("div", { className: "jsk-ec__sub" }, sub));
    var nav = h(ButtonGroup, { size: "sm", className: "jsk-ec__nav", "aria-label": "Calendar navigation", items: [
      { value: "prev", icon: cpIcon(EC_I.prev), "aria-label": "Previous " + unit, title: "Previous " + unit, onClick: function () { shift(-1); } },
      { value: "today", label: "Today", onClick: function () { setDate(today); } },
      { value: "next", icon: cpIcon(EC_I.next), "aria-label": "Next " + unit, title: "Next " + unit, onClick: function () { shift(1); } }] });
    var viewDd = h(Dropdown, { align: "end", width: 216, label: "Calendar view", className: "jsk-ec__view",
      trigger: h(Button, { hierarchy: "secondary", size: "sm", iconTrailing: cpIcon(EC_I.chev, 16, 1.5), "aria-label": "View: " + VL[view] }, VL[view]),
      items: ["day", "week", "month"].map(function (v) { return { key: v, label: VL[v], radio: v === view, radioLeading: true, closeOnSelect: true, shortcut: VK[v] || undefined, onSelect: function () { setView(v); } }; }) });
    function rootKey(e) {
      if (props.onKeyDown) props.onKeyDown(e);
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.altKey || props.viewShortcuts === false) return;
      var t = e.target, tag = t && t.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || (t && t.isContentEditable) || (t && t.closest && t.closest('[role="menu"]'))) return;
      var k = (e.key || "").toUpperCase();
      for (var v in VK) if (VK[v] && VK[v].toUpperCase() === k) {
        e.preventDefault(); setView(v);
        setTimeout(function () { var r = rootRef.current; if (r && !r.contains(document.activeElement)) r.focus(); }, 0);
        return;
      }
    }
    var search = props.onSearch ? h(Button, { hierarchy: "tertiary", size: "sm", iconOnly: true, iconLeading: cpIcon(EC_I.search), "aria-label": "Search events", onClick: props.onSearch, className: "jsk-ec__search" }) : null;
    var header = mobile
      ? h("div", { className: "jsk-ec__head" },
          h("div", { className: "jsk-ec__hmain" }, badge, titleBlock),
          h("div", { className: "jsk-ec__htools" }, props.actions, viewDd, search),
          nav)
      : h("div", { className: "jsk-ec__head" },
          h("div", { className: "jsk-ec__hmain" }, badge, titleBlock),
          h("div", { className: "jsk-ec__htools" }, search, nav, viewDd, props.actions));

    /* ---- month ---- */
    function monthView() {
      var first = new Date(y, mo, 1), start = ecWeekStart(first, ws), last = new Date(y, mo + 1, 0);
      var weeks = Math.ceil((Math.round((last - start) / 864e5) + 1) / 7);
      var heads = [];
      for (var k = 0; k < 7; k++) {
        var wdd = ecAdd(start, k);
        heads.push(h("div", { key: k, role: "columnheader", className: "jsk-ec__wd", "aria-label": ecFmt(wdd, loc, { weekday: "long" }) },
          h("span", { "aria-hidden": "true" }, ecFmt(wdd, loc, { weekday: mobile ? "narrow" : "short" }))));
      }
      var rows = [h("div", { key: "h", role: "row", className: "jsk-ec__mrow jsk-ec__mrow--head" }, heads)];
      for (var r = 0; r < weeks; r++) {
        var cells = [];
        for (var c = 0; c < 7; c++) {
          var d = ecAdd(start, r * 7 + c), out = d.getMonth() !== mo, evs = ecOn(events, d);
          var key = ecKey(d), isT = key === ecKey(today), isSel = key === ecKey(date);
          var lbl = ecFmt(d, loc, { weekday: "long", day: "numeric", month: "long", year: "numeric" }) + (isT ? ", today" : "") + (evs.length ? ", " + evs.length + (evs.length === 1 ? " event" : " events") : "");
          var dateBtn = h("button", { type: "button", "data-ec-k": key, tabIndex: isSel ? 0 : -1, "aria-label": lbl, "aria-current": isT ? "date" : undefined,
            className: "jsk-ec__date" + (isT ? " is-today" : "") + (isSel ? " is-selected" : ""),
            onClick: (function (dd) { return function () { setDate(dd); }; })(d) }, d.getDate());
          var body;
          if (mobile) {
            body = evs.length ? h("span", { className: "jsk-ec__dots", "aria-hidden": "true" },
              evs.slice(0, 3).map(function (x) { return h(CalendarEvent, { key: x.id, variant: "dot", event: x.src }); }),
              evs.length > 3 ? h("span", { className: "jsk-ec__plus" }, "+" + (evs.length - 3)) : null) : null;
          } else {
            var shown = evs.length > maxEv ? evs.slice(0, maxEv) : evs;
            body = h("div", { className: "jsk-ec__cevs" },
              shown.map(function (x) { return evEl(x, "pill"); }),
              evs.length > shown.length ? h("button", { type: "button", className: "jsk-ec__more" + (moreKey === key ? " is-open" : ""), "data-ec-more": key,
                "aria-haspopup": props.onMoreClick || props.moreBehavior === "day" ? undefined : "dialog", "aria-expanded": props.onMoreClick || props.moreBehavior === "day" ? undefined : moreKey === key,
                onClick: (function (dd) { return function () { goMore(dd); }; })(d),
                "aria-label": "Show " + (evs.length - shown.length) + " more events on " + ecFmt(d, loc, { day: "numeric", month: "long" }) }, "+" + (evs.length - shown.length) + " more…") : null,
              moreKey === key ? h(EcMore, { key: "pop", day: d.getDate(), today: isT, up: r >= weeks - 2, end: c === 6, onClose: closeMore,
                label: "All events on " + ecFmt(d, loc, { weekday: "long", day: "numeric", month: "long" }) }, evs.map(function (x) { return evEl(x, "pill"); })) : null);
          }
          cells.push(h("div", { key: key, role: "gridcell", "aria-selected": isSel, className: "jsk-ec__cell" + (out ? " is-outside" : "") + (isSel ? " is-selected" : "") + (c === 6 ? " is-last-col" : "") + (r === weeks - 1 ? " is-last-row" : "") },
            dateBtn, body));
        }
        rows.push(h("div", { key: r, role: "row", className: "jsk-ec__mrow" }, cells));
      }
      var grid = h("div", { role: "grid", className: "jsk-ec__month", "aria-labelledby": uid + "-title", onKeyDown: gridKey, style: { "--ec-weeks": weeks } }, rows);
      if (!mobile) return grid;
      var dayEvs = ecOn(events, date);
      return h(React.Fragment, null, grid,
        h("section", { className: "jsk-ec__agenda", "aria-label": "Events on " + ecFmt(date, loc, { day: "numeric", month: "long" }) },
          h("h3", { className: "jsk-ec__agh" }, ecFmt(date, loc, { weekday: "long", month: "short", day: "numeric", year: "numeric" })),
          dayEvs.length ? h("div", { className: "jsk-ec__aglist" }, dayEvs.map(function (x) { return evEl(x, "pill"); }))
            : h("p", { className: "jsk-ec__empty" }, "No events")));
    }

    /* ---- time grid (week / day) ---- */
    React.useEffect(function () {
      var el = scrollRef.current; if (!el) return;
      var hr = props.scrollToHour != null ? props.scrollToHour : 8;
      el.scrollTop = Math.max(0, hr * EC_HOUR - 16);
    }, [view, mobile]);
    function timeGrid(days) {
      var multi = days.length > 1;
      var allDay = days.map(function (d) { return ecOn(events, d).filter(function (x) { return x.src.allDay; }); });
      var hasAll = allDay.some(function (l) { return l.length; });
      var nowMin = now.getHours() * 60 + now.getMinutes(), nowY = nowMin * EC_HOUR / 60, nowKey = ecKey(now);
      var showNow = days.some(function (d) { return ecKey(d) === nowKey; });
      var labels = [];
      for (var hr = 1; hr < 24; hr++) {
        var hy = hr * EC_HOUR;
        if (showNow && Math.abs(hy - nowY) < 20) continue;
        labels.push(h("span", { key: hr, className: "jsk-ec__hour", style: { top: hy } }, ecHourLabel(hr, h12, loc)));
      }
      if (showNow) labels.push(h("span", { key: "now", className: "jsk-ec__nowlabel", style: { top: nowY } }, ecTime(now, h12, loc)));
      var cols = days.map(function (d) {
        var a = ecDay(d), b = ecAdd(a, 1);
        var items = ecOn(events, d).filter(function (x) { return !x.src.allDay; }).map(function (x) {
          var s0 = x.s < a ? 0 : (x.s - a) / 6e4, e0 = x.e > b ? 1440 : (x.e - a) / 6e4;
          return { x: x, a: s0, b: Math.max(e0, s0 + 15) };
        });
        ecLanes(items);
        var isNowCol = ecKey(d) === nowKey;
        return h("div", { key: ecKey(d), role: "group", className: "jsk-ec__col" + (ecKey(d) === ecKey(today) ? " is-today" : ""), "aria-label": ecFmt(d, loc, { weekday: "long", day: "numeric", month: "long" }) },
          items.map(function (it) {
            var top = it.a * EC_HOUR / 60 + 6, ht = Math.max((it.b - it.a) * EC_HOUR / 60 - 12, 24);
            var size = ht < 48 ? " is-xs" : ht < 96 ? " is-sm" : "";
            return evEl(it.x, "block", { className: size, style: { top: top, height: ht, left: "calc(" + (it.l / it.n * 100) + "% + 6px)", width: "calc(" + (100 / it.n) + "% - 12px)" } });
          }),
          isNowCol ? h("div", { className: "jsk-ec__now", style: { top: nowY }, "aria-hidden": "true" }) : null);
      });
      var head = multi ? h("div", { className: "jsk-ec__tghead" },
        h("div", { className: "jsk-ec__gutter" }),
        days.map(function (d) {
          var k = ecKey(d), isT = k === ecKey(today), isSel = k === ecKey(date);
          return h("button", { key: k, type: "button", className: "jsk-ec__dh" + (isSel ? " is-selected" : "") + (isT ? " is-today" : ""), "aria-pressed": isSel,
              "aria-label": ecFmt(d, loc, { weekday: "long", day: "numeric", month: "long" }) + (isT ? ", today" : ""), "aria-current": isT ? "date" : undefined,
              onClick: function () { setDate(d); } },
            h("span", { className: "jsk-ec__dh-w" }, ecFmt(d, loc, { weekday: "short" })),
            h("span", { className: "jsk-ec__dh-n" }, d.getDate()));
        })) : null;
      var all = hasAll ? h("div", { className: "jsk-ec__allday" },
        h("div", { className: "jsk-ec__gutter" }, h("span", { className: "jsk-ec__alllbl" }, "All day")),
        allDay.map(function (l, i) { return h("div", { key: i, className: "jsk-ec__allcell" }, l.map(function (x) { return evEl(x, "pill", { showTime: false }); })); })) : null;
      return h("div", { ref: scrollRef, className: "jsk-ec__tg" + (multi ? " jsk-ec__tg--multi" : ""), style: { "--ec-cols": days.length, maxHeight: props.height || 720 }, tabIndex: 0, "aria-label": "Schedule" },
        head || all ? h("div", { className: "jsk-ec__sticky" }, head, all) : null,
        h("div", { className: "jsk-ec__tgbody", style: { height: 24 * EC_HOUR } },
          h("div", { className: "jsk-ec__gutter jsk-ec__hours", "aria-hidden": "true" }, labels),
          cols));
    }
    function strip() {
      var s0 = ecWeekStart(date, ws), ds = [];
      for (var i = 0; i < 7; i++) ds.push(ecAdd(s0, i));
      return h("div", { className: "jsk-ec__strip", role: "group", "aria-label": "Week", onKeyDown: stripKey },
        ds.map(function (d) {
          var k = ecKey(d), isT = k === ecKey(today), isSel = k === ecKey(date), n = ecOn(events, d).length;
          return h("button", { key: k, type: "button", "data-ec-k": k, tabIndex: isSel ? 0 : -1, "aria-pressed": isSel, "aria-current": isT ? "date" : undefined,
              "aria-label": ecFmt(d, loc, { weekday: "long", day: "numeric", month: "long" }) + (isT ? ", today" : "") + (n ? ", " + n + (n === 1 ? " event" : " events") : ""),
              className: "jsk-ec__dh" + (isSel ? " is-selected" : "") + (isT ? " is-today" : ""), onClick: function () { setDate(d); } },
            h("span", { className: "jsk-ec__dh-w", "aria-hidden": "true" }, ecFmt(d, loc, { weekday: "narrow" })),
            h("span", { className: "jsk-ec__dh-n", "aria-hidden": "true" }, d.getDate()));
        }));
    }
    function panel() {
      var dayEvs = ecOn(events, date), sel = null;
      for (var i = 0; i < dayEvs.length; i++) if (dayEvs[i].id === selId) sel = dayEvs[i];
      if (!sel) { var timed = dayEvs.filter(function (x) { return !x.src.allDay; }); sel = timed.filter(function (x) { return x.e > now; })[0] || timed[0] || dayEvs[0]; }
      var marked = []; events.forEach(function (x) { for (var d = ecDay(x.s); d < x.e; d = ecAdd(d, 1)) marked.push(d); });
      return h("aside", { className: "jsk-ec__panel", "aria-label": "Selected day" },
        h(Calendar, { className: "jsk-ec__mini", value: date, onChange: function (d) { if (d) setDate(d); }, today: today, weekStartsOn: ws, locale: loc, layout: "desktop", markedDates: marked }),
        sel ? (props.renderEventDetails ? props.renderEventDetails(sel.src)
          : h(EcDetails, { item: sel, locale: loc, h12: h12, onEdit: props.onEventEdit, onDelete: props.onEventDelete, onCopy: props.onEventCopy, onAddGuest: props.onAddGuest }))
          : h("p", { className: "jsk-ec__empty jsk-ec__detail" }, "No events on this day"));
    }

    var body;
    if (view === "month") body = monthView();
    else if (mobile) body = h(React.Fragment, null, strip(), timeGrid([date]));
    else if (view === "week") { var w0 = ecWeekStart(date, ws), wd = []; for (var i = 0; i < 7; i++) wd.push(ecAdd(w0, i)); body = timeGrid(wd); }
    else body = props.eventPanel === false ? timeGrid([date]) : h("div", { className: "jsk-ec__dayview" }, h("div", { className: "jsk-ec__daymain", style: { minHeight: props.height || 720 } }, timeGrid([date])), panel());

    return h("section", Object.assign(omit(props, EC_OWN), { ref: function (el) { rootRef.current = el; if (typeof ref === "function") ref(el); else if (ref) ref.current = el; },
        className: "jsk-ec jsk-ec--" + view + (mobile ? " jsk-ec--mobile" : "") + (props.className ? " " + props.className : ""), style: props.style,
        "aria-labelledby": props["aria-label"] ? undefined : uid + "-title", onKeyDown: rootKey, tabIndex: -1 }),
      header, h("div", { className: "jsk-ec__body" }, body));
  });
  EventCalendar.displayName = "EventCalendar";

  window.Jobseeker = { SocialIcon: SocialIcon, registerSocialLogos: registerSocialLogos, SocialButtonGroup: SocialButtonGroup, EventCalendar: EventCalendar, CalendarEvent: CalendarEvent, TreeView: TreeView, Tabs: Tabs, TabPanel: TabPanel, TableHeaderCell: TableHeaderCell, TableCard: TableCard, Table: Table, TableRow: TableRow, TableCell: TableCell, SlideoutSection: SlideoutSection, SectionHeader: SectionHeader, SectionLabel: SectionLabel, SectionFooter: SectionFooter, CaptchaField: CaptchaField, ProgressSteps: ProgressSteps, PaginationDots: PaginationDots, Pagination: Pagination, MetricCard: MetricCard, Sparkline: Sparkline,
    ChatMessage: ChatMessage,
    LoadingIndicator: LoadingIndicator,
    CtaCard: CtaCard,
    CtaItem: CtaItem,
    PlanSummary: PlanSummary,
    FeatureList: FeatureList,
    SlideoutPanel: SlideoutPanel,
    FilterPanel: FilterPanel,
    FilterMenu: FilterMenu,
    SegmentedControl: SegmentedControl,
    FilterButton: FilterButton,
    FilterCondition: FilterCondition,
    FilterBar: FilterBar,
    FileUpload: FileUpload,
    FileUploadDropzone: FileUploadDropzone,
    FileUploadItem: FileUploadItem,
    EmptyState: EmptyState,
    Calendar: Calendar, DatePickerPanel: DatePickerPanel, DatePicker: DatePicker, datePresets: dpPresets, parseDate: dpParse, formatDate: dpFmt,
    ContentDivider: ContentDivider,
    ColorPickerModal: ColorPickerModal, colorPalettes: CP_PALETTES,
    ColorPickerPopover: ColorPickerPopover,
    ColorSwatch: ColorSwatch, ColorSwatches: ColorSwatches, ColorSlider: ColorSlider, ColorArea: ColorArea, ColorInput: ColorInput, ColorPreview: ColorPreview, ColorPanel: ColorPanel, ColorPicker: ColorPicker, ColorPalette: ColorPalette,
    CodeSnippet: CodeSnippet,
    RadarChart: RadarChart,
    PieChart: PieChart,
    RadialChart: RadialChart,
    Chart: Chart, Breadcrumbs: Breadcrumbs, Alert: Alert, Banner: Banner, MessageBar: MessageBar, RatingStar: RatingStar, RatingStars: RatingStars, CheckItem: CheckItem, CheckList: CheckList, CheckIcon: CheckIcon, FolderIcon: FolderIcon, FeaturedIcon: FeaturedIcon, Notification: Notification, NotificationRegion: NotificationRegion, FileIcon: FileIcon, FeedItem: FeedItem, ActivityFeed: ActivityFeed, Button: Button, IconButton: IconButton, CloseButton: CloseButton, SocialButton: SocialButton, Badge: Badge, BadgeGroup: BadgeGroup, Checkbox: Checkbox, Radio: Radio, Input: Input, NumberInput: NumberInput, VerificationCode: VerificationCode, Textarea: Textarea, TagInput: TagInput, ProgressBar: ProgressBar, ProgressCircle: ProgressCircle, Avatar: Avatar, AvatarGroup: AvatarGroup, AvatarLabelGroup: AvatarLabelGroup, AvatarProfilePhoto: AvatarProfilePhoto, ButtonGroup: ButtonGroup, Dropdown: Dropdown, DropdownMenu: DropdownMenu, DropdownHeader: DropdownHeader, DropdownAccountTrigger: DropdownAccountTrigger, Select: Select, ChoiceCard: ChoiceCard, ChoiceCardGroup: ChoiceCardGroup, Slider: Slider, Tag: TagPublic, TextEditorToolbar: TextEditorToolbar, ToolbarButton: ToolbarButton, EditorBubbleMenu: EditorBubbleMenu, TextEditor: TextEditor, Toggle: Toggle, Tooltip: Tooltip, TooltipBubble: TooltipBubble, HelpIcon: HelpIcon, VideoPlayer: VideoPlayer };
})();
