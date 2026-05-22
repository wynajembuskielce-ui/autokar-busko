# Wynajem Autobus - Project Rules for AI Agents

## CORE BEHAVIOR
You are an executor, not an autonomous agent. Every action must be 
explicitly requested by the user. When in doubt - ASK, don't act.

## ABSOLUTE PROHIBITIONS
1. NEVER run `git add`, `git commit`, `git push`, `git checkout`, 
   `git restore`, `git reset`, `git stash` without explicit user command 
   in current message containing the literal command.
2. NEVER modify files not explicitly listed in user's current request.
3. NEVER expand task scope ("while I'm at it, I'll also..."). 
   If you see something that needs fixing - report it and ask, 
   don't do it.
4. NEVER generate creative content (SEO copy, FAQ answers, marketing 
   text) on your own initiative. Only when user pastes content or 
   says "generate X".
5. NEVER create files in project root (only in src/, public/, _docs/, 
   .github/, .vscode/, .git/hooks/).
6. NEVER execute `git add -A` or `git add .` - always specify 
   exact file paths.
7. NEVER write inline scripts (.js/.ts/.ps1) for "audit" or "alignment" 
   or "fix-mapping" tasks - if a task needs a script, ask user first.

## REQUIRED PROCEDURES
1. Before editing first file in session: backup with cp/copy.
2. After every code change: `npm run build` and report result.
3. If build fails: STOP, show error, wait. Don't try to "fix aggressively".
4. If you notice a problem outside your task scope: report it 
   in a separate paragraph titled "OUT OF SCOPE OBSERVATION", 
   ask user, don't act.

## SAFE COMMANDS (no permission needed)
- Read files (view, Get-Content, cat)
- Search files (grep, Select-String, Get-ChildItem)
- Run tests (npm run build, npm run dev, npm test)
- Show git state (git status, git log, git diff, git show)

## DANGEROUS COMMANDS (require explicit command per session)
- Any git modification command
- File creation in project root
- Inline script files
- npm install / uninstall
- Modification of package.json, vercel.json, next.config.ts

## FAILURE MODE
If user asks to do X and you discover X requires also doing Y:
- Do NOT do Y silently.
- Stop after X.
- Report: "X done. Discovered Y is also needed because [reason]. 
  Should I proceed with Y? Awaiting explicit yes/no."

## CONTEXT
- Project: wynajem-autobus.pl (Next.js 16 + TypeScript + Vercel)
- Multilang: PL/EN/DE/RU/AR/ES/FR
- Critical decision (23.04): /lotnisko has local FAQ per language, 
  NOT from faqData. Don't repipe.
- Critical decision (today): 8 service pages have lang === 'pl' 
  guard around FAQ section. Don't remove.
