import { useState } from "react";
import data from "./data.json";
import type { Extension, Filter } from "./types";
import Logo from "./components/Logo"

// تبدیل داده‌ها با id
const INITIAL_EXTENSIONS: Extension[] = data.map((item, index) => ({
  id: index + 1,
  name: item.name,
  description: item.description,
  isActive: item.isActive,
  logo: item.logo,
}));

function SunIcon() {
  return (
    <img 
      src="/images/icon-sun.svg" 
      alt="Sun icon" 
      width="20" 
      height="20" 
    />
  );
}

function MoonIcon() {
  return (
    <img 
      src="/images/icon-moon.svg" 
      alt="Moon icon" 
      width="20" 
      height="20" 
    />
  );
}

function XIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function ToggleSwitch({ active, onChange }: { active: boolean; onChange: () => void }) {
  return (
    <button
      className="toggle-switch"
      style={{ backgroundColor: active ? "hsl(3, 86%, 64%)" : "hsl(0, 0%, 78%)" }}
      onClick={onChange}
      aria-label={active ? "Deactivate extension" : "Activate extension"}
      aria-pressed={active}
    >
      <div className={`toggle-knob ${active ? "active" : ""}`} />
    </button>
  );
}

function ExtensionCard({
  ext,
  dark,
  onToggle,
  onDelete,
}: {
  ext: Extension;
  dark: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}) {
  // استخراج رنگ از نام فایل لوگو یا استفاده از رنگ پیش‌فرض
  const getColorFromName = (name: string) => {
    const colors = [
      "#4F46E5", "#1E293B", "#15AC65", "#CC1F1A", 
      "#D97706", "#7C3AED", "#0891B2", "#DC2626",
      "#65A30D", "#9333EA", "#EA580C", "#0D9488"
    ];
    const index = name.length % colors.length;
    return colors[index];
  };

  const color = getColorFromName(ext.name);

  return (
    <div
      className="ext-card relative flex flex-col gap-3 p-5 rounded-xl"
      style={{
        backgroundColor: dark ? "hsl(226, 25%, 17%)" : "#ffffff",
        border: dark ? "1px solid hsl(226, 25%, 24%)" : "1px solid hsl(220, 13%, 91%)",
        boxShadow: dark
          ? "0 1px 4px rgba(0,0,0,0.3)"
          : "0 2px 8px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
      }}
    >
      <button
        className="delete-btn absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-lg"
        style={{
          color: dark ? "hsl(0, 0%, 78%)" : "hsl(226, 11%, 55%)",
          backgroundColor: "transparent",
        }}
        onClick={() => onDelete(ext.id)}
        aria-label={`Remove ${ext.name}`}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.backgroundColor = dark ? "hsl(226, 25%, 24%)" : "hsl(0, 0%, 95%)";
          (e.currentTarget as HTMLElement).style.color = dark ? "#fff" : "hsl(0, 72%, 55%)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
          (e.currentTarget as HTMLElement).style.color = dark ? "hsl(0, 0%, 78%)" : "hsl(226, 11%, 55%)";
        }}
      >
        <XIcon />
      </button>

      <div
        className="w-12 h-12 flex items-center justify-center text-2xl flex-shrink-0"
        style={{ 
          overflow: "hidden"
        }}
      >
        {ext.logo ? (
          <img src={ext.logo} alt={ext.name} className="w-auto h-auto object-contain" />
        ) : (
          <span>📦</span>
        )}
      </div>

      <div className="flex-1 min-w-0 pr-6">
        <div
          className="text-base font-bold leading-tight mb-1"
          style={{ color: dark ? "hsl(200, 60%, 99%)" : "hsl(227, 75%, 14%)", fontSize: "16px" }}
        >
          {ext.name}
        </div>
        <div
          className="text-sm leading-snug"
          style={{ color: dark ? "hsl(0, 0%, 78%)" : "hsl(226, 11%, 37%)", fontSize: "14px" }}
        >
          {ext.description}
        </div>
      </div>

      <div className="flex items-center justify-between mt-1">
        <span
          className="text-xs font-medium px-2.5 py-1 rounded-full"
          style={{
            backgroundColor: ext.isActive
              ? "hsl(142, 71%, 45%, 0.15)"
              : dark ? "hsl(226, 25%, 24%)" : "hsl(0, 0%, 95%)",
            color: ext.isActive
              ? "hsl(142, 71%, 38%)"
              : dark ? "hsl(0, 0%, 78%)" : "hsl(226, 11%, 50%)",
            fontSize: "12px",
          }}
        >
          {ext.isActive ? "Active" : "Inactive"}
        </span>
        <ToggleSwitch active={ext.isActive} onChange={() => onToggle(ext.id)} />
      </div>
    </div>
  );
}

