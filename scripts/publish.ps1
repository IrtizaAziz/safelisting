param(
  [Parameter(Mandatory = $true)]
  [string]$RepoUrl
)

$ErrorActionPreference = 'Stop'
Set-Location (Resolve-Path (Join-Path $PSScriptRoot '..'))
if (-not (Get-Command git -ErrorAction SilentlyContinue)) { throw 'Git is required.' }
if (-not (Test-Path '.git')) { git init; if ($LASTEXITCODE -ne 0) { throw 'git init failed' } }
git branch -M main
if ($LASTEXITCODE -ne 0) { throw 'Unable to select main branch' }
git add .
if ($LASTEXITCODE -ne 0) { throw 'git add failed' }
git diff --cached --quiet
if ($LASTEXITCODE -ne 0) {
  git commit -m 'feat: initial PEOPLE hackathon prototype foundation'
  if ($LASTEXITCODE -ne 0) { throw 'git commit failed — check git user.name and user.email' }
}
$existing = git remote get-url origin 2>$null
if ($LASTEXITCODE -eq 0) {
  if ($existing -ne $RepoUrl) { throw "Origin already points to $existing; refusing to replace it." }
} else { git remote add origin $RepoUrl }
git push -u origin main
if ($LASTEXITCODE -ne 0) { throw 'Push failed; check GitHub authentication and repository permissions.' }
Write-Host 'Published foundation to private GitHub repository. Verify visibility and GitHub Actions.'
