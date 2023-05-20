function AppFooter({ copyRName, copyRYear }) {
  return (
    <footer className="h-12 border-t border-slate-400 flex items-center px-4 text-sm text-slate-400">
      &copy; by {copyRName} ({copyRYear})
    </footer>
  );
}

export default AppFooter;
