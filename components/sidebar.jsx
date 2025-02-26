import Link from "next/link"
import { FileText, Settings, List, BarChart2, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Sidebar({ open, setOpen }) {
  return (
    <>
      <aside
        className={`bg-gray-800 text-white w-64 min-h-screen p-4 fixed md:static md:translate-x-0 transition-transform duration-200 ease-in-out ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center mb-8 md:mb-0">
          <h2 className="text-2xl font-bold">HR Admin</h2>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(false)}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav className="space-y-2">
          <Link
            href="/"
            className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
            onClick={() => setOpen(false)}
          >
            <BarChart2 size={20} />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/generate"
            className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
            onClick={() => setOpen(false)}
          >
            <FileText size={20} />
            <span>Generate Letter</span>
          </Link>
          <Link
            href="/recent"
            className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
            onClick={() => setOpen(false)}
          >
            <List size={20} />
            <span>Recent Letters</span>
          </Link>
          <Link
            href="/settings"
            className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
            onClick={() => setOpen(false)}
          >
            <Settings size={20} />
            <span>Settings</span>
          </Link>
        </nav>
      </aside>
      {open && <div className="fixed inset-0 bg-black bg-opacity-50 md:hidden" onClick={() => setOpen(false)}></div>}
    </>
  )
}

