import React from "react";
import "./RepositoryDetails.scss";
import {
  Avatar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

function RepositoryDetails(props) {
  const { openDetails, handleCloseDetails, repo } = props;
  return (
    <Dialog
      className="Dialog"
      open={openDetails}
      onClose={handleCloseDetails}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title">{repo.title}</DialogTitle>
      <DialogContent dividers={true}>
        <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
          <p>
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain. These cases are perfectly simple and easy to distinguish. In a
            free hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best, every pleasure is
            to be welcomed and every pain avoided. But in certain circumstances
            and owing to the claims of duty or the obligations of business it
            will frequently occur that pleasures have to be repudiated and
            annoyances accepted. The wise man therefore always holds in these
            matters to this principle of selection: he rejects pleasures to
            secure other greater pleasures, or else he endures pains to avoid
            worse pains.
          </p>
        </DialogContentText>
      </DialogContent>
      <DialogActions className="DialogActions">
        {repo.tags.map((tag) => {
          return (
            <Avatar
              src={`${process.env.PUBLIC_URL}/data/${tag.toLowerCase()}.svg`}
              alt={tag}
              className="Avatar"
            />
          );
        })}
      </DialogActions>
    </Dialog>
  );
}

export default RepositoryDetails;
