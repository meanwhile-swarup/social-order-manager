import { useState } from 'react';
import {
  LayoutDashboard, ShoppingBag, MessagesSquare, Users,
  Package, BarChart3, Settings, ShoppingCart,
} from 'lucide-react';

const links = [
  { section: 'General' },
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'orders', label: 'Orders', icon: ShoppingBag, count: 18 },
  { id: 'conversations', label: 'Conversations', icon: MessagesSquare, count: 6 },
  { section: 'Catalog' },
  { id: 'products', label: 'Products', icon: Package },
  { id: 'customers', label: 'Customers', icon: Users },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { section: 'System' },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export default function Sidebar() {
  const [active, setActive] = useState('dashboard');

  return (
    <aside className="flex h-screen w-60 shrink-0 flex-col border-r border-white/[0.08] bg-[#0c0c0e] text-neutral-400">
      <div className="flex h-16 items-center gap-3 border-b border-white/[0.08] px-5">
        <span className="grid h-9 w-9 place-items-center rounded-lg bg-white">
          <ShoppingCart size={18} className="text-neutral-900" />
        </span>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-white">Social Orders</p>
          <p className="text-[11px] text-neutral-500">Admin panel</p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Main navigation">
        <ul className="space-y-0.5" role="list">
          {links.map((item, i) =>
            item.section ? (
              <li key={i} role="presentation">
                <p className="px-2.5 pb-1 pt-4 text-[11px] font-medium uppercase tracking-widest text-neutral-600 first:pt-0">
                  {item.section}
                </p>
              </li>
            ) : (
              <li key={item.id} role="none">
                <button
                  role="menuitem"
                  aria-current={active === item.id ? 'page' : undefined}
                  onClick={() => setActive(item.id)}
                  className={`group relative flex w-full items-center gap-2.5 rounded-lg px-2.5 py-[7px] text-[13px] font-medium outline-none transition-colors duration-150 ease-out ${
                    active === item.id
                      ? 'bg-white/[0.09] text-white'
                      : 'text-neutral-400 hover:bg-white/[0.04] hover:text-neutral-200'
                  } focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0c0e]`}
                >
                  {active === item.id && (
                    <span className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r-full bg-sky-400" />
                  )}
                  <item.icon
                    size={17}
                    className={`shrink-0 transition-colors duration-150 ${
                      active === item.id ? 'text-sky-400' : 'text-neutral-500 group-hover:text-neutral-300'
                    }`}
                    strokeWidth={1.75}
                  />
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.count != null && (
                    <span
                      className={`rounded-md px-1.5 py-0.5 text-[11px] font-semibold tabular-nums transition-colors duration-150 ${
                        active === item.id
                          ? 'bg-sky-400/15 text-sky-300'
                          : 'bg-white/[0.06] text-neutral-500'
                      }`}
                    >
                      {item.count}
                    </span>
                  )}
                </button>
              </li>
            )
          )}
        </ul>
      </nav>

      <div className="border-t border-white/[0.08] p-3">
        <div className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs">
          <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.4)]" />
          <span className="leading-tight">
            <span className="font-medium text-neutral-200">Bot online</span>{' '}
            <span className="text-neutral-500">· 46 chats</span>
          </span>
        </div>
        <button className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 transition-colors duration-150 hover:bg-white/[0.04]">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10 text-xs font-semibold text-white">
            SS
          </span>
          <div className="min-w-0 flex-1 leading-tight">
            <p className="truncate text-[13px] font-medium text-neutral-100">Swarup Shakya</p>
            <p className="text-[11px] text-neutral-500">Store owner</p>
          </div>
        </button>
      </div>
    </aside>
  );
}
