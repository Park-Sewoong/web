# 현재 디렉토리에 이름이 `project1`인 저장소 만들기

# `mydir` 디렉토리 안에 이름이 `hello`인 저장소 만들기

# `mydir/world` 디렉토리를 저장소로 만들기

git init project1

cd mydir
git init hello

cd world
git init



git version

git init

git config --global user.name "sewoong"
git config --global user.name "pso6222@naver.com"

git config --list



# git저장소를 만들어 줍니다.
git init

git add main.py
git commit -m "Initial commit"



git status

git add crawling.py

git status



git status

git reset README.txt

git add crawling.py
git add rat.py

git commit -m "commit"



# myproject로 먼저 이동후에 git init 명령을 수행해주세요.

# main.py를 myproejct디렉토리 안에 생성한 후에 print("Hello,Git!)을 작성해주세요.
echo "print('Hello, Git!')" > main.py

#저장소에 add와 commit명령을 이용하여 커밋을 완료해주세요.

cd myproject

git init

git add main.py

git commit -m "Hello"




git status

git reset ann.py reference bob.py

git add cheshire.py README.txt application.py main.py

git commit -m "new file"



git commit --amend -m "add main.py"



git branch

git branch elice

git branch

git checkout elice

git branch



git log

git checkout master

git merge add_app

git log



git branch elice

git checkout elice

git add module1.py

git commit -m "module"



git checkout master

git merge add_app

git branch -d add_app



git add crawling.py

git commit -m "conflict"

git checkout madhatter

git merge elice

git checkout master

git merge elice



git clone git://127.0.0.1/git_remote_repository



# git fetch origin master
# git merge origin/master

git pull origin master



git remote add rat /elice/project_file/git_remote_repository

git push rat master

git remote -v



# 아래 공간에 push를 완료하기 위한 명령어를 입력해 주세요. 
git pull origin master

# 아래의 명령어는 app.py의 내용을 적용하기 위한 코드입니다. 수정하지 말아주세요.
\cp -f modified.py app.py
# push를 완료하기 위한 commit 명령어를 아래에 적어주세요
git add app.py
git commit -m "asd"

# merge를 해결할 때 app.py를 고치고 myproject에 commit을 완료한 후 push해 주시면 됩니다.
git push origin master



# 지시사항 1번을 참고하여 코드를 작성하세요.
mkdir project1
cd project1
git init


# 지시사항 2번을 참고하여 코드를 작성하세요.
cd ../mydir
mkdir hello
cd hello
git init


# 지시사항 3번을 참고하여 코드를 작성하세요.
cd ../world
git init



cd random_quotes

# 지시사항 1번을 참고하여 코드를 작성하세요.
git reflog


# 지시사항 2번을 참고하여 코드를 작성하세요.
git reset --hard 9d46f15



cd soccer-leagues

# 지시사항 1번을 참고하여 코드를 작성하세요.
git branch -v
git commit -am "asdf"

# 지시사항 2번을 참고하여 코드를 작성하세요.
git checkout master
git merge bugfix/spaces-before-name



cd random_quotes


# 지시사항 1번을 참고하여 코드를 작성하세요.
git add .
git commit -m "엘리스 토끼" quotes/politics.txt quotes/science.txt 


# 지시사항 2번을 참고하여 코드를 작성하세요.
git commit -m "모자장수" quotes/music.txt quotes.py README.md



