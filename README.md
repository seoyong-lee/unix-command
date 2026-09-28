# FS17 · 실용적 유닉스 커맨드 실습

코드잇 스프린트 풀스택 17기 이론 수업 **3-1. 실용적 유닉스 커맨드**(3h, 2026-10-08) 실습 자료입니다.
가상의 동네 책방 '숲속 책방' 웹 프로젝트 폴더에서 터미널 명령어를 연습합니다.

## 준비
- **Mac**: 터미널 앱 (Spotlight `cmd + space` → '터미널') 또는 VS Code 메뉴 Terminal → New Terminal
- **Windows**: **Git Bash** ([git-scm.com](https://git-scm.com)에서 Git for Windows를 설치하면 함께 설치됩니다). PowerShell은 명령어 동작이 달라서 쓰지 않습니다.

## 받기
1. 이 페이지의 초록색 **Code → Download ZIP**을 누릅니다.
2. 압축을 풀면 생기는 `unix-command-main` 폴더의 이름을 `unix-command`로 바꾸고 **바탕화면(Desktop)** 에 둡니다.
3. 터미널에서 확인합니다.
   ```bash
   cd ~/Desktop/unix-command
   ls        # practice  scenarios  README.md
   ```
> Git을 이미 쓸 줄 안다면 `cd ~/Desktop` 후 `git clone https://github.com/seoyong-lee/unix-command.git`으로 받아도 됩니다.
> Windows에서 OneDrive를 쓰면 바탕화면이 `~/OneDrive/Desktop` 또는 `~/OneDrive/바탕 화면`일 수 있습니다. 경로를 그에 맞게 바꿔 입력하세요.

## 진행 방법
`scenarios/` 문서를 **01부터 순서대로** 열어 문제의 명령어를 직접 입력합니다. 명령어는 `practice/` 폴더 안에서 실행합니다.
각 문서 끝의 확인 질문으로 점검하고 답은 **답 보기**를 눌러 확인합니다.

| 단계 | 문서 | 노션 교안 | 연습하는 명령어 |
| --- | --- | --- | --- |
| 1 | `01_탐색하기.md` | 3. 디렉터리 탐색 | `pwd` · `ls` · `cd` · 절대/상대 경로 · Tab |
| 2 | `02_만들고_지우기.md` | 4. 파일 및 디렉토리 생성/삭제 | `mkdir` · `touch` · `rm` |
| 3 | `03_복사와_이동.md` | 5. 파일 복사 및 이동 | `cp` · `mv` · 와일드카드 · 파일 정리 |
| 4 | `04_내용_보기와_출력.md` | 6. 파일 내용 보기 및 텍스트 출력 | `cat` · `echo` · `>` · `>>` |
| 5 | `05_권한_관리.md` | 7. 파일 권한 | `chmod` · `chown` · `./스크립트` |

수업 시간에는 강사가 고른 문제를 먼저 하고 나머지는 복습으로 풀어 보세요.

## practice 폴더 구성
```
practice/
├── .env.example      # 숨김 파일 (ls -a로 보임)
├── notes.txt         # 웹팀 메모
├── configs/
│   ├── deploy.sh     # 배포 스크립트 (처음에는 실행 권한 없음)
│   └── server.conf   # 서버 설정
├── downloads/        # 정리 연습용 (표지 이미지 · 주문서 · css)
├── logs/
│   ├── access.log
│   └── error.log
└── website/
    ├── index.html
    ├── css/  (style.css · reset.css)
    └── js/   (app.js)
```

## 주의
- `rm`은 휴지통 없이 바로 지웁니다. 실습은 반드시 `practice/` 안에서 하고 `pwd`로 위치를 먼저 확인하세요.
- 실습하다 폴더가 엉켰다면 `unix-command` 폴더를 지우고 ZIP을 다시 받으면 처음 상태로 돌아갑니다.
