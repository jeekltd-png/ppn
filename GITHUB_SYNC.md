# GitHub Sync Instructions

## 📦 Repository Not Found

The GitHub repository `https://github.com/Jeekltd-png/ppn.git` needs to be created first.

## 🚀 Steps to Sync to GitHub

### Option 1: Create Repository on GitHub First

1. **Go to GitHub**
   - Navigate to [https://github.com/Jeekltd-png](https://github.com/Jeekltd-png)
   - Or create a new account at [github.com](https://github.com) with username `Jeekltd-png`

2. **Create New Repository**
   - Click the "+" icon → "New repository"
   - Repository name: `ppn`
   - Description: "Prayer Power Network - Mobile-first website for spiritual community"
   - Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
   - Click "Create repository"

3. **Push Your Code**
   ```powershell
   cd "c:\Users\aipri\Documents\Trykon\ppn"
   git push -u origin main
   ```

### Option 2: Use GitHub CLI (if installed)

```powershell
cd "c:\Users\aipri\Documents\Trykon\ppn"
gh repo create Jeekltd-png/ppn --public --source=. --remote=origin --push
```

### Option 3: Change Remote URL (if using different account)

If you want to use a different GitHub account or repository:

```powershell
cd "c:\Users\aipri\Documents\Trykon\ppn"
git remote remove origin
git remote add origin https://github.com/YOUR-USERNAME/ppn.git
git push -u origin main
```

## 🔐 Authentication

If you encounter authentication issues:

### Using Personal Access Token (Recommended)
1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with `repo` permissions
3. Copy the token
4. When pushing, use the token as password:
   ```
   Username: Jeekltd-png
   Password: [paste your token]
   ```

### Using SSH (Alternative)
1. Generate SSH key:
   ```powershell
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
2. Add SSH key to GitHub (Settings → SSH and GPG keys)
3. Change remote URL:
   ```powershell
   git remote set-url origin git@github.com:Jeekltd-png/ppn.git
   ```

## 📋 Current Git Status

Your local repository is ready with:
- ✅ Git initialized
- ✅ All files committed
- ✅ Remote origin configured
- ⏳ Waiting for GitHub repository to be created

## 🌐 After Successful Push

Once pushed to GitHub, you can:

1. **Enable GitHub Pages**
   - Repository → Settings → Pages
   - Source: Deploy from branch
   - Branch: main / (root)
   - Save
   - Your site will be live at: `https://jeekltd-png.github.io/ppn/`

2. **Set up Branch Protection** (optional)
   - Settings → Branches → Add branch protection rule
   - Branch name pattern: `main`
   - Enable "Require pull request reviews before merging"

3. **Add Collaborators** (optional)
   - Settings → Collaborators → Add people

## 📊 Verify Repository

After creating the repository and pushing, verify:
```powershell
git remote -v
git log --oneline
git status
```

## 🆘 Troubleshooting

### Error: Repository not found
- Create the repository on GitHub first
- Ensure the username `Jeekltd-png` exists
- Check if you have access to the account

### Error: Authentication failed
- Use personal access token instead of password
- Or set up SSH keys

### Error: Permission denied
- Ensure you're logged into the correct GitHub account
- Check repository access permissions

## 📝 Next Steps After Sync

1. Add repository description and topics on GitHub
2. Enable GitHub Pages for live website
3. Add a LICENSE file if needed
4. Set up GitHub Actions for CI/CD (optional)
5. Configure custom domain (optional)

---

**Need Help?**
- [GitHub Docs](https://docs.github.com)
- [Git Documentation](https://git-scm.com/doc)
