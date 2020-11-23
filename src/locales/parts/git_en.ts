export default {
  title: 'GIT Basic Steps &amp; Commands',
  description: 'Here are the most commonly used GIT-commands, some information about our repositories and a description of the basic workflows using GIT',
  gitList: [
    {
      title: 'GIT Commands',
      value: `${''}Commonly used GIT commands:<br/><br /><code>git config --global user.name &lt;username&gt;</code><br /><code>git config --global user.email &lt;email&gt;</code><br /><code>git add --all</code><br /><code>git push origin dev</code><br /><code>git status</code><br /><code>git branch</code><br /><code>git checkout</code><br /><code>git clone</code><br /><code>git pull</code><br /><code>git stash</code><br /><code>git stash pop</code><br />`,
      buttons: [
        {
          text: 'Basic GIT Tutorial',
          href: 'https://www.atlassian.com/git/tutorials',
          color: 'accent'
        }
      ]
    },
    {
      title: 'Checkout Code For The First Time',
      value: `${''}<ol><li>Navigate to a directory on your local machine where you would like to have your project you are going to checkout.</li><li>Type <br /><code>git clone &lt;URL of the repository&gt;</code><br /> You find the URL of the repository of your choice in Atlassian Stash in the upper right corner of any page in your project. For example, me cloning our Homepage-project would look like this: <br /><code>git clone https://psilo@www.unterrainer.info:8443/scm/uioh/homepage-mvc.git</code><br /></li><li>You've successfully checked out the project.</li></ol>`
    },
    {
      title: 'Revert Changes',
      value: `${''}<ol><li>If you have any uncommitted changes you want to revert (without losing any commits), type <br /><code>git reset --hard</code><br /><code>git pull</code><br /></li><li>If you want to revert these commits as well, type <br /><code>git reset --hard origin/&lt;branch&gt;</code><br /><code>git pull</code><br /></li></ol>`
    },
    {
      title: 'General Information about the Repositories on Unterrainer Informatik OG',
      value: `${''}<ul><li>All our projects have at least two branches. A master- and a dev-branch.</li><li>You are only permitted to push to the remote dev-branch of any project you have permission to use.</li><li>Only Psilo may push to and merge to the remote master-branch. You don't have the permissions.</li><li>After you've finished your work, start a pull-request so that Psilo may review your changes on the remote dev-branch and merge it to the remote master-branch.</li><li>You may also generate additional remote branches, but please check back with Psilo before doing so.</li></ul>`
    },
    {
      title: 'Install GIT on Your Local Machine',
      value: `${''}<ul><li>Install GIT on your local machine.</li><li>When prompted for options just take the default ones. They are reasonable and work. BUT...</li><li>...when choosing the Windows-Integration-Level I would vouch for the second option.</li><li>Just finish the installation by using the default options.</li><li>When done, right-click anywhere in Windows and chose 'git bash'.</li><li>Type <br /><code>git config --global http.sslVerify false</code><br /> That is necessary because we use an invalid CA-certificate for our site.</li><li>Type <br /><code>git config --global user.name &lt;your git-user's name&gt;</code><br /> to globally set the user-name for all your repositories (that spares you some typing).</li><li>Type <br /><code>git config --global user.email &lt;your git-user's email&gt;</code><br /> to globally set the user-email for all your repositories (that spares you some typing as well).</li><li>You're done.</li></ul>`
    },
    {
      title: 'Installing',
      value: `${''}<ol><li>Install GIT on your local machine first.</li><li>Install a GIT-plugin for VS2012.</li><li>Install Atlassian SourceTree.</li><li>Take the link I've sent you (for Atlassian Stash) and use it to change your password and initialize your user there.</li><li>Navigate to the repository of your choice.</li><li>Select the project of your choice.</li><li>Click the 'clone' button in the top right corner.</li><li>Select a destination folder in SourceTree to start cloning.</li><li>Be patient. This may take a while.</li><li>You now have a local copy of the repository and are ready to go.</li><li>Alternatively you may do this manually, like described later on in 'Checkout Code For The First Time'.</li></ol>`
    },
    {
      title: 'Adding files',
      value: `${''}You may use your favorite VS2012-GIT-plugin, SourceTree, or...<br/><ol><li>Open a git-bash in your current project and move to your current branch by typing <br /><code>git checkout &lt;branchName&gt;</code><br /></li><li>Type <br /><code>git add &lt;fileName&gt;</code><br /> or <br /><code>git add &lt;directory&gt; -r</code><br /> where -r means that all files are added recursively. <br /><code>git add --all</code><br /> would recursively add all Files located in the current directory, that are not listed in the .gitignore-file.</li><li>The file or files are now added to your project and your current branch.</li><li>Don't forget to commit the changes locally and remotely.</li></ol>`
    },
    {
      title: 'Deleting files',
      value: `${''}You may use your favorite VS2012-GIT-plugin, SourceTree, or...<br/><ol><li>Open a git-bash in your current project and move to your current branch by typing <br /><code>git checkout &lt;branchName&gt;</code><br /></li><li>Type <br /><code>git rm &lt;fileName&gt;</code><br /> or <br /><code>git rm &lt;directory&gt; -r</code><br /> where -r means that all files are deleted recursively.</li><li>The file or files are now removed from your project.</li><li>Don't forget to commit the changes locally and remotely.</li></ol>`
    },
    {
      title: 'Updating',
      value: `${''}You may use your favorite VS2012-GIT-plugin, SourceTree, or...<br/><ol><li>Open a git-bash in your current project and move to your current branch by typing <br /><code>git checkout &lt;branchName&gt;</code><br /></li><li>If you have uncommitted changes you want to keep, type <br /><code>git stash</code><br /> to stash them away for a while.</li><li>Type <br /><code>git pull</code><br /> which will update and merge all remote changes into your repository on all branches you share.</li><li>If you stashed away changes earlier on, type <br /><code>git stash pop</code><br /> to merge them back in now.</li><li>You may have to resolve conflicts using your favorite VS2012-GIT-plugin, SourceTree or <br /><code>git mergetool</code><br /></li></ol>`
    },
    {
      title: 'Committing',
      value: `${''}<ol><li>Make the changes in the code.</li><li>Change to the view of your favorite VS2012-GIT-plugin.</li><li>Select the files you've changed.</li><li>Enter a commit-comment.</li><li>Press 'commit'<br/>(Alternatively you may open a git-bash, move to your current branch by typing <br /><code>git checkout &lt;branchName&gt;</code><br /> and type <br /><code>git commit -m '&lt;commit-comment&gt;'</code><br /> to commit all your currently changed files).</li><li>You now have created a commit-set. In GIT you'll have to push it to your remote branch now together with other commit-sets you might have created (I would say that in that respect several commit-sets represent a working-set of some sort).</li><li>Continue with 'Push Commits To Remote'.</li></ol>`
    },
    {
      title: 'Push Commits To Remote',
      value: `${''}<ol><li>Use SourceTree or open a git-bash and type <br /><code>git push origin dev</code><br /> (assuming that your remote repo is called 'origin', which is the default name, and you want to push to the dev-branch, which you should).</li><li>Your changes are now committed to the dev branch of your remote.</li><li>Now you've got to tell me, that you've done something in the dev-branch and would like me to merge it to the main-branch (master) of the remote repo. This is done by creating a pull-request.</li><li>Navigate to the repo in Atlassian Stash (the web-page) and select your project.</li><li>Press the button 'pull-request' in the top right corner.</li><li>Fill out the form and send it. I will get it and act accordingly.</li><li>Now you're really done.</li></ol>`
    }
  ]
}
