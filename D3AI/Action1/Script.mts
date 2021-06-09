AIUtil.SetContext Browser("creationtime:=0")
Browser("creationtime:=0").Maximize
wait 5
AIUtil("profile").Click
wait 5
AIUtil("input", "Username").Type "Osamah"
AIUtil("input", "Password").Type "Osamah1"
AIUtil.FindTextBlock("SIGN IN").Click
AIUtil("profile").Click
AIUtil.FindTextBlock("Sign out").Click
