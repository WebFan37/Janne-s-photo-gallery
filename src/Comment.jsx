import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState , useEffect} from 'react';

export default function Comment({ouvert, setOuvert}) {

     const [comments, setComments] = useState([]);
     const [inputValue, setInputValue] = useState('');
     const [commentMemory, setCommentMemory] = useState(() => JSON.parse(window.localStorage.getItem("comment")) || {})

      //USE EFFECT FOR STORING THE COMMENT
  useEffect(() => {window.localStorage.setItem("comment", JSON.stringify(commentMemory)); }, [commentMemory])

    function fermer(){
        setOuvert(false)
    }

    function send() {

      const commentProps = {
        id: crypto.randomUUID(),
        Date: new Date().toLocaleString(),
        Content: inputValue

      }
        if (inputValue.trim() !== '') {
            setComments([...comments, commentProps]);
            setInputValue('');
        }

        setCommentMemory(comments)
    }


    
  return (
   
      <Dialog 
      open={ouvert}
      onClose={fermer}
        
      >
        <DialogTitle>COMMENTS</DialogTitle>
        <DialogContent>

        
          <DialogContentText>
            If any of you have something to say about my photo, please leave a comment here !
          </DialogContentText>

          <TextField
            autoFocus
            required
            margin="dense"
            id='textZone' 
            name="titre"
            label="Commenter ici!"
            // type="email"
            fullWidth
            variant="standard"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

                    <h4> 
                    Commentaire:
                    </h4>
         
         
            {/* Displaying each comment sent */}
            {comments.map((comment) => (
                <div className='sectionCommentaire'>

                  <div className='oneComment'>
                    <p key={comment.id}>{comment.Content}</p>
                    <p>Commented on {comment.Date}</p>
                  </div>
                    

                </div>
                
            ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={fermer}>Cancel</Button>
          <Button onClick={send}>Comment</Button>
        </DialogActions>
      </Dialog>
    
  );
}