export default function App() {
  const [dark, setDark] = useState(false);
  const [filter, setFilter] = useState<Filter>("All");
  const [extensions, setExtensions] = useState<Extension[]>(INITIAL_EXTENSIONS);

  const filtered = extensions.filter((e) => {
    if (filter === "Active") return e.isActive;
    if (filter === "Inactive") return !e.isActive;
    return true;
  });

  const toggleExt = (id: number) =>
    setExtensions((prev) => prev.map((e) => (e.id === id ? { ...e, isActive: !e.isActive } : e)));

  const deleteExt = (id: number) =>
    setExtensions((prev) => prev.filter((e) => e.id !== id));

  const bg = dark ? "hsl(227, 75%, 14%)" : "hsl(200, 60%, 99%)";
  const textMain = dark ? "hsl(200, 60%, 99%)" : "hsl(227, 75%, 14%)";
  const textSub = dark ? "hsl(0, 0%, 78%)" : "hsl(226, 11%, 37%)";
  const headerBorder = dark ? "hsl(226, 25%, 22%)" : "hsl(220, 13%, 91%)";
  const themeBtn = dark ? "hsl(226, 25%, 22%)" : "#ffffff";
  const themeBtnBorder = dark ? "hsl(226, 25%, 28%)" : "hsl(220, 13%, 88%)";

  const filters: Filter[] = ["All", "Active", "Inactive"];

  return (
    <div
      className="min-h-full transition-colors duration-300"
      style={{ backgroundColor: bg, fontFamily: "'Noto Sans', sans-serif" }}
    >
      <header
        className="sticky z-10 backdrop-blur-sm"
        style={{
          backgroundColor: dark ? "hsl(227, 75%, 14%, 0.95)" : "hsl(200, 60%, 99%, 0.95)",
        }}
      >
        <div
        style={{
            maxWidth: "100%",
            padding: "clamp(15px, 4vw, 50px) 0 0 0",
            margin: "0 clamp(15px, 7vw, 150px) 0 clamp(15px, 7vw, 150px)",
          }}
          >
            <div
            className="flex items-center justify-between"
            style={{
              maxWidth: "1440px",
              border: `1px solid ${headerBorder}`,   
              borderRadius: "10px",
              padding: "15px 15px",
            }}
          >
            <Logo color={dark ? "#ffffff" : "#091540"} />
            <button
              className="flex items-center justify-center w-10 h-10 rounded-xl transition-colors duration-200"
              style={{
                backgroundColor: themeBtn,
                border: `1px solid ${themeBtnBorder}`,
                color: textSub,
                boxShadow: dark ? "none" : "0 1px 3px rgba(0,0,0,0.07)",
              }}
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle theme"
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      </header>

      <main
        style={{
          maxWidth: "1440px",
          margin: "0 clamp(15px, 7vw, 10px) 0 clamp(15px, 7vw, 10px)",
          padding: "40px 120px 80px",
        }}
        className="responsive-main"
      >
        <div className="flex items-center gap-2 mb-8">
          {filters.map((f) => {
            const isActive = filter === f;
            return (
              <button
                key={f}
                className="filter-btn px-5 py-2.5 rounded-xl text-sm font-medium"
                style={{
                  backgroundColor: isActive
                    ? "hsl(3, 86%, 64%)"
                    : dark ? "hsl(226, 25%, 20%)" : "#ffffff",
                  color: isActive
                    ? "#ffffff"
                    : dark ? "hsl(0, 0%, 78%)" : "hsl(226, 11%, 37%)",
                  border: isActive
                    ? "1px solid hsl(3, 77%, 44%)"
                    : dark ? "1px solid hsl(3, 71%, 56%)" : "1px solid hsl(3, 71%, 56%)",
                  boxShadow: isActive ? "0 2px 8px hsl(3, 71%, 56%)" : "none",
                  fontWeight: isActive ? 700 : 500,
                  fontSize: "14px",
                }}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            );
          })}
          <span
            className="ml-auto text-sm"
            style={{ color: textSub, fontSize: "13px" }}
          >
            {filtered.length} extension{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <span style={{ fontSize: "48px" }}>🔍</span>
            <p style={{ color: textSub, fontSize: "16px" }}>No extensions found</p>
          </div>
        ) : (
          <div
            className="grid"
            style={{
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
            }}
          >
            {filtered.map((ext) => (
              <ExtensionCard
                key={ext.id}
                ext={ext}
                dark={dark}
                onToggle={toggleExt}
                onDelete={deleteExt}
              />
            ))}
          </div>
        )}
      </main>

      <style>{`
        @media (max-width: 1024px) {
          .responsive-main {
            padding: 32px 40px 60px !important;
          }
          .responsive-main .grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          header > div {
            padding: 16px 40px !important;
          }
          header h1 {
            font-size: 22px !important;
          }
        }
        @media (max-width: 640px) {
          .responsive-main {
            padding: 24px 20px 48px !important;
          }
          .responsive-main .grid {
            grid-template-columns: 1fr !important;
          }
          header > div {
            padding: 14px 20px !important;
          }
          header h1 {
            font-size: 18px !important;
          }
        }
      `}</style>
    </div>
  );
}
