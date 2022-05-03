import EditBioForm from './EditBio.js'

const Bio = () => {
    return `
    <section class="bio">
        <div class="profile-photo">
            <img src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" alt="profile-photo">
        </div>
        <div class="profile-info">
            <p class="name"></p>
            <p class="about">></p>
            <button type="button" class="edit-bio-button">Edit bio</button>

        </div>
        ${EditBioForm()}
        
    </section>
`}
    
export default Bio