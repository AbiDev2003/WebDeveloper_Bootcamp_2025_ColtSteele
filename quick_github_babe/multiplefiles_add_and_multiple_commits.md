## 📝 Git Commit Tips: Multiple Files

### 🔹 1. Add Multiple Files with the **Same Commit**

If you want to commit several files together under **one message**, use:

```bash
git add JavaScript/01_JSbasics.html JavaScript/02_loopsJS.html JavaScript/03_JS_arrays_and_objects.html
git commit -m "Add initial JavaScript files"
git push origin main
```

You can also add **all modified files** like this:

```bash
git add .
git commit -m "Add all JavaScript practice files"
git push origin main
```

---

You can also add **using loops**

```bash
cd JavaScript
for file in 01_JSbasics.html 02_loopsJS.html 03_JS_arrays_and_objects.html 04_a_simple_TODO_list.html 05_functions.html 06_callback_and_arraymethods.html 07_some_new_JS_features.html
do
  git add "$file"
  git commit -m "Add $file"
done
git push origin main
```

---

### 🔹 2. Add Multiple Files with **Different Commits**

If you want **separate commits for each file** (with unique messages), use this Git Bash loop:

```bash
cd JavaScript

# Files and their commit messages
files=(
"01_JSbasics.html"
"02_loopsJS.html"
"03_JS_arrays_and_objects.html"
"04_a_simple_TODO_list.html"
"05_functions.html"
"06_callback_and_arraymethods.html"
"07_some_new_JS_features.html"
)

messages=(
"Add basic JavaScript syntax examples"
"Add loop examples in JavaScript"
"Add examples of arrays and objects"
"Implement a simple TODO list project"
"Add examples of JavaScript functions"
"Add callbacks and array methods examples"
"Add modern JavaScript feature examples"
)

# Loop to add and commit one by one
for i in "${!files[@]}"; do
  git add "${files[$i]}"
  git commit -m "${messages[$i]}"
done

# Push all commits at once
git push origin main
```

---

### ✅ Use Case Summary:

| Case | Benefit |
|------|---------|
| **Same commit for all files** | Fast and simple; good for small updates |
| **Different commit per file** | Clean commit history; easy to track individual file changes |
