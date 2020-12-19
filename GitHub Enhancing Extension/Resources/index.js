(() => {
    var body = document.body;
    var style = document.createElement('style');
    style.innerHTML = `:root, [data-color-mode=auto], [data-color-mode=light] { --color-bg-overlay: rgba(255, 255, 255, 0.8); } @media (prefers-color-scheme: dark) { [data-color-mode=auto] { --color-bg-overlay: rgba(33, 38, 45, 0.7); } } [data-color-mode=dark] { --color-bg-overlay: rgba(33, 38, 45, 0.7); }
:root {
    --color-fade-black-50: transparent;
}

.SelectMenu-modal, .dropdown-menu, .Popover-message.Box, .Box--overlay, .select-menu-modal, .autocomplete-results {
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
}

.SelectMenu-item, .SelectMenu-list {
    background-color: transparent;
}

.Box--overlay {
    background-color: var(--color-bg-overlay);
}

.Box--overlay * {
    --color-bg-primary: transparent !important;
}

.SelectMenu--hasFilter .SelectMenu-modal {
    margin-top: auto;
    margin-bottom: 0;
}

.SelectMenu {
    padding: 8px;
}

.SelectMenu-tab {
    margin: 4px 2px;
    border-radius: 6px;
}

.SelectMenu-tab[aria-selected=true] {
    box-shadow: 0 4px 12px #0002;
}

@media (prefers-color-scheme: dark) {
    [data-color-mode=auto] .SelectMenu-tab[aria-selected=true] {
        border-color: transparent;
        background-color: #30363d;
    }
}

[data-color-mode=dark] .SelectMenu-tab[aria-selected=true] {
    border-color: transparent;
    background-color: #30363d;
}`;
    body.appendChild(style);

    console.log('GitHub Enhancing is launched.')
})()
