/////////////////////////////
////トップページの基本的機能////
/////////////////////////////

//スクロール機能
$(function(){
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^="#"]').click(function() {
      // スクロールの速度
      var speed = 1000; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top-96;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});

//プロジェクトの表示/非表示
$(function(){
   $('#toggle_projects').on('click', function() {
     $('.toggle_projects_target').slideToggle(1500);
     //$('#toggle_projects').html('<i class="material-icons md-18">keyboard_arrow_up</i> プロジェクトを非表示');
   });
});

//モーダルのコントロール
$(function(){
    // 「.modal-open」をクリック
    $('.modal-open').click(function(){
        // オーバーレイ用の要素を追加
        $('body').append('<div class="modal-overlay"></div>');
        // オーバーレイをフェードイン
        $('.modal-overlay').fadeIn('slow');
        // モーダルコンテンツのIDを取得
        var modal = '#' + $(this).attr('data-target');
        // モーダルコンテンツの表示位置を設定
        modalResize();
        // モーダルコンテンツフェードイン
        $(modal).fadeIn('slow');
        // bodyにlock_scrollクラスを追加
        $('body').addClass("lock_scroll");
        // 「.modal-overlay」あるいは「.modal-close」をクリック
        $('.modal-overlay, .modal-close').off().click(function(){
            // モーダルコンテンツとオーバーレイをフェードアウト
            $(modal).fadeOut('slow');
            $('.modal-overlay').fadeOut('slow',function(){
                // オーバーレイを削除
                $('.modal-overlay').remove();
            });
            // bodyからlock_scrollクラスを削除
            $('body').removeClass("lock_scroll");
        });

        // リサイズしたら表示位置を再取得
        $(window).on('resize', function(){
            modalResize();
        });

        // モーダルコンテンツの表示位置を設定する関数
        function modalResize(){
            // ウィンドウの横幅、高さを取得
            var w = $(window).width();
            var h = $(window).height();

            // モーダルコンテンツの表示位置を取得
            var x = (w - $(modal).outerWidth(true)) / 2;
            var y = (h - $(modal).outerHeight(true)) / 2;

            // モーダルコンテンツの表示位置を設定
            $(modal).css({'left': x + 'px','top': y + 'px'});
        }

    });
});

//運営紹介ページへのリンク
$(function(){
  $('.team_members_button').click(function(){
    location.href='member';
  });
});

//お問い合わせフォームの送信 
$(function(){
  $('#send_message_button').click(function(){
    $('#send_message').click();
  });
});
