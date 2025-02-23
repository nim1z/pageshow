// ポイント加算
function AdditionPoint()
{
	var StoragedPoint = localStorage.Point;
		if (StoragedPoint >= 1)
			{
				StoragedPoint++;
				localStorage.Point = StoragedPoint;
			}
		else
			{
				var StoragedPoint = 1;
				localStorage.Point = StoragedPoint;
			}
}
// 即時コンテンツ切り替え
function SwitchContents()
{
	parent.media.location.href= "/media/" + NextMedia + ".html"
}
//タグ読み取り時コンテンツ表示
function JumpContents()
{	
	localStorage.MediaState = "/media/" + TagMedia + ".html";
	location.assign('../index.html');
}
//タグスキャン時処理　ポイント二重付与防止・クイズモード対応
function ScannedTag()
{
	var GetTagBeforeScanned = localStorage.getItem(TagNumber);
		//タグ初回読み取り時のみポイント付与
			if (GetTagBeforeScanned != 1)
				{
					GetTagBeforeScanned = 1;
					localStorage.setItem(TagNumber,"1");
					// クイズ以外のときにポイント加算・クイズの時はポイント加算無しで直接コンテンツ表示
					if (Quiz != 1)
						{
							alert("タグを読み取りました");
							AdditionPoint();
							JumpContents();
						}
					else
					{
						alert("タグを読み取りました");
						JumpContents();
					}
				}
			else
				{
					alert("タグを読み取りました");
					JumpContents();
				}
}
// ポイント更新（読み込み）
function LoadPointStatus()
{
		let Point = localStorage.Point;
			//初回起動時ポイント未定義　0ポイントに初期化
			if(!Point)
				{
					Point = 0;
					localStorage.Point = Point;
					let PointStatus = document.getElementById("PointStatus");
					PointStatus.innerHTML = (Point + "ポイント");
				}
			else
				{
					let PointStatus = document.getElementById("PointStatus");
					PointStatus.innerHTML = (Point + "ポイント");
				}
}
// index.html開いた時　コンテンツ読み込み　
function LoadContents()
{
	let MediaState = localStorage.MediaState;
		if (!MediaState)
			{
				parent.media.location.href= "/media/title.html"
			}
		else
			{
				parent.media.location.href= MediaState;
			}
}
// テスト用　開いているコンテンツの状態を保存
function SaveState()
{
	var MediaState = parent.media.location;
	localStorage.MediaState= MediaState;
	alert("セーブしました");
}

// コンテンツ用　状態初期化
function ResetAllStatus()
{
	localStorage.clear();
	alert("オールリセット");
}

// まるばつクイズ用
function SelectQuizOX_O()
{
	SelectedAnswer = "o";
	QuizOX();
}
function SelectQuizOX_X()
{
	SelectedAnswer = "x";
	QuizOX();
}
function QuizOX()
{
	var GetAnsweredQuiz = localStorage.getItem(QuizNumber);
	if (GetAnsweredQuiz != 1)
		{
			//正解したとき、localStorageのクイズ番号に該当するキーへ1を書き込み　二度押し防止
			GetAnsweredQuiz = 1;
			localStorage.setItem(QuizNumber,"1");
			if (SelectedAnswer == "o")
				{
					alert("せいかい！つぎのコーナーへ進んでね");
					AdditionPoint();
				}
			else
				{
					localStorage.removeItem(QuizNumber);
					alert("ざんねん！");
				}

		}
	else
		{
			alert("つぎのコーナーへ進んでね");
		}
}
