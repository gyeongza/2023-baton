import React from 'react';
import { styled } from 'styled-components';
import { usePageRouter } from '@/hooks/usePageRouter';
import Avatar from '@/components/common/Avatar';
import { RunnerPost } from '@/types/runnerPost';
import Label from '@/components/common/Label';
import { REVIEW_STATUS_LABEL_TEXT } from '@/constants';

const RunnerPostItem = ({
  runnerPostData: { runnerPostId, title, deadline, tags, runnerProfile, watchedCount, chattingCount, reviewStatus },
}: {
  runnerPostData: RunnerPost;
}) => {
  const { goToRunnerPostPage } = usePageRouter();

  const handlePostClick = () => {
    goToRunnerPostPage(runnerPostId);
  };

  return (
    <S.RunnerPostItemContainer onClick={handlePostClick}>
      <S.LeftSideContainer>
        <S.PostTitle>{title}</S.PostTitle>
        <S.DeadLineContainer>
          <S.DeadLine>{deadline} 까지</S.DeadLine>
          <Label colorTheme={reviewStatus === 'DONE' ? 'GRAY' : reviewStatus === 'IN_PROGRESS' ? 'RED' : 'WHITE'}>
            {REVIEW_STATUS_LABEL_TEXT[reviewStatus]}
          </Label>
        </S.DeadLineContainer>
        <S.TagContainer>
          {tags.map((tag, index) => (
            <span key={index}>#{tag}</span>
          ))}
        </S.TagContainer>
      </S.LeftSideContainer>
      <S.RightSideContainer>
        <S.ProfileContainer>
          <Avatar width="60px" height="60px" imageUrl={runnerProfile.imageUrl} />
          <S.ProfileName>{runnerProfile.name}</S.ProfileName>
        </S.ProfileContainer>
        <S.ChatViewContainer>
          <div>조회수: {watchedCount}</div>
          <div>채팅수: {chattingCount}</div>
        </S.ChatViewContainer>
      </S.RightSideContainer>
    </S.RunnerPostItemContainer>
  );
};

export default RunnerPostItem;

const S = {
  RunnerPostItemContainer: styled.li`
    display: flex;
    justify-content: space-between;

    width: 1200px;
    height: 206px;
    padding: 35px 40px;

    border: 0.5px solid var(--gray-500);
    border-radius: 12px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);

    cursor: pointer;

    &:hover {
      transition: all 0.3s ease;
      transform: scale(1.015);
      outline: 1.5px solid var(--baton-red);
    }
  `,

  PostTitle: styled.p`
    margin-bottom: 15px;

    font-size: 28px;
    font-weight: 700;
  `,

  DeadLineContainer: styled.div`
    display: flex;
    align-items: baseline;
    gap: 10px;
  `,

  DeadLine: styled.p`
    margin-bottom: 60px;

    color: var(--gray-600);
  `,

  TagContainer: styled.div`
    & span {
      margin-right: 10px;

      font-size: 14px;
      color: var(--gray-600);
    }
  `,

  LeftSideContainer: styled.div``,
  RightSideContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-between;
  `,

  ProfileContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 30px;
    gap: 10px;
  `,

  ProfileName: styled.p`
    font-size: 14px;
  `,

  ChatViewContainer: styled.div`
    display: flex;

    gap: 10px;

    font-size: 12px;
  `,
};
